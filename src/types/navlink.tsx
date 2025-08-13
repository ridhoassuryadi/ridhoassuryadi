import { TablerIconsProps } from "@tabler/icons-react";

export type Navlink = {
  href: string;
  label: string;
  icon?: React.ReactNode | TablerIconsProps | any;
  external?: boolean;
};

export type NavigationSection = {
  title?: string;
  items: Navlink[];
};
