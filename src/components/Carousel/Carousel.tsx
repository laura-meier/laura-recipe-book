import Autoplay from "embla-carousel-autoplay";
import { CardWithBackground } from "@/components/cards/CardWithBackground";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import classes from "./Carousel.module.css";
import { data } from "../RecipeFilters/RecipeCollation";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRef } from "react";

export function Carousel({ recipeType }: { recipeType?: string }) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const scopedData = recipeType
    ? data.filter((item) => item.filters.details.type === recipeType)
    : data;

  const slides = scopedData.map((item) => (
    <MantineCarousel.Slide key={item.title}>
      <CardWithBackground {...item} />
    </MantineCarousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 10000 }));

  return (
    <MantineCarousel
      aria-label="Gallery of recipes"
      flex={1}
      classNames={classes}
      type="container"
      slideSize={{ base: "100%", "300px": "50%", "500px": "33.333333%" }}
      slideGap={{ base: 0, "300px": "md", "500px": "lg" }}
      emblaOptions={{ loop: true, align: "start", slidesToScroll: mobile ? 1 : 2 }}
      nextControlProps={{ "aria-label": "Next slide" }}
      previousControlProps={{ "aria-label": "Previous slide" }}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={() => autoplay.current.reset()}
    >
      {slides}
    </MantineCarousel>
  );
}
