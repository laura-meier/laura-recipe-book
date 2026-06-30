import { Container } from "@mantine/core";
import { PageTitle } from "@/components/aaOld/PageTitle/PageTitle";
import classes from "./Pages.module.css";
import { Carousel } from "@/components/aaOld/Carousel/Carousel";

export function CarouselPage() {
  return (
    <Container className={classes.pageContent}>
      <PageTitle title="Carousel" />
      <Carousel />
    </Container>
  );
}
