import { Center, Text, Title } from "@mantine/core";
import classes from "./HomeTitle.module.css";

export function HomeTitle() {
  return (
    <Center className={classes.container}>
      <Title className={classes.title} ta="center">
        <Text inherit variant="gradient" component="span" gradient={{ from: "red", to: "orange" }}>
          What to cook today?
        </Text>
      </Title>
    </Center>
  );
}
