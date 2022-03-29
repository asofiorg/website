import { MDXProvider } from "@mdx-js/react";

const components = {};

const NextraLayout = ({ children, meta, route, ...props }) => {
  return (
    <article>
      <MDXProvider components={components}>{children}</MDXProvider>
    </article>
  );
};

export default NextraLayout;
