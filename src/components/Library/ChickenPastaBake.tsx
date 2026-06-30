import { Recipe } from "../RecipeFilters/Types";
import chickenPastaBakeImg from "../../assets/chicken-pasta-bake-cropped.jpg";

export const chickenPastaBake: Recipe = {
  path: "/chicken-pasta-bake",
  originalLink: "https://www.bbcgoodfood.com/recipes/chicken-pasta-bake",
  image: chickenPastaBakeImg,
  imageAlt: "Chicken pasta bake topped with golden melted cheese",
  title: "Chicken pasta bake",
  time: "1 hr 15",
  description:
    "Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad.",
  serves: 8,
  ingredients: [
    [4, " tbsp olive oil"],
    [1, " onion, finely chopped"],
    [2, " garlic cloves, crushed"],
    [0.25, " tsp chilli flakes"],
    [2, " x 400g cans chopped tomatoes"],
    [6, " tbsp mascarpone"],
    [1, " bag of kale"],
    [1, " x 260g can of sweetcorn"],
    [4, " skinless chicken breasts, sliced into strips"],
    [300, "g penne"],
    [70, "g mature cheddar, grated"],
    [50, "g grated mozzarella"],
    [0.5, " small bunch of parsley, finely chopped"],
  ],
  // ingredients: [
  //   "4 tbsp olive oil",
  //   "1 onion, finely chopped",
  //   "2 garlic cloves, crushed",
  //   "¼ tsp chilli flakes",
  //   "2 x 400g cans chopped tomatoes",
  //   "6 tbsp mascarpone",
  //   "bag of kale",
  //   "big can of sweetcorn",
  //   "4 skinless chicken breasts, sliced into strips",
  //   "300g penne",
  //   "70g mature cheddar, grated",
  //   "50g grated mozzarella",
  //   "½ small bunch of parsley, finely chopped",
  // ],
  method: [
    "Heat 2 tbsp of the oil in a pan over a medium heat and fry the onion gently for 10-12 mins. Add the garlic and chilli flakes and cook for 1 min. Tip in the tomatoes and season to taste. Simmer uncovered for 20 mins or until thickened, then stir through the mascarpone, kale and sweetcorn.",
    "Heat 1 tbsp of oil in a non-stick frying pan. Season the chicken and fry for 5-7 mins or until the chicken is cooked through.",
    "Heat the oven to 220C/200C fan/gas 7. Cook the penne following pack instructions. Drain and toss with the remaining oil. Tip the pasta into a medium sized ovenproof dish. Stir in the chicken and pour over the sauce. Top with the cheddar, mozzarella and parsley. Bake for 20 mins or until golden brown and bubbling.",
  ],
  filters: {
    details: {
      type: "main meal",
      base: "pasta",
      protein: "chicken",
      dish: "pasta bake",
      cookingMethod: ["hob", "oven"],
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
