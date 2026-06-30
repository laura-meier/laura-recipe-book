import { Badge, Container, Group, Text, Title } from "@mantine/core";
import classes from "./RecipeLibrary.module.css";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Filter } from "../RecipeFilters/Filter";

export function RecipeLibraryContent() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Container className={classes.container} size="lg" py="xl">
      <Title order={2} className={classes.title} ta="center" mt="sm">
        Recipe Library
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every recipe on this website.
      </Text>

      <Filter />
    </Container>
  );
}
