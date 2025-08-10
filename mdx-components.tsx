import type { ComponentProps } from "react";

type MDXComponents = {
  [key: string]: React.ComponentType<any>;
} & {
  h1?: React.ComponentType<ComponentProps<'h1'>>;
  h2?: React.ComponentType<ComponentProps<'h2'>>;
  h3?: React.ComponentType<ComponentProps<'h3'>>;
  h4?: React.ComponentType<ComponentProps<'h4'>>;
  h5?: React.ComponentType<ComponentProps<'h5'>>;
  h6?: React.ComponentType<ComponentProps<'h6'>>;
  p?: React.ComponentType<ComponentProps<'p'>>;
  a?: React.ComponentType<ComponentProps<'a'>>;
  ul?: React.ComponentType<ComponentProps<'ul'>>;
  ol?: React.ComponentType<ComponentProps<'ol'>>;
  li?: React.ComponentType<ComponentProps<'li'>>;
  blockquote?: React.ComponentType<ComponentProps<'blockquote'>>;
  code?: React.ComponentType<ComponentProps<'code'>>;
  pre?: React.ComponentType<ComponentProps<'pre'>>;
  img?: React.ComponentType<ComponentProps<'img'>>;
  hr?: React.ComponentType<ComponentProps<'hr'>>;
  br?: React.ComponentType<ComponentProps<'br'>>;
  table?: React.ComponentType<ComponentProps<'table'>>;
  thead?: React.ComponentType<ComponentProps<'thead'>>;
  tbody?: React.ComponentType<ComponentProps<'tbody'>>;
  tr?: React.ComponentType<ComponentProps<'tr'>>;
  td?: React.ComponentType<ComponentProps<'td'>>;
  th?: React.ComponentType<ComponentProps<'th'>>;
};

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    ...components,
  };
}
