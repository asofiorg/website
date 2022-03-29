const withNextra = require("nextra")("components/NextraLayout.jsx");

module.exports = withNextra({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
});
