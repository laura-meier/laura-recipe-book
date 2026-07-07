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

export type BaseDietaries = {
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

// Single source of truth for the boolean dietary fields: key -> display label.
// Record (not array) so TS errors here if a boolean field is added to/removed from
// BaseDietaries without this being updated to match — keeps the filter tree and the
// tagMatchers filter logic from silently drifting out of sync with each other.
export const dietaryLabels: Record<Exclude<keyof BaseDietaries, "dietaryNotes">, string> = {
  dairyFree: "Dairy-free",
  eggFree: "Egg-free",
  halal: "Halal",
  fishFree: "Fish-free",
  glutenFree: "Gluten-free",
  kosher: "Kosher",
  lactoseFree: "Lactose-free",
  nutFree: "Nut-free",
  shellfishFree: "Shellfish-free",
  soyFree: "Soy-free",
  pescatarian: "Pescatarian",
  vegetarian: "Vegetarian",
};

export const booleanDietaryKeys = Object.keys(dietaryLabels) as (keyof typeof dietaryLabels)[];

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
