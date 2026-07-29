import { Recipe } from "../RecipeFilters/Types";

export const template: Recipe = {
  path: "/",
  originalLink: "",
  image: "",
  imageAlt: "",
  title: "",
  time: "1 hr 30",
  description: "",
  serves: 8,
  ingredients: [[0, ""]],
  method: [""],
  filters: {
    details: {
      type: "other",
    },
    attributes: {
      freezable: false,
      hotWeatherFriendly: false,
      barnRecipe: false,
    },
    dietaries: {
      dietaryNotes: "",
      dairyFree: false,
      eggFree: true,
      halal: true,
      fishFree: true,
      glutenFree: true,
      kosher: false,
      lactoseFree: true,
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
