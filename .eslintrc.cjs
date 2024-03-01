console.log(require("@peggyjs/eslint-plugin").configs) // undefined?!

module.exports = {
  root: true, plugins: ["@peggyjs"], // these lines removed neither helps
  extends: ["plugin:@peggyjs/recommended"],
};
