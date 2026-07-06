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

type BaseDietaries = {
  dietaryNotes: string;
  dairyFree: boolean;
  eggFree: boolean;
  halal: boolean;
  fishFree: boolean;
  glutenFree: boolean;
  kosher: boolean;
  lactoseFree: boolean;
  nutFree: boolean;
  shellfishFree: boolean;
  soyFree: boolean;
  pescatarian: boolean;
  vegetarian: boolean;
};

type Dietaries = BaseDietaries &
  (
    | { vegan: true }
    | { vegan: false; veganAdjustable: true; makeItVegan: MakeItVegan }
    | { vegan: false; veganAdjustable: false }
  );

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
