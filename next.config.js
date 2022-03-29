const withNextra = require("nextra")("components/NextraLayout.js");

module.exports = withNextra({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
});
