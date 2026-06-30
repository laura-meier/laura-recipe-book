import { Card, Text, useMantineTheme } from "@mantine/core";
import { IconProps } from "@tabler/icons-react";
import classes from "./FeatureCard.module.css";

interface FeatureCardProps {
  description?: string;
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
}

export function FeatureCard({ description, Icon, title }: FeatureCardProps) {
  const theme = useMantineTheme();
  return (
    <Card
      key={title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <Icon size={50} stroke={1.5} color={theme.colors.violet[9]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {description}
      </Text>
    </Card>
  );
}
