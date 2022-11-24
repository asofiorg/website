import { NextSeo } from "next-seo";
import { NotionRenderer } from "react-notion";

import Contact from "components/Contact";

import { getAllPosts, getPost } from "utils/posts";

const MarkdownContent = ({ post, blocks }) => {
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          title: post.title,
          description: post.description
        }}
      />
      <article className="text-justify prose m-auto p-8 prose-headings:text-center prose-headings:m-8 prose-img:rounded prose-p:font-sans prose-headings:font-sans prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-p:text-lg prose-p:mb-6">
        <NotionRenderer blockMap={blocks} />
      </article>
      <Contact />
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts.map(post => ({
      params: {
        slug: post.slug
      },
      locale: post.locale
    })),
    fallback: false
  };
};

export const getStaticProps = async ({ locale, params: { slug } }) => {
  const posts = await getAllPosts();

  const post = posts.find(post => post.slug === slug && post.locale === locale);

  const blocks = await getPost(post.id);

  return {
    props: {
      blocks,
      post
    },
    revalidate: 60
  };
};

export default MarkdownContent;
