import { Blockquote, Container, Grid } from "@mantine/core";
import classes from "./Colours.module.css";
import { IconInfoCircle } from "@tabler/icons-react";

function Colour({ className }: { className: string }) {
  return (
    <Grid.Col span={{ base: 12, xs: 2 }}>
      <div className={`${className} ${classes.box}`} />
    </Grid.Col>
  );
}

export function Colours() {
  return (
    <Container my="md">
      <Blockquote color="violet" iconSize={38} icon={<IconInfoCircle />} mt="xl">
        Find the default colours{" "}
        <a
          href="https://mantine.dev/theming/colors/#default-colors"
          rel="noopener noreferrer"
          target="_blank"
        >
          here
        </a>
      </Blockquote>
      <Grid mt={30}>
        <Colour className={classes.mantineRed} />
        <Colour className={classes.mantineOrange} />
        <Colour className={classes.mantineYellow} />
        <Colour className={classes.mantineLime} />
        <Colour className={classes.mantineGreen} />
        <Colour className={classes.mantineTeal} />
        <Colour className={classes.mantineCyan} />
        <Colour className={classes.mantineBlue} />
        <Colour className={classes.mantineIndigo} />
        <Colour className={classes.mantineViolet} />
        <Colour className={classes.mantineGrape} />
        <Colour className={classes.mantinePink} />
        <Colour className={classes.mantineGray} />
        <Colour className={classes.mantineDark} />
      </Grid>
    </Container>
  );
}
