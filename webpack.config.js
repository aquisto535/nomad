const path = require("path");

module.exports = {
  entry: "./src/client/js/main.js", // start file
  mode: "development", // show whether this whole file is on developing or finished.
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "assets", "js"), // designate the path and destination
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
    ],
  },
};
