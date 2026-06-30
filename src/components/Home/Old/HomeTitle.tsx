import { Center, Text, Title } from "@mantine/core";
import classes from "./HomeTitle.module.css";

export function HomeContent() {
  return (
    <Center className={classes.container}>
      <Title className={classes.title} ta="center">
        Welcome to{" "}
        <Text inherit variant="gradient" component="span" gradient={{ from: "violet", to: "red" }}>
          CodeF 2026
        </Text>
      </Title>
    </Center>
  );
}
