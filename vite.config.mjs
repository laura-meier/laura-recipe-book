import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    // Needed by scripts/prerender-og-tags.cjs to resolve local recipe images
    // (src/assets/*.jpg) to their content-hashed output filenames, since the
    // hash changes on every build.
    manifest: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});
