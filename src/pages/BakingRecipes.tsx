import { Center, Stack } from "@mantine/core";
import classes from "./Pages.module.css";
import { BakingRecipesContent } from "@/components/Baking/BakingRecipes";

export function BakingRecipesPage() {
  return (
    <Center className={classes.pageContent}>
      <Stack className={classes.stack}>
        <BakingRecipesContent />
      </Stack>
    </Center>
  );
}
