import { Center, Stack } from "@mantine/core";
import classes from "./Pages.module.css";
import { RecipeLibraryContent } from "@/components/RecipeLibrary/RecipeLibrary";

export function RecipeLibraryPage() {
  return (
    <Center className={classes.pageContent}>
      <Stack className={classes.stack}>
        <RecipeLibraryContent />
      </Stack>
    </Center>
  );
}
