import { Center } from "@mantine/core";
import classes from "./Pages.module.css";
import { AboutContent } from "@/components/aaOld/About/AboutContent";

export function AboutPage() {
  return (
    <Center className={classes.pageContent}>
      <AboutContent />
    </Center>
  );
}
