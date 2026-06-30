import { Badge, Container, Group, Text, Title } from "@mantine/core";
import classes from "./MainMealRecipes.module.css";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Filter } from "../RecipeFilters/Filter";

export function MainMealRecipesContent() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container className={classes.container} size="lg" py="xl">
      <Group justify="center">
        <Badge color="orange" variant="filled" size="lg">
          Laura's favourites
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Recipes
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Dishes that you can cook at home over and over again.
      </Text>

      <Filter recipeType={"main meal"} />
    </Container>
  );
}
