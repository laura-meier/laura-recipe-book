import { ActionIcon } from "@mantine/core";
import { IconProps } from "@tabler/icons-react";

interface SocialIconProps {
  Icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  url?: string;
}

export function SocialIcon({ Icon, label, url }: SocialIconProps) {
  return (
    <ActionIcon
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size="lg"
      variant="default"
      radius="xl"
      aria-label={label}
    >
      <Icon size={18} stroke={1.5} />
    </ActionIcon>
  );
}
