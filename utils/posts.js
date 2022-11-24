const NOTION_BLOG_ID = "3d5946a3761e4c74b385052fba1b8975";

const getAllPosts = async () => {
  const request = await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  );

  const data = await request.json();

  return data;
};

const getPost = async id => {
  const request = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`);

  const data = await request.json();

  return data;
};

export { getAllPosts, getPost };
