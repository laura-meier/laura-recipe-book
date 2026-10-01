import type { TreeNodeData } from "@mantine/core";
import { IconLeaf, IconSnowflake, IconSunHigh } from "@tabler/icons-react";
import { booleanDietaryKeys, dietaryLabels, Recipe } from "./Types";

export function filterOptions(recipes: Recipe[], recipeType?: string): TreeNodeData[] {
  const unique = <T,>(arr: T[]) => [...new Set(arr)];

  const bases = unique(
    recipes.flatMap((r) =>
      r.filters.details.type === "main meal" ? [r.filters.details.base] : [],
    ),
  );
  const proteins = unique(
    recipes.flatMap((r) =>
      r.filters.details.type === "main meal" ? [r.filters.details.protein] : [],
    ),
  );
  const dishes = unique(
    recipes.flatMap((r) =>
      r.filters.details.type === "main meal" ? [r.filters.details.dish] : [],
    ),
  );
  const cookingMethods = unique(
    recipes.flatMap((r) =>
      r.filters.details.type === "main meal" ? r.filters.details.cookingMethod : [],
    ),
  );
  const authors = unique(recipes.flatMap((r) => (r.filters.attributes.author ? [r.filters.attributes.author] : [])));

  const nodes: TreeNodeData[] = [
    {
      value: "attributes",
      label: "Attributes",
      children: [
        { value: "freezable", label: "Freezable", nodeProps: { icon: <IconSnowflake /> } },
        {
          value: "hotWeatherFriendly",
          label: "Hot weather friendly",
          nodeProps: { icon: <IconSunHigh /> },
        },
        {
          value: "author",
          label: "Author",
          children: authors.map((author) => ({ value: `author:${author}`, label: author })),
        },
      ],
    },
    {
      value: "dietaries",
      label: "Dietaries",
      children: [
        ...booleanDietaryKeys.map((key) => ({ value: key, label: dietaryLabels[key] })),
        { value: "vegan", label: "Vegan" },
        { value: "veganAdjustable", label: "Can be made vegan", nodeProps: { icon: <IconLeaf /> } },
      ],
    },
  ];

  if (!recipeType) {
    nodes.push(
      {
        value: "type:main meal",
        label: "Main meal",
        children: [
          {
            value: "base",
            label: "Base",
            children: bases.map((base) => ({ value: `base:${base}`, label: base })),
          },
          {
            value: "protein",
            label: "Protein",
            children: proteins.map((p) => ({ value: `protein:${p}`, label: p })),
          },
          {
            value: "dish",
            label: "Dish",
            children: dishes.map((d) => ({ value: `dish:${d}`, label: d })),
          },
          {
            value: "cookingMethod",
            label: "Cooking method",
            children: cookingMethods.map((m) => ({ value: `cookingMethod:${m}`, label: m })),
          },
        ],
      },
      { value: "type:baking", label: "Baking" },
      { value: "type:other", label: "Other" },
    );
  }

  if (recipeType === "main meal") {
    nodes.push(
      {
        value: "base",
        label: "Base",
        children: bases.map((base) => ({ value: `base:${base}`, label: base })),
      },
      {
        value: "protein",
        label: "Protein",
        children: proteins.map((p) => ({ value: `protein:${p}`, label: p })),
      },
      {
        value: "dish",
        label: "Dish",
        children: dishes.map((d) => ({ value: `dish:${d}`, label: d })),
      },
      {
        value: "cookingMethod",
        label: "Cooking method",
        children: cookingMethods.map((m) => ({ value: `cookingMethod:${m}`, label: m })),
      },
    );
  }

  if (recipeType === "baking") {
    nodes.push({ value: "type:baking", label: "Baking" });
  }

  if (recipeType === "other") {
    nodes.push({ value: "type:other", label: "Other" });
  }

  return nodes;
}
