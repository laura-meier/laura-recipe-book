import { Button, Paper, Text, Title } from "@mantine/core";
import classes from "./CardWithBackground.module.css";

interface CardProps {
  image: string;
  title: string;
  category: string;
}

export function CardWithBackground({ image, title, category }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}
