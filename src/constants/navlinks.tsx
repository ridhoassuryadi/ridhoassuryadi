import {
  Home,
  Write,
  Bookmark,
  MessageOne,
  Tool,
  Computer,
  GraphicDesignTwo,
  UserToUserTransmission,
  Components,
  Shield,
  ApplicationMenu,
} from "@icon-park/react";

export const navigationSections = [
  {
    items: [
      {
        href: "/",
        label: "Home",
        icon: Home,
      },
      {
        href: "/writing",
        label: "Writing",
        icon: Write,
      },
    ]
  },
  {
    title: "Me",
    items: [
      {
        href: "/bookmarks",
        label: "Bookmarks",
        icon: Bookmark,
      },
      {
        href: "/ama",
        label: "AMA",
        icon: MessageOne,
      },
      {
        href: "/stack",
        label: "Stack",
        icon: Tool,
      },
    ]
  },
  {
    title: "Projects",
    items: [
      {
        href: "https://raizora.com",
        label: "Raizora",
        icon: Computer,
        external: true,
      },
      {
        href: "https://himajinhobby.com",
        label: "HimajinHobby",
        icon: GraphicDesignTwo,
        external: true,
      },
      {
        href: "https://treonstudio.com",
        label: "TreonStudio",
        icon: UserToUserTransmission,
        external: true,
      },
      {
        href: "https://gea-tourism.com",
        label: "Gea Tourism",
        icon: Components,
        external: true,
      },
      {
        href: "https://tempat-teduh.com",
        label: "Tempat Teduh",
        icon: Shield,
        external: true,
      },
      {
        href: "/app-dissection",
        label: "Digital Crafteds",
        icon: ApplicationMenu,
      },
    ]
  }
];
