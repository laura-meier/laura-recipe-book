import { Badge, Button, Card, Flex, useMantineTheme } from "@mantine/core";
import {
  IconBuildingCarousel,
  IconGrain,
  IconHelpHexagonFilled,
  IconLayoutBoardSplitFilled,
  IconPaletteFilled,
  IconProps,
} from "@tabler/icons-react";

interface ComponentCardProps {
  colour: string;
  Icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  link: string;
  name: string;
  nextColour: string;
}

function ComponentCard({ colour, Icon, name, nextColour, link }: ComponentCardProps) {
  const theme = useMantineTheme();
  return (
    <Card shadow="sm" padding="lg" withBorder miw={150}>
      <Card.Section withBorder py="sm" style={{ display: "flex", justifyContent: "center" }}>
        <Badge color={colour}>{name}</Badge>
      </Card.Section>
      <Flex direction="column" align="center" gap="sm" mt="sm">
        <Icon size={50} color={theme.colors[colour][6]} gradientTransform="" />
        <a href={link}>
          <Button variant="gradient" gradient={{ from: colour, to: nextColour, deg: 90 }}>
            See it
          </Button>
        </a>
      </Flex>
    </Card>
  );
}

export function ComponentsList() {
  return (
    <Flex justify="center" gap="lg">
      <ComponentCard
        colour="pink"
        Icon={IconBuildingCarousel}
        link="/carousel"
        name="Carousel"
        nextColour="orange"
      />
      <ComponentCard
        colour="orange"
        Icon={IconPaletteFilled}
        link="/colours"
        name="Colours"
        nextColour="yellow"
      />
      <ComponentCard
        colour="yellow"
        Icon={IconHelpHexagonFilled}
        link="/faq"
        name="FAQ"
        nextColour="green"
      />
      <ComponentCard
        colour="green"
        Icon={IconGrain}
        link="/gradients"
        name="Gradients"
        nextColour="blue"
      />
      <ComponentCard
        colour="blue"
        Icon={IconLayoutBoardSplitFilled}
        link="/grid"
        name="Grid"
        nextColour="indigo"
      />
    </Flex>
  );
}
