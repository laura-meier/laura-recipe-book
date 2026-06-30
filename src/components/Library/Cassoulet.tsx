import { Recipe } from "../RecipeFilters/Types";

export const cassoulet: Recipe = {
  path: "/cassoulet",
  originalLink:
    "https://www.waitrose.com/ecom/recipe/summer-veg-bacon-cassoulet?srsltid=AfmBOorEAYEGF5ACVVMPyB0U7wzypcdICXb_pp0mLghy4yfruC2lP8Ug",
  image:
    "https://waitrose-prod.scene7.com/is/image/waitroseprod/summer-veg-and-bacon-cassoulet?uuid=cdb282f7-d972-4d21-94e7-9720a19c98d6&$Waitrose-Image-Preset-90$&wid=2400&fit=constrain%2C0",
  imageAlt: "Serving bowl filled with cassoulet - a butter bean based stew",
  title: "Summer veg & bacon cassoulet",
  time: "1 hr 10",
  description:
    "A less heavy take on the traditional French stew, this has all the flavours of a hot summer holiday. Roasting the veg first intensifies the flavour so everything tastes its absolute best.",
  serves: 8,
  ingredients: [
    [2, " aubergines, cut into 2cm chunks"],
    [2, " red or orange peppers, deseeded and cut into 2cm chunks"],
    [100, "ml extra virgin olive oil"],
    [200, "g pack unsmoked bacon lardons"],
    [1, " onion, peeled and finely sliced"],
    [3, " cloves garlic, peeled and crushed"],
    [400, "g cherry tomatoes on the vine, stalks removed"],
    [2, " x 400g can butter beans, drained"],
    [3, " sprigs rosemary"],
    [500, "ml water"],
    [2, " vegetable stock cubes"],
    [1, " handful of basil leaves, to serve"],
    [8, " portions of garlic-rubbed sourdough toast, to serve (optional)"],
    [1, " lemon, cut into wedges, to serve"],
  ],
  method: [
    "Preheat the oven to 220°C, gas mark 7. Spread the aubergines and peppers out in a single layer over 1 or 2 roasting tins, drizzle generously with 5 tbsp oil and toss to coat. Spread out again, then season and roast for 35-40 minutes, turning once, until golden and caramelised.",
    "Meanwhile, heat 2 tbsp oil in a wide ovenproof shallow casserole and place over a medium-high heat. Fry the lardons for 10 minutes, until crisp and golden, then remove with a slotted spoon, leaving the fat in the pan.",
    "Fry the onion in the fat for 8-10 minutes, stirring often, until softened with a little colour, then add the garlic and fry for 2 minutes more. Set aside until needed.",
    "When the roasted vegetables are ready, add the tomatoes, beans, rosemary, water and stock cubes to the onion pan and bring to a simmer. Add the roasted vegetables, season well, then transfer, uncovered, to the oven. Bake for 20 minutes, until the tops of the vegetables and beans are deep golden and a little crisp. Scatter the cassoulet with the basil, then serve with garlic-rubbed toast, if liked, and lemon wedges for squeezing.",
  ],
  filters: {
    details: {
      type: "main meal",
      base: "served with bread/toast",
      protein: "beans",
      dish: "stew",
      cookingMethod: ["hob", "oven"],
    },
    attributes: {
      freezable: true,
      hotWeatherFriendly: false,
      barnRecipe: false,
    },
    dietaries: {
      veganFriendly: true,
      makeItVegan: {
        instructions: "Removed the bacon",
        veganIngredients: [
          [2, " aubergines, cut into 2cm chunks"],
          [2, " red or orange peppers, deseeded and cut into 2cm chunks"],
          [100, "ml extra virgin olive oil"],
          [1, " onion, peeled and finely sliced"],
          [3, " cloves garlic, peeled and crushed"],
          [400, "g cherry tomatoes on the vine, stalks removed"],
          [2, " x 400g can butter beans, drained"],
          [3, " sprigs rosemary"],
          [500, "ml water"],
          [2, " vegetable stock cubes"],
          [1, " handful of basil leaves, to serve"],
          [8, " portions of garlic-rubbed sourdough toast, to serve (optional)"],
          [1, " lemon, cut into wedges, to serve"],
        ],
        veganMethod: [
          "Preheat the oven to 220°C, gas mark 7. Spread the aubergines and peppers out in a single layer over 1 or 2 roasting tins, drizzle generously with 5 tbsp oil and toss to coat. Spread out again, then season and roast for 35-40 minutes, turning once, until golden and caramelised.",
          "Meanwhile, heat 2 tbsp oil in a wide ovenproof shallow casserole and place over a medium-high heat.",
          "Fry the onion in the oil for 8-10 minutes, stirring often, until softened with a little colour, then add the garlic and fry for 2 minutes more. Set aside until needed.",
          "When the roasted vegetables are ready, add the tomatoes, beans, rosemary, water and stock cubes to the onion pan and bring to a simmer. Add the roasted vegetables, season well, then transfer, uncovered, to the oven. Bake for 20 minutes, until the tops of the vegetables and beans are deep golden and a little crisp. Scatter the cassoulet with the basil, then serve with garlic-rubbed toast, if liked, and lemon wedges for squeezing.",
        ],
      },
    },
  },
};
