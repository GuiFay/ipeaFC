const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const plugins = require("./webpack-provide-plugins");

module.exports = {
  mode: "development",
  entry: ["babel-polyfill", "bootstrap", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "img/"
            }
          }
        ]
      },
      {
        test: /\.(eot|otf|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: true
    }),
    new webpack.ProvidePlugin(plugins)
  ]
};
