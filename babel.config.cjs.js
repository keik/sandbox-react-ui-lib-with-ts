module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["ie >= 10"],
        },
      },
    ],
    "@babel/preset-react",
  ],
  plugins: ["babel-plugin-styled-components"],
};
