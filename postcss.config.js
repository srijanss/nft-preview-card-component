module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("stylelint")({
      configFile: "./.stylelintrc.json",
    }),
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-preset-env")({
      stage: 1,
    }),
    require("autoprefixer")({
      overrideBrowserslist: ["last 2 versions", "ie > 8"],
    }),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
