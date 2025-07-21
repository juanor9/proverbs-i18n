// stylelint.config.cjs
module.exports = {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-scss"],
  rules: {
    "no-descending-specificity": null,
    "selector-class-pattern": null
  }
};
