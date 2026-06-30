import { Button, Container, Flex, Image, List, Text, ThemeIcon, Title } from "@mantine/core";
import { IconHeartFilled } from "@tabler/icons-react";
import illustration from "../../assets/illustration.svg";
import classes from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Empowering <span className={classes.highlight}>women</span> in tech <br />
          </Title>
          <Text c="dimmed" mt="md">
            A 5-day in-person coding course for female and non-binary first-year university
            students. No prior coding experience needed — just curiosity and ambition.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon color="violet" size={20} radius="xl">
                <IconHeartFilled size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Hands-on workshops</b> – learn the fundamentals of web design and development, and
              ship a publicly accessible website by the end of the week
            </List.Item>
            <List.Item>
              <b>Industry insights</b> – hear from CXOs, business leads, and recent graduates on
              navigating a tech career beyond software engineering
            </List.Item>
            <List.Item>
              <b>A community of peers</b> – a week of exchanging ideas, sharing experiences, and
              forming connections with like-minded students
            </List.Item>
          </List>

          <Flex gap="sm" mt={30}>
            <Button
              component="a"
              target="_blank"
              href="https://careers.rvu.co.uk/lifeatrvu"
              rel="noopener noreferrer"
              color="violet"
              size="md"
              className={classes.control}
            >
              Who we are
            </Button>
            <Button
              component="a"
              target="_blank"
              href="https://code-f-2025-portfolio.netlify.app/"
              rel="noopener noreferrer"
              color="violet"
              variant="default"
              size="md"
              className={classes.control}
            >
              Get inspired
            </Button>
          </Flex>
        </div>
        <Image src={illustration} className={classes.image} alt="" />
      </div>
    </Container>
  );
}
