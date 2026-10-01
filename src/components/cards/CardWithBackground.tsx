import { Paper, Text, Title } from "@mantine/core";
import classes from "./CardWithBackground.module.css";
import { Recipe } from "../RecipeFilters/Types";

export function CardWithBackground(recipe: Recipe) {
  const { image, title, time, path } = recipe;
  return (
    <a href={path} className={classes.link}>
      <Paper
        shadow="md"
        p="md"
        radius="md"
        style={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      >
        <div className={classes.transparent}>
          <Title className={classes.title}>{title}</Title>
        </div>
        <div className={`${classes.transparent} ${classes.timeBox}`}>
          <Text className={classes.time} size="md">
            {time.toLowerCase()}
          </Text>
        </div>
      </Paper>
    </a>
  );
}
