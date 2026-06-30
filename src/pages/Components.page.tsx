import { Container } from "@mantine/core";
import { ComponentsList } from "@/components/aaOld/ComponentsList/ComponentsList";
import { PageTitle } from "@/components/aaOld/PageTitle/PageTitle";
import classes from "./Pages.module.css";

export function ComponentsPage() {
  return (
    <Container className={classes.pageContent}>
      <PageTitle title="Components" />
      <ComponentsList />
    </Container>
  );
}
