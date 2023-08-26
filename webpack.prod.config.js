const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "./static/js/bundle.[contenthash].js",
    chunkFilename: "[name].[contenthash].js",
    clean: true,
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
    },
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "./static/css/styles.[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|svg|gif|png)$/,
        type: "asset/resource",
        generator: {
          filename: "./static/images/[name][hash][ext]", // Organize images in a separate folder
        },
      },
      { test: /\.txt$/, type: "asset/source" },
      { test: /\.css/, use: [MiniCssExtractPlugin.loader, "css-loader"] },
      {
        test: /\.scss/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "source-map",
  resolve: { extensions: [".js", ".jsx"] },
};
