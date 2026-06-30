import { Blockquote, Container, Grid } from "@mantine/core";
import classes from "./Gradients.module.css";
import { IconInfoCircle } from "@tabler/icons-react";

function Gradient({ className }: { className: string }) {
  return (
    <Grid.Col span={{ base: 12, xs: 3 }}>
      <div className={`${className} ${classes.box}`} />
    </Grid.Col>
  );
}

export function Gradients() {
  return (
    <Container my="md">
      <Blockquote color="violet" iconSize={38} icon={<IconInfoCircle />} mt="xl">
        Change the angle of a gradient using degrees in the CSS file
      </Blockquote>
      <Grid mt={30}>
        <Gradient className={classes.gradientHorizontal} />
        <Gradient className={classes.gradientVertical} />
        <Gradient className={classes.gradientDiagonal} />
        <Gradient className={classes.gradientRadial} />
      </Grid>
    </Container>
  );
}
