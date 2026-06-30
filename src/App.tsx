import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";

import { MantineProvider, Paper } from "@mantine/core";
import { Footer } from "./components/Footer/Footer";
import { HeaderMenu } from "./components/HeaderMenu/HeaderMenu";
import { Router } from "./Router";
import { theme } from "./theme";

import classes from "./App.module.css";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <div className={classes.page}>
        <HeaderMenu />
        <Paper className={classes.main}>
          <div className={classes.body}>
            <Router />
          </div>
          <Footer />
        </Paper>
      </div>
    </MantineProvider>
  );
}
