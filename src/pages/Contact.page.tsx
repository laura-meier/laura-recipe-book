import { Center } from "@mantine/core";
import { Contact } from "@/components/aaOld/Contact/Contact";
import classes from "./Pages.module.css";

export function ContactPage() {
  return (
    <Center className={classes.pageContent}>
      <Contact />
    </Center>
  );
}
