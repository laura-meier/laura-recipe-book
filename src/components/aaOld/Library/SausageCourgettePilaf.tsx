import { Recipe } from "../RecipeFilters/Types";

export const sausageCourgettePilaf: Recipe = {
  path: "/sausage-courgette-pilaf",
  originalLink: "https://www.bbcgoodfoodme.com/recipes/easy-sausage-courgette-pilaf/",
  image:
    "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2020/07/sausagecourgette-pilaf.jpg",
  imageAlt: "",
  title: "Sausage & courgette pilaf",
  time: "1 hr 20",
  description:
    "Whip up this speedy sausage, courgette and rice dish in just 20 minutes. Full of flavour, it's ideal for when you want something quick and easy.",
  serves: 1,
  ingredients: [
    [100, "g basmati rice"],
    [1, " tsp vegetable oil"],
    [3, " sausages, meat squeezed from the skins"],
    [1, " tsp fennel seeds, black onion seeds or crushed coriander seeds"],
    [1, " courgette, sliced into half-moons"],
    [100, "g frozen peas"],
    [200, "ml vegetable stock"],
    [0, "Small bunch of mint, leaves picked and finely chopped"],
    [0, "Small bunch of dill, finely chopped"],
    [2, " tbsp fat-free yogurt"],
  ],
  method: [
    "Rinse the rice until the water runs clear, then leave to soak. Heat the oil in a medium saucepan with a tight-fitting lid and fry the sausagemeat for 2-3 minutes until crisp and golden. Stir in the seeds and courgette and fry for another 2 minutes over a high heat to evaporate the moisture.",
    "Add the drained rice, peas, stock and half the chopped herbs. Bring to a simmer, then reduce the heat to low and cover with the lid. Cook for 10-12 minutes until the rice is tender.",
    "Fold most of the remaining herbs through the rice. Serve topped with the last of the herbs, with the yogurt on the side.",
  ],
  filters: {
    details: {
      type: "main meal",
      base: "rice",
      protein: "sausage",
      dish: "pilaf",
      cookingMethod: ["hob"],
    },
    attributes: {
      freezable: true,
      hotWeatherFriendly: false,
      barnRecipe: false,
    },
    dietaries: {
      dietaryNotes: "",
      dairyFree: true,
      eggFree: true,
      halal: false,
      fishFree: true,
      glutenFree: false,
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
