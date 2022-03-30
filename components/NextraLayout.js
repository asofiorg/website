import { MDXProvider } from "@mdx-js/react";
import { NextSeo } from "next-seo";

import Contact from "components/Contact";

const components = {};

const NextraLayout = props => {
  const { meta, ...rest } = props;

  const Seo = () => {
    return (
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description
        }}
      />
    );
  };

  const Layout = ({ children }) => {
    return (
      <>
        <Seo />
        <article className="prose prose-figure:flex prose-figcaption:font-mono prose-figure:flex-col prose-img:rounded-lg prose-strong:text-center prose-a:text-blue-600 prose-img:m-auto prose-img:max-w-3xl prose-img:w-full prose-h1:text-center prose-lg blog-container m-auto p-12">
          <MDXProvider components={components}>{children()}</MDXProvider>
        </article>
        <Contact />
      </>
    );
  };

  return Layout;
};

export default NextraLayout;
