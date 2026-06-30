import { Title } from "@mantine/core";
import classes from "./PageTitle.module.css";

interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <Title ta="center" className={classes.title}>
      {title}
    </Title>
  );
}
