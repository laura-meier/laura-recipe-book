import { Container } from "@mantine/core";
import { Gradients } from "@/components/aaOld/Gradients/Gradients";
import { PageTitle } from "@/components/aaOld/PageTitle/PageTitle";
import classes from "./Pages.module.css";

export function GradientsPage() {
  return (
    <Container className={classes.pageContent}>
      <PageTitle title="Gradients" />
      <Gradients />
    </Container>
  );
}
