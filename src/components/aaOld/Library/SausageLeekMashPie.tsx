import { Recipe } from "../RecipeFilters/Types";

export const sausageLeekMashPie: Recipe = {
  path: "/sausage-leek-mash-pie",
  originalLink: "https://www.bbcgoodfood.com/recipes/sausage-leek-mash-pie",
  image:
    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sausage-leek-mash-pie-07a67d4.jpg?quality=90&webp=true&resize=440,400",
  imageAlt:
    "Serving pot filled to the brim with cheesy mash, with a thick sausage and leek gravy peeking through below",
  title: "Sausage & leek mash pie",
  time: "1 hr 20",
  description:
    "Enjoy sausages and kale with a cheesy mash topping made with leeks and mustard. You can freeze this pie for busy weeknights when you need to feed a crowd",
  serves: 2,
  ingredients: [
    [4, " large potatoes, peeled and cut into 3cm chunks"],
    [2, " tbsp oil"],
    [6, " pork sausages"],
    [1, " tbsp plain flour"],
    [450, "ml fresh chicken gravy"],
    [150, "g kale, shredded"],
    [3, " leeks, finely sliced"],
    [0.5, " tbsp wholegrain mustard"],
    [2, " tbsp whole milk"],
    [50, "g smoked or ordinary cheddar, grated"],
  ],
  method: [
    "Boil the potatoes for 12 mins or until tender. Drain and leave to steam-dry.",
    "Heat 1 tbsp oil in a shallow casserole or deep skillet (20-25cm). Pinch the sausages out of their skins into large pieces, directly into the pan, and fry over a medium heat for 7-8 mins or until golden brown. Add the flour and stir everything together, cooking for 1 min. Pour in the gravy and 100-200ml water, bring to a simmer, then add the kale and cook for 5 mins. Remove from the heat.",
    "Meanwhile, in a separate pan, add the remaining 1 tbsp oil, then the leeks and fry for 5-10 mins until tender, adding a small splash of water to help them cook. Heat your grill to its highest setting.",
    "Mash the potatoes until smooth. Stir through the leeks, mustard and milk, and season. Spoon and swirl the mash on top of the sausage mixture, then scatter over the grated cheese and grill for 3-5 mins or until golden and bubbling.",
  ],
  filters: {
    details: {
      type: "main meal",
      base: "potato",
      protein: "sausage",
      dish: "pie",
      cookingMethod: ["hob", "grill"],
    },
    attributes: {
      freezable: true,
      hotWeatherFriendly: false,
      barnRecipe: false,
    },
    dietaries: {
      dietaryNotes: "",
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
      pescatarian: false,
      vegetarian: false,
      vegan: false,
      veganAdjustable: false,
    },
  },
};
