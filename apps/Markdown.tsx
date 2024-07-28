import { useState } from "react";
import Markdown from "react-markdown";
import useTheme from "@hooks/useTheme";
import useWindow from "@hooks/useWindow";

export interface Config {
  id: string;
  type: "markdown";
  name: string;
  content?: string;
}

export default function MarkdownWindow(config: Config) {
  const { theme } = useTheme();
  const { open } = useWindow();

  return (
    <div className="flex h-full w-full flex-col items-center justify-start overflow-y-auto p-12">
      <article
        className={`prose prose-sm sm:prose-base ${
          theme == "DARK" ? "prose-invert" : ""
        }`}
      >
        <Markdown
          components={{
            a: (props) => {
              console.log(props.href);
              return (
                <a
                  {...props}
                  href={undefined}
                  className="cursor-pointer"
                  onClick={() =>
                    !props.href
                      ? null
                      : props.href?.startsWith("#")
                        ? open(props.href.slice(1))
                        : props.href?.endsWith("!")
                          ? window.open(
                              props.href.slice(0, props.href.length - 1),
                              "_blank",
                            )
                          : open({
                              id: props.href,
                              type: "link",
                              name: props.children?.toString() || "Browser",
                              url: props.href,
                            })
                  }
                >
                  {props.children}
                </a>
              );
            },
          }}
        >
          {config.content}
        </Markdown>
      </article>
    </div>
  );
}

export function Seo(config: Config & { level: number }) {
  const Heading = (level: number) => (props: any) => {
    const As = `h${Math.min(level + config.level, 6)}` as
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "h5"
      | "h6";

    return <As {...props} />;
  };

  return (
    <Markdown
      components={{
        a: (props) => (
          <a {...props} href={props.href?.replace("#external", "")} />
        ),
        h1: Heading(1),
        h2: Heading(2),
        h3: Heading(3),
        h4: Heading(4),
        h5: Heading(5),
        h6: Heading(6),
        img: () => null,
      }}
    >
      {config.content}
    </Markdown>
  );
}

export function Icon() {
  return <img src="/apps/document.svg" alt="Markdown Icon" draggable={false} />;
}

export const config = {
  width: 800,
  height: 500,
};
