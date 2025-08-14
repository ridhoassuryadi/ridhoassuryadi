import {
  Home,
  Write,
  Bookmark,
  MessageOne,
  Tool,
} from "@icon-park/react";
import {
  RaizoraIcon,
  HimajinHobbyIcon,
  TreonStudioIcon,
  GeaTourismIcon,
  TempatTeduhIcon,
  DigitalCraftedsIcon,
} from "@/components/icons/ProjectIcons";

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
        href: "/about",
        label: "About",
        icon: MessageOne,
      },
      {
        href: "/bookmarks",
        label: "Bookmarks",
        icon: Bookmark,
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
        icon: RaizoraIcon,
        external: true,
      },
      {
        href: "https://himajinhobby.com",
        label: "HimajinHobby",
        icon: HimajinHobbyIcon,
        external: true,
      },
      {
        href: "https://treonstudio.com",
        label: "TreonStudio",
        icon: TreonStudioIcon,
        external: true,
      },
      {
        href: "https://gea-tourism.com",
        label: "Gea Tourism",
        icon: GeaTourismIcon,
        external: true,
      },
      {
        href: "https://tempat-teduh.com",
        label: "Tempat Teduh",
        icon: TempatTeduhIcon,
        external: true,
      },
      {
        href: "/app-dissection",
        label: "Digital Crafteds",
        icon: DigitalCraftedsIcon,
      },
    ]
  }
];
