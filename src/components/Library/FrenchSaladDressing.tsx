import { Recipe } from "../RecipeFilters/Types";

export const frenchSaladDressing: Recipe = {
  path: "/french-dressing",
  originalLink: "https://www.bbcgoodfood.com/howto/guide/10-salad-dressings-you-can-make-minutes",
  image:
    "https://images.immediate.co.uk/production/volatile/sites/30/2016/08/French-dressing-a881090.jpg?quality=90&webp=true&fit=975,649",
  imageAlt:
    "A bowl of yellow salad dressing in a white and blue bowl with a whisk discarded to the side",
  title: "French dressing",
  time: "1 hr 30",
  description:
    "A classic recipe that everyone enjoys, made with oil and vinegar. This is the solid foundation of the salad dressing world.",
  serves: 8,
  ingredients: [
    [1, " tsp Dijon mustard"],
    [2, " tbsp white wine vinegar"],
    [6, " tbsp extra virgin olive oil"],
    [0, "Sugar"],
    [0, "Salt and pepper"],
  ],
  method: [
    "To make, whisk 1 tsp Dijon mustard with 2 tbsp white wine vinegar, 6 tbsp extra virgin olive oil, a pinch of sugar and salt and pepper in a small bowl or shake together in a jam jar.",
  ],
  filters: {
    details: {
      type: "other",
    },
    attributes: {
      freezable: false,
      hotWeatherFriendly: true,
      barnRecipe: false,
    },
    dietaries: {
      dietaryNotes: "",
      dairyFree: true,
      eggFree: true,
      halal: true,
      fishFree: true,
      glutenFree: true,
      kosher: true,
      lactoseFree: true,
      nutFree: true,
      shellfishFree: true,
      soyFree: true,
      pescatarian: true,
      vegetarian: true,
      vegan: true,
    },
  },
};
