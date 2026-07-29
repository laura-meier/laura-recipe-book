import { Recipe } from "../RecipeFilters/Types";

export const greekPastaSalad: Recipe = {
  path: "/greek-pasta-salad",
  originalLink: "https://www.bbc.co.uk/food/recipes/greek_pasta_salad_15496",
  image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/greek_pasta_salad_15496_16x9.jpg",
  imageAlt:
    "A vibrant Greek pasta salad tossed with cucumbers, quartered cherry tomatoes, crumbled feta, and fresh basil",
  title: "Greek pasta salad",
  time: "40 mins",
  description:
    "This easy pasta salad is packed with Mediterranean flavours. Perfect for lunch or as a barbecue side dish as it keeps really well, so it's ideal to make ahead and keep in the fridge.",
  serves: 1,
  ingredients: [
    [85, "g pasta, such as penne or conchiglie"],
    [0.5, " unwaxed lemon, finely grated zest and juice"],
    [0.2, " red onion, finely chopped"],
    [0.5, " tbsp olive oil, ideally extra virgin"],
    [0.25, " cucumber, peeled and cubed"],
    [100, "g cherry tomatoes, quartered"],
    [15, "g fresh basil, roughly chopped"],
    [60, "g feta, crumbled (optional)"],
    [0, "Handful pitted black olives (optional)"],
    [0, "Salt and freshly ground black pepper"],
  ],
  method: [
    "Cook the pasta in a saucepan of boiling, salted water as per the packet instructions.",
    "Whisk together the lemon zest and juice, red onion, oil and a generous amount of pepper.",
    "Drain the pasta in a colander and run it under a cold tap until cooled.",
    "Stir the dressing, cucumber, tomatoes, basil, feta and olives, if using, into the pasta and serve.",
  ],
  filters: {
    attributes: {
      barnRecipe: false,
      freezable: false,
      hotWeatherFriendly: true,
    },
    details: {
      type: "main meal",
      base: "pasta",
      protein: "none",
      dish: "salad",
      cookingMethod: ["hob", "no cook"],
    },
    dietaries: {
      dietaryNotes:
        "To ensure this dish is gluten-free, use a certified gluten-free pasta alternative.",
      dairyFree: false,
      eggFree: true,
      halal: false,
      fishFree: true,
      glutenFree: false,
      kosher: false,
      lactoseFree: false,
      nutFree: true,
      shellfishFree: true,
      soyFree: true,
      pescatarian: true,
      vegetarian: true,
      vegan: false,
      veganAdjustable: true,
      makeItVegan: {
        instructions: "Omitted the feta.",
        veganIngredients: [
          [85, "g pasta, such as penne or conchiglie"],
          [0.5, " unwaxed lemon, finely grated zest and juice"],
          [0.2, " red onion, finely chopped"],
          [0.5, " tbsp olive oil, ideally extra virgin"],
          [0.25, " cucumber, peeled and cubed"],
          [100, "g cherry tomatoes, quartered"],
          [15, "g fresh basil, roughly chopped"],
          [0, "Handful pitted black olives (optional)"],
          [0, "Salt and pepper"],
        ],
        veganMethod: [
          "Cook the pasta in a saucepan of boiling, salted water as per the packet instructions.",
          "Whisk together the lemon zest and juice, red onion, oil and a generous amount of pepper.",
          "Drain the pasta in a colander and run it under a cold tap until cooled.",
          "Stir the dressing, cucumber, tomatoes, basil and olives, if using, into the pasta and serve.",
        ],
      },
    },
  },
};
