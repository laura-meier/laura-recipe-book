import { IconBriefcase, IconCode, IconUsersGroup } from "@tabler/icons-react";
import { Badge, Container, Group, SimpleGrid, Text, Title } from "@mantine/core";
import classes from "./AboutContent.module.css";
import { FeatureCard } from "@/components/cards/FeatureCard";

const mockdata = [
  {
    title: "Learn by doing",
    description:
      "Dive into interactive workshops covering the fundamentals of web design and development. By the end of the week, you’ll have built and shipped a real, publicly accessible website.",
    Icon: IconCode,
  },
  {
    title: "Connect & belong",
    description:
      "Meet fellow first-year students who share your curiosity. Spend the week exchanging ideas, sharing experiences, and building friendships that last well beyond the course.",
    Icon: IconUsersGroup,
  },
  {
    title: "Explore your career",
    description:
      "Hear directly from CXOs, business leads, and recent graduates about life in tech. Discover the many career paths available — from product and design to engineering and beyond.",
    Icon: IconBriefcase,
  },
];

export function AboutContent() {
  const features = mockdata.map(({ description, Icon, title }) => (
    <FeatureCard description={description} Icon={Icon} title={title} />
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge color="violet" variant="filled" size="lg">
          8th – 12th June · London
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Everything you need to kick-start your journey in tech
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Five days of learning, building, and connecting — designed specifically for female and
        non-binary first-year university students with no prior coding experience.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
