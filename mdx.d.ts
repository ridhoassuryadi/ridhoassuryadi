declare module '*.mdx' {
  import * as React from 'react'
  const MDXComponent: (props: any) => React.ReactElement
  export default MDXComponent
  // Optional: allow named exports like frontmatter/metadata if you use them
  export const frontmatter: Record<string, any>
  export const metadata: Record<string, any>
}
