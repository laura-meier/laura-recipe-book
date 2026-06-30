import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages";
import { RecipeTemplatePage } from "./pages/RecipeTemplate.page";
import { data } from "./components/RecipeFilters/RecipeCollation";
import { RecipeLibraryPage } from "./pages/RecipeLibrary.page";
import { BakingRecipesPage } from "./pages/BakingRecipes";
import { MainMealRecipesPage } from "./pages/MainMealRecipes";
import { OtherRecipesPage } from "./pages/OtherRecipes";

const recipeRouters = data.map((item) => ({
  path: item.path,
  element: <RecipeTemplatePage {...item} />,
}));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  ...recipeRouters,
  {
    path: "/recipe-library",
    element: <RecipeLibraryPage />,
  },
  {
    path: "/main-meal-recipes",
    element: <MainMealRecipesPage />,
  },
  {
    path: "/baking-recipes",
    element: <BakingRecipesPage />,
  },
  {
    path: "/other-recipes",
    element: <OtherRecipesPage />,
  },
  // {
  //   path: "/about",
  //   element: <AboutPage />,
  // },
  // {
  //   path: "/carousel",
  //   element: <CarouselPage />,
  // },
  // {
  //   path: "/colours",
  //   element: <ColoursPage />,
  // },
  // {
  //   path: "/components",
  //   element: <ComponentsPage />,
  // },
  // {
  //   path: "/contact",
  //   element: <ContactPage />,
  // },
  // {
  //   path: "/faq",
  //   element: <FaqPage />,
  // },
  // {
  //   path: "/gradients",
  //   element: <GradientsPage />,
  // },
  // {
  //   path: "/grid",
  //   element: <GridPage />,
  // },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
