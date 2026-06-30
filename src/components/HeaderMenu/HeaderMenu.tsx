import { IconChevronDown } from "@tabler/icons-react";
import {
  Burger,
  Center,
  Collapse,
  Container,
  Divider,
  Drawer,
  Group,
  Image,
  Menu,
  ScrollArea,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import cookingPot from "../../assets/cooking-pot.svg";
import classes from "./HeaderMenu.module.css";
import { data } from "../RecipeFilters/RecipeCollation";

const recipeLinks = data.map((item) => ({
  link: item.path,
  label: item.path
    .slice(1)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase()),
}));

const links: { label: string; link?: string; links?: { link: string; label: string }[] }[] = [
  // { label: "Home", link: "/" },
  { label: "Home", link: "/" },
  { label: "Main Meals", link: "/main-meal-recipes" },
  { label: "Baking", link: "/baking-recipes" },
  { label: "Other", link: "/other-recipes" },
  { label: "Recipe Library", link: "/recipe-library", links: [...recipeLinks] },
  // { label: "About", link: "/about" },
  // {
  //   label: "Components",
  //   link: "/components",
  //   links: [
  //     { link: "/carousel", label: "Carousel" },
  //     { link: "/colours", label: "Colours" },
  //     { link: "/faq", label: "FAQ" },
  //     { link: "/gradients", label: "Gradients" },
  //     { link: "/grid", label: "Grid" },
  //   ],
  // },
  // {
  //   label: "Contact",
  //   link: "/contact",
  // },
];

export function HeaderMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item>
        <a key={item.link} href={item.link} className={classes.menuLink}>
          {item.label}
        </a>
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <a href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={14} stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <a key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </a>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="100%">
        <div className={classes.inner}>
          <a href={"/"}>
            <Image src={cookingPot} h={28} w="auto" fit="contain" />
          </a>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={toggle}
            size="sm"
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
        </div>
      </Container>

      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />
          {links.map((link) => {
            if (link.links) {
              return <DrawerLinksGroup key={link.label} link={link} />;
            }

            return (
              <a key={link.label} href={link.link} className={classes.link}>
                {link.label}
              </a>
            );
          })}
        </ScrollArea>
      </Drawer>
    </header>
  );
}

const DrawerLinksGroup = ({
  link,
}: {
  link: {
    link?: string;
    label: string;
    links?: { link: string; label: string }[];
  };
}) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <>
      <UnstyledButton className={classes.link} onClick={toggle}>
        <Center inline>
          <span className={classes.linkLabel}>{link.label}</span>
          <IconChevronDown size={14} stroke={1.5} />
        </Center>
      </UnstyledButton>
      <Collapse expanded={opened}>
        {link.links?.map((subLink) => (
          <a key={subLink.link} href={subLink.link} className={classes.subLink}>
            {subLink.label}
          </a>
        ))}
      </Collapse>
    </>
  );
};
