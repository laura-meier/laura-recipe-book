import { Button, Paper, Text, Title } from "@mantine/core";
import classes from "./CardWithBackground.module.css";
import { Recipe } from "../RecipeFilters/Types";

export function CardWithBackground(recipe: Recipe) {
  const { image, title, time, path } = recipe;
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {time.toLowerCase()}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Cook this
      </Button>
    </Paper>
  );
}
