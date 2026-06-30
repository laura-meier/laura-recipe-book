import { Recipe } from "../RecipeFilters/Types";

export const sausageBolognese: Recipe = {
  path: "/sausage-bolognese",
  originalLink: "https://www.bbc.co.uk/food/recipes/spicy_sausage_pasta_42455",
  image:
    "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/spicy_sausage_pasta_42455_16x9.jpg",
  imageAlt: "",
  title: "Sausage bolognese",
  time: "1 hr 20",
  description: "",
  serves: 4,
  ingredients: [
    [6, " good-quality sausages"],
    [1, " tbsp olive oil"],
    [1, " small onion, finely chopped"],
    [0.5, " tsp dried chilli flakes, according to taste"],
    [400, "g tin chopped tomatoes"],
    [2, " tbsp tomato purée"],
    [150, "ml red wine or water"],
    [0.5, " tsp dried mixed herbs or dried oregano"],
    [275, "g dried spaghetti (or other pasta if freezing)"],
    [1, " heap of grated parmesan, to serve (optional)"],
    [1, " handful of fresh basil leaves, to serve (optional)"],
  ],
  method: [
    "Squeeze the sausagemeat out of the skins into a large non-stick frying pan. Add the oil and onion and cook over a medium heat for 10 minutes, or until lightly browned. Use two wooden spoons to break up the sausagemeat into small mince-like pieces as it cooks. Add the chilli flakes and cook for 1 minute more, stirring.",
    "Add the tomatoes, tomato purée, red wine (or water) and oregano. Bring to a gentle simmer and cook for 8–10 minutes, or until the sauce has thickened, stirring regularly.",
    "Meanwhile, fill a large saucepan with water and bring to the boil. Add the pasta to the water and cook for 7–9 minutes (or according to the pack instructions) until tender, stirring occasionally to separate the strands.",
    "Drain the cooked pasta in a colander and return to the saucepan. Tip the spicy sausage sauce into the same pan and toss well together. Serve topped with grated Parmesan and scattered with torn basil leaves.",
  ],
  filters: {
    details: {
      type: "main meal",
      base: "pasta",
      protein: "sausage",
      dish: "bolognese",
      cookingMethod: ["hob"],
    },
    attributes: {
      freezable: true,
      hotWeatherFriendly: false,
      barnRecipe: false,
    },
    dietaries: {
      veganFriendly: false,
    },
  },
};
