import { Center, Stack } from "@mantine/core";
import classes from "./Pages.module.css";
import { MainMealRecipesContent } from "@/components/MainMeals/MainMealRecipes";

export function HomePage() {
  return (
    <Center className={classes.pageContent}>
      <Stack className={classes.stack}>
        <MainMealRecipesContent />
      </Stack>
    </Center>
  );
}
