/**
 * Prerender per-recipe HTML files with Open Graph / Twitter Card tags for link
 * previews (WhatsApp, iMessage, Slack, etc.). Those crawlers do not execute
 * JavaScript, so the SPA's single index.html (generic <title>, no og: tags)
 * previews identically for every recipe. This script runs AFTER `vite build`
 * and, for each recipe in RecipeList.ts, writes `dist/<slug>/index.html` — a
 * copy of the built shell with recipe-specific meta tags injected. Netlify
 * serves a matching static file (e.g. dist/aubergine-veggie-chilli/index.html
 * for a request to /aubergine-veggie-chilli) in preference to the SPA
 * fallback in _redirects, so crawlers see real tags while the React app
 * loads and takes over identically to before for real visitors.
 *
 * Must run after `vite build`, not before: it reads dist/.vite/manifest.json
 * to resolve local image imports (src/assets/foo.jpg) to their *current*
 * content-hashed filename (assets/foo-XXXXXXXX.jpg), which changes on every
 * build. Hardcoding a hash here would silently 404 on the next deploy.
 */

const fs = require("fs");
const path = require("path");
const esbuild = require("esbuild");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const DIST_DIR = path.join(PROJECT_ROOT, "dist");
const SITE_ORIGIN = "https://laura-recipe-book.netlify.app";
const RECIPE_LIST_PATH = path.join(
  PROJECT_ROOT,
  "src/components/RecipeLibrary/RecipeList.ts"
);

function escapeHtmlAttr(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Loads RecipeList.ts's `data` export in a plain Node script (no Vite/JSX
 * runtime available here). esbuild strips the type-only `Recipe` import
 * automatically. Local image imports (`import img from "../../assets/x.jpg"`)
 * become `require("../../assets/x.jpg")` after transpilation — real Node
 * can't load binary files as modules, so a temporary require.extensions hook
 * intercepts those and returns the project-relative source path
 * (e.g. "src/assets/x.jpg"), which is exactly the key format used in Vite's
 * manifest.json. This mirrors what Vite does internally, without needing a
 * full Vite/SSR pipeline just to read a data file.
 */
function loadRecipeData() {
  const restoreExtensions = {};
  for (const ext of [".jpg", ".jpeg", ".png", ".svg"]) {
    restoreExtensions[ext] = require.extensions[ext];
    require.extensions[ext] = (mod, filename) => {
      mod.exports = path.relative(PROJECT_ROOT, filename).split(path.sep).join("/");
    };
  }

  const source = fs.readFileSync(RECIPE_LIST_PATH, "utf8");
  const { code } = esbuild.transformSync(source, {
    loader: "ts",
    format: "cjs",
    target: "node18",
  });

  const tempFile = RECIPE_LIST_PATH.replace(/\.ts$/, ".__prerender-tmp.cjs");
  fs.writeFileSync(tempFile, code);

  let data;
  try {
    delete require.cache[require.resolve(tempFile)];
    data = require(tempFile).data;
  } finally {
    fs.unlinkSync(tempFile);
    for (const ext of Object.keys(restoreExtensions)) {
      if (restoreExtensions[ext]) {
        require.extensions[ext] = restoreExtensions[ext];
      } else {
        delete require.extensions[ext];
      }
    }
  }

  if (!Array.isArray(data)) {
    throw new Error("RecipeList.ts did not export an array `data` — aborting prerender.");
  }
  return data;
}

/**
 * Resolves a recipe's `image` field to an absolute URL for og:image.
 * - Local asset imports resolve via the manifest key (e.g. "src/assets/x.jpg")
 *   to their built, content-hashed path, then get the site origin prepended.
 * - Already-absolute URLs (the hotlinked BBC/Pinterest/etc. images) pass
 *   through unchanged — flaky by nature of being hotlinked, but that's a
 *   separate, accepted issue for now, not something this script can fix.
 */
function resolveImageUrl(image, manifest) {
  if (/^https?:\/\//.test(image)) {
    return image;
  }
  const entry = manifest[image];
  if (!entry) {
    console.warn(
      `[prerender-og-tags] No manifest entry for local image "${image}" — ` +
        `falling back to the raw source path, which will NOT resolve on the ` +
        `deployed site. Check that this asset is actually imported in RecipeList.ts.`
    );
    return `${SITE_ORIGIN}/${image}`;
  }
  return `${SITE_ORIGIN}/${entry.file}`;
}

function buildOgTags({ url, title, description, image, imageAlt }) {
  return [
    `<meta property="og:type" content="article" />`,
    `<meta property="og:url" content="${escapeHtmlAttr(url)}" />`,
    `<meta property="og:title" content="${escapeHtmlAttr(title)}" />`,
    `<meta property="og:description" content="${escapeHtmlAttr(description)}" />`,
    `<meta property="og:image" content="${escapeHtmlAttr(image)}" />`,
    `<meta property="og:image:alt" content="${escapeHtmlAttr(imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtmlAttr(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtmlAttr(description)}" />`,
    `<meta name="twitter:image" content="${escapeHtmlAttr(image)}" />`,
  ].join("\n    ");
}

function injectIntoShell(shellHtml, recipe, ogTags) {
  let html = shellHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${escapeHtmlAttr(recipe.title)}</title>`
  );
  // Insert right after <title> so tags land in a predictable, easy-to-diff spot.
  html = html.replace(
    /(<title>.*?<\/title>)/,
    `$1\n    ${ogTags}`
  );
  return html;
}

function main() {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error(`dist/ not found at ${DIST_DIR} — run \`vite build\` before this script.`);
  }

  const manifestPath = path.join(DIST_DIR, ".vite", "manifest.json");
  if (!fs.existsSync(manifestPath)) {
    throw new Error(
      `dist/.vite/manifest.json not found. Vite must be run with \`build.manifest: true\` ` +
        `(see vite.config.mjs) so this script can resolve hashed asset filenames.`
    );
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

  const shellPath = path.join(DIST_DIR, "index.html");
  const shellHtml = fs.readFileSync(shellPath, "utf8");

  const recipes = loadRecipeData();
  let written = 0;

  for (const recipe of recipes) {
    if (!recipe.path || !recipe.path.startsWith("/")) {
      console.warn(`[prerender-og-tags] Skipping recipe with unexpected path:`, recipe.path);
      continue;
    }
    const slug = recipe.path.slice(1);
    const outDir = path.join(DIST_DIR, slug);
    const outFile = path.join(outDir, "index.html");

    const imageUrl = resolveImageUrl(recipe.image, manifest);
    const ogTags = buildOgTags({
      url: `${SITE_ORIGIN}${recipe.path}`,
      title: recipe.title,
      description: recipe.description || recipe.title,
      image: imageUrl,
      imageAlt: recipe.imageAlt || recipe.title,
    });

    const html = injectIntoShell(shellHtml, recipe, ogTags);

    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(outFile, html);
    written += 1;
  }

  console.log(`[prerender-og-tags] Wrote ${written} recipe preview page(s) into dist/.`);

  // dist/.vite/manifest.json is an internal build artifact we only needed to
  // resolve hashed image filenames above — it's not meant to be a publicly
  // served file, so remove it now that this script is done with it.
  fs.rmSync(path.join(DIST_DIR, ".vite"), { recursive: true, force: true });
}

main();
