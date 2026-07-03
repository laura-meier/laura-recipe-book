import { Center, Stack } from "@mantine/core";
import classes from "./Pages.module.css";
import { MainMealRecipesContent } from "@/components/MainMeals/MainMealRecipes";
import { HomeContent } from "@/components/Home/Old/HomeTitle";
import { HeroSection } from "@/components/Home/Old/HeroSection";

export function HomePage() {
  return (
    <Center className={classes.pageContent}>
      <Stack className={classes.stack}>
        <HomeContent />
        <HeroSection />
        <MainMealRecipesContent />
      </Stack>
    </Center>
  );
}
