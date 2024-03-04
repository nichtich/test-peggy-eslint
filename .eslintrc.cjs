module.exports = {
  extends: ["plugin:@peggyjs/recommended"],
  rules: {
    // apply to both .js and .peggy/.pegjs
  },
  overrides: [
    { // should apply to .js only
      files: ["*.js"],
      excludedFiles: "name-of-temporary-js-generated-by-peggy.js",
      rules: {
        semi: [ "error", "never" ], // Disallow semicolons
      }
    }
  ]
};
