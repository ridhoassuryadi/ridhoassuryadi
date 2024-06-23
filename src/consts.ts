import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Ridho Assuryadi",
  DESCRIPTION: "Software Engineer who loves design.",
  EMAIL: "ulunmuhammadridho@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Hello my name is Ridho!",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/ridho_assuryadi",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/ridhoassuryadi",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/m-ridho/",
  },
];
