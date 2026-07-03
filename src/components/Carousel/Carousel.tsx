import Autoplay from "embla-carousel-autoplay";
import { CardWithBackground } from "@/components/cards/CardWithBackground";
import { Carousel as MantineCarousel } from "@mantine/carousel";
import classes from "./Carousel.module.css";
import { data } from "../RecipeFilters/RecipeCollation";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useRef } from "react";

// const data = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best forests to visit in North America",
//     category: "nature",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Hawaii beaches review: better than you think",
//     category: "beach",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Mountains at night: 12 best locations to enjoy the view",
//     category: "nature",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Aurora in Norway: when to visit for best experience",
//     category: "nature",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Best places to visit this winter",
//     category: "tourism",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
//     title: "Active volcanos reviews: travel at your own risk",
//     category: "nature",
//   },
// ];

export function Carousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <MantineCarousel.Slide key={item.title}>
      <CardWithBackground {...item} />
    </MantineCarousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <MantineCarousel
      className={classes}
      slideSize={{ base: "100%", sm: "50%", md: "30%", lg: "20%" }}
      slideGap="md"
      emblaOptions={{ align: "start", slidesToScroll: mobile ? 1 : 2 }}
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
