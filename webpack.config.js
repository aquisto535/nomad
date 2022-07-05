const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: {
    main: "./src/client/js/main.js",
    videoPlayer: "./src/client/js/videoPlayer.js",
  },
  mode: "development", // show whether this whole file is on developing or finished.
  output: {
    filename: "js/[name].js",
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
        test: /\.scss$/, // all the scss file be gathered
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], //webpack starts from backward! sass is the first!
      },
    ],
  },
};
