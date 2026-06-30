import { Center, Stack } from "@mantine/core";
import classes from "./Pages.module.css";
import { OtherRecipesContent } from "@/components/OtherRecipes/OtherRecipes";

export function OtherRecipesPage() {
  return (
    <Center className={classes.pageContent}>
      <Stack className={classes.stack}>
        <OtherRecipesContent />
      </Stack>
    </Center>
  );
}
