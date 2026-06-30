import { Center, Container, Stack } from "@mantine/core";
import classes from "./Pages.module.css";
import { RecipeTemplate } from "@/components/RecipePages/RecipeTemplate";
import { Recipe } from "@/components/RecipeFilters/Types";

export function RecipeTemplatePage(recipe: Recipe) {
  return (
    <Container className={classes.pageContent}>
      <RecipeTemplate {...recipe} />
    </Container>
  );
}
