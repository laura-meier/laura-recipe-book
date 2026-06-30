import { Container } from "@mantine/core";
import { GridExample } from "@/components/aaOld/GridExample";
import { PageTitle } from "@/components/aaOld/PageTitle/PageTitle";
import classes from "./Pages.module.css";

export function GridPage() {
  return (
    <Container className={classes.pageContent}>
      <PageTitle title="Grid" />
      <GridExample />
    </Container>
  );
}
