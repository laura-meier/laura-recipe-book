import { Container, Title } from "@mantine/core";
import classes from "./ExploreSection.module.css";
import { Carousel } from "@/components/Carousel/Carousel";

export function ExploreSection() {
  const CarouselSection = ({
    title,
    path,
    recipeType,
  }: {
    title: string;
    path: string;
    recipeType?: string;
  }) => {
    return (
      <>
        <a href={path} className={classes.link}>
          <Title className={classes.subTitle}>{title}</Title>
        </a>
        <Carousel recipeType={recipeType} />
      </>
    );
  };

  return (
    <>
      <Container fluid className={classes.carousel}>
        <CarouselSection
          title={"Main meals"}
          path={"/main-meal-recipes"}
          recipeType={"main meal"}
        />
        <CarouselSection title={"Baking"} path={"/baking-recipes"} recipeType={"baking"} />
        <CarouselSection title={"Other"} path={"/other-recipes"} recipeType={"other"} />
        <CarouselSection
          title={"Vegan main meals"}
          path={"/main-meal-recipes/?dietaries=vegan"}
          recipeType={"main meal"}
        />
      </Container>
    </>
  );
}
