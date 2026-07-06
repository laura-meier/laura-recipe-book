import { Recipe } from "../RecipeFilters/Types";

export const chickenCaesarSaladWrap: Recipe = {
  path: "/chicken-caesar-salad-wrap",
  originalLink: "",
  image: "https://i.pinimg.com/originals/15/ad/46/15ad46012040bcd7eab776f7d10a24f5.jpg",
  imageAlt:
    "A bowl of tossed chicken, bacon, croutons and lettuce, with a healthy amount of parmesan grated on top",
  title: "Chicken caesar salad wrap",
  time: "1 hr 20",
  description: "",
  serves: 4,

  ingredients: [[2, "hg"]],
  method: [""],
  filters: {
    details: {
      type: "main meal",
      base: "wrap",
      protein: "chicken",
      dish: "salad",
      cookingMethod: ["oven"],
    },
    attributes: {
      freezable: false,
      hotWeatherFriendly: true,
      barnRecipe: true,
    },
    dietaries: {
      dietaryNotes: "",
      dairyFree: false,
      eggFree: false,
      halal: true,
      fishFree: true,
      glutenFree: false,
      kosher: false,
      lactoseFree: false,
      nutFree: true,
      shellfishFree: true,
      soyFree: true,
      pescatarian: false,
      vegetarian: false,
      vegan: false,
      veganAdjustable: false,
    },
  },
};
