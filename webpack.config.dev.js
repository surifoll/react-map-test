const webpack = require("webpack");
const path = require("path");
const myEnv = require("dotenv").config(path.resolve(process.cwd(), ".env"));
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web", //can be node if its a node app
  devtool: "cheap-module-source-map", // let us see original code in the browswer
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  node: {
    fs: "empty",
  },
  devServer: {
    stats: "minimal", // minimizes logs in console
    overlay: true, //overlat errors in the browser
    historyApiFallback: true, //all request will be sent to html so that react router can take effect
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3009"),
      "process.env.GOOGLE_MAP_API_KEY": JSON.stringify(""),
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // how to find js / jsx files
        exclude: /nodemodules/,
        use: ["babel-loader", "eslint-loader"], //run babel
      },
      {
        test: /\.(css)$/, // how to find js / jsx files
        use: ["style-loader", "css-loader"], //run babel
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
};
