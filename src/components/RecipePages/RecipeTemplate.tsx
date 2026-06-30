import { Button, Checkbox, Container, Image, List, ListItem, Text, Title } from "@mantine/core";
import classes from "./RecipeTemplate.module.css";
import { useState } from "react";
import { Icons2 } from "../Icons/Icons";
import { Recipe } from "../RecipeFilters/Types";

export function RecipeTemplate(recipe: Recipe) {
  const { image, title, description, serves, ingredients, method, time, filters } = recipe;
  const { dietaries } = filters;
  const { veganFriendly } = dietaries;

  const [isVeganToggle, setIsVeganToggle] = useState(false);
  const [servesValue, setServesValue] = useState(serves);

  const servesMultiplier = servesValue / serves;

  const ingredientsArray =
    isVeganToggle && veganFriendly ? dietaries.makeItVegan.veganIngredients : ingredients;

  const ingredientsList = ingredientsArray.map((item) => (
    <ListItem
      id="checklistItem"
      classNames={{ item: classes.ingredientItem, itemLabel: classes.ingredientLabel }}
    >
      <Checkbox
        color="orange.4"
        iconColor="dark.8"
        size="md"
        label={[item[0] * servesMultiplier, item[1]]}
      />
    </ListItem>
  ));

  const methodArray = isVeganToggle && veganFriendly ? dietaries.makeItVegan.veganMethod : method;

  const methodList = methodArray.map((item) => <ListItem>{item}</ListItem>);

  return (
    <Container size="xl" px={{ base: 0, md: "md" }}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <div className={classes.head}>
            <div className={classes.imageParent}>
              <Image src={image} alt={recipe.imageAlt} className={classes.image} />
            </div>
            <div className={classes.headText}>
              <Title className={classes.title}>
                {isVeganToggle && veganFriendly ? `Vegan ${title.toLowerCase()}` : title}
              </Title>
              <div className={classes.icons}>
                <Icons2
                  recipe={recipe}
                  isVeganToggle={isVeganToggle}
                  setIsVeganToggle={setIsVeganToggle}
                  serves={serves}
                  servesValue={servesValue}
                  setServesValue={setServesValue}
                />
              </div>
              <Text c="dimmed">{description}</Text>
            </div>
          </div>
          <div className={classes.wrapper}>
            <div className={classes.ingredients}>
              <Title className={classes.subtitle}>Ingredients</Title>
              <List mt={30} spacing="xs" className={classes.text}>
                {ingredientsList}
              </List>
            </div>
            <div className={classes.method}>
              <Title className={classes.subtitle}>Method</Title>
              <List mt={30} spacing="sm" size="sm" type="ordered" className={classes.text}>
                {methodList}
              </List>
            </div>
          </div>
          <div className={classes.button}>
            <Button
              component="a"
              target="_blank"
              href={recipe.originalLink}
              rel="noopener noreferrer"
              color="orange"
              variant="default"
              size="md"
              className={classes.control}
            >
              Original recipe
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
