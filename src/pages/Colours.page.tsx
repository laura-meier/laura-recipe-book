import { Container } from "@mantine/core";
import { Colours } from "@/components/aaOld/Colours/Colours";
import { PageTitle } from "@/components/aaOld/PageTitle/PageTitle";
import classes from "./Pages.module.css";

export function ColoursPage() {
  return (
    <Container className={classes.pageContent}>
      <PageTitle title="Colours" />
      <Colours />
    </Container>
  );
}
