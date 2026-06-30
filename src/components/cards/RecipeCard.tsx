import { Paper, Text, Title } from "@mantine/core";
import classes from "./RecipeCard.module.css";
import { Icons } from "../Icons/Icons";
import { Recipe } from "../RecipeFilters/Types";

export function RecipeCard(recipe: Recipe) {
  const { image, title, time, path } = recipe;

  return (
    <a href={path}>
      <Paper>
        <Paper
          shadow="md"
          radius="md"
          style={{ backgroundImage: `url(${image})` }}
          className={classes.card}
        >
          <div className={classes.overlay}>
            <Icons recipe={recipe} />
            <div></div>
          </div>
        </Paper>
        <div className={classes.caption}>
          <Title className={classes.title}>{title}</Title>
          <Text className={classes.time} size="xs">
            {time}
          </Text>
        </div>
      </Paper>
    </a>
  );
}
