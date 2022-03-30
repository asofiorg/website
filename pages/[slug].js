import fs from "fs";
import matter from "gray-matter";
import markdown from "markdown-it";
import { NextSeo } from "next-seo";
import path from "path";

import Contact from "components/Contact";

const MarkdownContent = ({ frontMatter, content, slug }) => {
  const md = markdown({ linkify: true, typographer: true, html: true }).use(
    require("markdown-it-figure")
  );

  md.renderer.rules.image = (tokens, idx, options, env, slf) => {
    const token = tokens[idx];
    token.attrs[token.attrIndex("alt")][1] = slf.renderInlineAsText(
      token.children,
      options,
      env
    );
    token.attrSet("loading", "lazy");
    token.attrSet("decoding", "async");
    return slf.renderToken(tokens, idx, options);
  };

  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        openGraph={{
          title: frontMatter.title,
          description: frontMatter.description
        }}
      />
      <article
        className="prose dark:prose-invert prose-figure:flex prose-figcaption:font-mono prose-figure:flex-col prose-img:rounded-lg prose-strong:text-center prose-a:text-blue-600 prose-img:m-auto prose-img:max-w-3xl prose-img:w-full prose-h1:text-center prose-lg blog-container m-auto p-12"
        dangerouslySetInnerHTML={{
          __html: md.render(content)
        }}
      />
      <Contact />
    </>
  );
};

export const getStaticPaths = async () => {
  const filesEn = fs.readdirSync(path.join("content", "en"));
  const filesEs = fs.readdirSync(path.join("content", "es"));

  const paths = [];

  filesEn.map(file =>
    paths.push({
      params: {
        slug: file.replace(".md", "")
      },
      locale: "en"
    })
  );

  filesEs.map(file =>
    paths.push({
      params: {
        slug: file.replace(".md", "")
      },
      locale: "es"
    })
  );

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ locale, params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("content", locale, slug + ".md"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      content
    }
  };
};

export default MarkdownContent;
