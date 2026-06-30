import { Button, Group, useMantineColorScheme } from "@mantine/core";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group>
      <Button color="orange" onClick={() => setColorScheme("light")}>
        Light
      </Button>
      <Button color="orange" onClick={() => setColorScheme("dark")}>
        Dark
      </Button>
      <Button color="orange" onClick={() => setColorScheme("auto")}>
        Auto
      </Button>
    </Group>
  );
}
