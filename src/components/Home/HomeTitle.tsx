import { Center, Text, Title } from "@mantine/core";
import classes from "./HomeTitle.module.css";

export function HomeTitle() {
  return (
    <Center className={classes.container}>
      <Title className={classes.title} ta="center">
        Laura's recipe book
      </Title>
      <Text>
        A collation of <a href="/recipe-library">all my favourite recipes</a>, with a focus on
        batch-cook meals that freeze well for easy weekday lunches and dinners.
      </Text>
    </Center>
  );
}
