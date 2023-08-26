const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
      { test: /\.(jpg|jpeg|svg|gif|png)$/, type: "asset/resource" },
      { test: /\.txt$/, type: "asset/source" },
      { test: /\.css/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true, // for single page app
    client: {
      overlay: {
        errors: true,
        runtimeErrors: true,
        warnings: false,
      },
    },
  },
  devtool: "inline-source-map",
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
};
