import { Container } from "@mantine/core";
import { Faq } from "@/components/aaOld/Faq/Faq";
import { PageTitle } from "@/components/aaOld/PageTitle/PageTitle";
import classes from "./Pages.module.css";

export function FaqPage() {
  return (
    <Container className={classes.pageContent}>
      <PageTitle title="Frequently Asked Questions" />
      <Faq />
    </Container>
  );
}
