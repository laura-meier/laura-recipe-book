type IngredientItem = [number, string];

type Details =
  | { type: "main meal"; base: string; protein: string; dish: string; cookingMethod: string[] }
  | { type: "baking" }
  | { type: "other" };

interface Attributes {
  freezable: boolean;
  hotWeatherFriendly: boolean;
  barnRecipe: boolean;
}

interface MakeItVegan {
  instructions: string;
  veganIngredients: IngredientItem[];
  veganMethod: string[];
}

type Dietaries = { veganFriendly: true; makeItVegan: MakeItVegan } | { veganFriendly: false };

interface Filters {
  details: Details;
  attributes: Attributes;
  dietaries: Dietaries;
}

export interface Recipe {
  path: string;
  originalLink: string;
  image: string;
  imageAlt: string;
  title: string;
  time: string;
  description: string;
  serves: number;
  ingredients: IngredientItem[];
  method: string[];
  filters: Filters;
}
