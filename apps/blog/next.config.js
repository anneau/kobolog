const withTM = require("next-transpile-modules")(["ui"]);

module.exports = withTM({
  reactStrictMode: true,
  pageExtensions: ["tsx"],
  compiler: {
    relay: {
      // This should match relay.config.js
      src: "./",
      artifactDirectory: "__generated__",
      language: "typescript",
    },
  },
});
