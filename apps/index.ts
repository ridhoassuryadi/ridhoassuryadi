import * as Folder from "@apps/Folder";
import * as Link from "@apps/Link";
import * as Markdown from "@apps/Markdown";
import * as Image from "@apps/Image";
import * as Email from "@apps/Email";
import * as Audio from "@apps/Audio";

export interface AppConfig {
  window?: {
    width?: number;
    height?: number;
  };
}

const apps = {
  folder: Folder,
  link: Link,
  markdown: Markdown,
  image: Image,
  email: Email,
  audio: Audio,
} as const;

export type App = Omit<
  Parameters<(typeof apps)[keyof typeof apps]["default"]>,
  "window"
>[0] & {
  window?: { width?: number; height?: number; fullscreen?: boolean };
  icon?: string;
  seo?: boolean;
};

export default apps;
