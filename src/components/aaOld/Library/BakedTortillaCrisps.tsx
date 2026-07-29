import { Recipe } from "../RecipeFilters/Types";

export const bakedTortillaCrisps: Recipe = {
  path: "/baked-tortilla-crisps",
  originalLink: "",
  image: "https://d1da880v85k5s1.cloudfront.net/8d9kdsuvlw0ss.jpg",
  imageAlt: "Golden, crispy baked tortilla triangles sprinkled with salt",
  title: "Baked tortilla crisps",
  time: "20 mins",
  description:
    "For the forgotten wraps slowly turning hard in the cupboard – transform them into golden, crispy tortilla crisps in minutes! Serve with hummus and salad for lunch, or as a snack with dips.",
  serves: 1,
  ingredients: [
    [1, " wrap"],
    [1, " tsp oil"],
    [0, "Salt"],
  ],
  method: [
    "Preheat the oven to 170C/150C Fan/Gas 3.",
    "Cut the wrap into roughly 5cm/2in-wide strips, then cut each strip at an angle into triangles. Put in a bowl and drizzle over the oil to very lightly coat the triangles.",
    "Transfer to a baking tray in a single layer and lightly sprinkle with salt.",
    "Bake for 5–8 minutes, gently shake the tray, then return to the oven for another 2–4 minutes until golden-brown and crisp. Allow to cool before serving with dips or salad.",
  ],
  filters: {
    attributes: {
      barnRecipe: true,
      freezable: false,
      hotWeatherFriendly: true,
    },
    details: {
      type: "other",
    },
    dietaries: {
      dietaryNotes: "",
      dairyFree: true,
      eggFree: true,
      halal: true,
      fishFree: true,
      glutenFree: false,
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
