const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: "./src/client/js/main.js", // start file
  watch: true, // it makes keep moving console and front-end console possible
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  mode: "development", // show whether this whole file is on developing or finished.
  output: {
    filename: "js/main.js",
    path: path.resolve(__dirname, "assets"), // designate the path and destination
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // all the js file be gathered
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
            // and all js code will be processed by babel-loader
          },
        },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], //webpack starts from backward! sass is the first!
      },
    ],
  },
};
