import { Center, Stack } from "@mantine/core";
import classes from "./Pages.module.css";
import { HomeTitle } from "@/components/Home/HomeTitle";
import { ExploreSection } from "@/components/Home/ExploreSection";

export function HomePage() {
  return (
    <Center className={classes.pageContent}>
      <Stack className={classes.stack}>
        <HomeTitle />
        <ExploreSection />
      </Stack>
    </Center>
  );
}
