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
  ingredients: [[2, ""]],
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
      veganFriendly: false,
    },
  },
};
