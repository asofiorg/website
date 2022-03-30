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

const withNextra = require("nextra")("components/NextraLayout.js");

module.exports = withNextra({
  rewrites,
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en"
  }
});
