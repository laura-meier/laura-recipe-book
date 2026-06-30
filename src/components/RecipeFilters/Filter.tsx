import {
  Container,
  Group,
  SimpleGrid,
  Text,
  Tree,
  TreeSelect,
  TreeSelectProps,
} from "@mantine/core";
import { useState } from "react";
import { data } from "./RecipeCollation";
import { RecipeCard } from "../cards/RecipeCard";
import { filterOptions } from "./Tree";
import classes from "./Filter.module.css";

export function Filter({ recipeType }: { recipeType?: string }) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const scopedData = recipeType
    ? data.filter((item) => item.filters.details.type === recipeType)
    : data;

  const tagMatchers: Record<string, (item: (typeof data)[number]) => boolean> = {
    // attributes
    freezable: (item) => item.filters.attributes.freezable,
    hotWeatherFriendly: (item) => item.filters.attributes.hotWeatherFriendly,
    barnRecipe: (item) => item.filters.attributes.barnRecipe,
    // dietaries
    veganFriendly: (item) => item.filters.dietaries.veganFriendly,
    // details — type
    "type:main meal": (item) => item.filters.details.type === "main meal",
    "type:baking": (item) => item.filters.details.type === "baking",
    "type:other": (item) => item.filters.details.type === "other",
    // details — base / protein / dish (derived from scopedData)
    ...Object.fromEntries(
      scopedData.flatMap((item) => {
        if (item.filters.details.type !== "main meal") return [];
        const details = item.filters.details; // narrowed to main meal variant
        return [
          [
            `base:${details.base}`,
            (i: (typeof data)[number]) =>
              i.filters.details.type === "main meal" && i.filters.details.base === details.base,
          ],
          [
            `protein:${details.protein}`,
            (i: (typeof data)[number]) =>
              i.filters.details.type === "main meal" &&
              i.filters.details.protein === details.protein,
          ],
          [
            `dish:${details.dish}`,
            (i: (typeof data)[number]) =>
              i.filters.details.type === "main meal" && i.filters.details.dish === details.dish,
          ],
        ];
      }),
    ),
    // details — cookingMethod (derived from scopedData)
    ...Object.fromEntries(
      scopedData.flatMap((item) => {
        if (item.filters.details.type !== "main meal") return [];
        return item.filters.details.cookingMethod.map((m) => [
          `cookingMethod:${m}`,
          (i: (typeof data)[number]) =>
            i.filters.details.type === "main meal" && i.filters.details.cookingMethod.includes(m),
        ]);
      }),
    ),
  };

  const filtered =
    selectedTags.length === 0
      ? scopedData
      : scopedData.filter((item) => selectedTags.every((tag) => tagMatchers[tag]?.(item) ?? false));

  const dataArgs = filterOptions(scopedData, recipeType);

  const renderTreeNode: TreeSelectProps["renderNode"] = ({ node }) => (
    <Group gap="xs">
      {node.nodeProps?.icon}
      <Text size="sm">{node.label}</Text>
    </Group>
  );

  return (
    <Container w="100%">
      <TreeSelect
        label="Filter recipes"
        placeholder="Pick filters"
        data={dataArgs}
        renderNode={renderTreeNode}
        mode="multiple"
        value={selectedTags}
        onChange={setSelectedTags}
        clearable
        searchable
        expandOnClick
        defaultExpandAll
        nothingFoundMessage="Nothing found..."
        withLines={false}
      />
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" mt={50}>
        {filtered.map((item) => (
          <RecipeCard key={item.title} {...item} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
