import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { Anchor, Group } from "@mantine/core";
import classes from "./Footer.module.css";
import { SocialIcon } from "../aaOld/SocialIcon";
import { ColorSchemeToggle } from "../ColorSchemeToggle/ColorSchemeToggle";

const links = [
  { label: "Contact", link: "/contact" },
  // { label: "Components", link: "/components" },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor c="dimmed" key={link.label} href={link.link} lh={1} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        {/* <Group>{items}</Group> */}

        <ColorSchemeToggle />

        {/* <Group gap="xs" justify="flex-end" wrap="nowrap">
          <SocialIcon
            Icon={IconBrandFacebook}
            label="Facebook"
            url="https://www.facebook.com/confused"
          />
          <SocialIcon Icon={IconBrandTwitter} label="Twitter" url="https://x.com/MojoMortgagesUK" />
          <SocialIcon
            Icon={IconBrandYoutube}
            label="Youtube"
            url="https://www.youtube.com/@Uswitch"
          />
          <SocialIcon
            Icon={IconBrandInstagram}
            label="Instagram"
            url="https://www.instagram.com/confused_com"
          />
          <SocialIcon
            Icon={IconBrandTiktok}
            label="TikTok"
            url="https://www.tiktok.com/@tempcover"
          />
        </Group> */}
      </div>
    </div>
  );
}
