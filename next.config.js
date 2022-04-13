const rewrites = async () => [
  {
    destination: "https://cdn.splitbee.io/sb.js",
    source: "/sb.js"
  },
  {
    destination: "https://hive.splitbee.io/:slug",
    source: "/sb-api/:slug"
  }
];

const redirects = async () => [
  {
    source: "/apply",
    destination: "https://lu.ma/community/com-LBpC9Ik73ZEJvnj/apply",
    permanent: true
  },
  {
    source: "/laura",
    destination: "https://ayo.so/l_gomezjurado",
    permanent: true
  },
  {
    source: "/juan",
    destination: "https://scidroid.co/",
    permanent: true
  }
];

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  rewrites,
  redirects,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en"
  }
};
