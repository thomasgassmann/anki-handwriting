const HtmlWebpackPlugin = require("html-webpack-plugin");
var InlineChunkHtmlPlugin = require("inline-chunk-html-plugin");

module.exports = {
  entry: {
    front: "./src/front.ts",
    back: "./src/back.ts",
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules(?!\/hanzi-writer)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "ie 11" }]],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "front.html",
      inject: true,
      template: "src/front.html",
      chunks: ["front"],
    }),
    new HtmlWebpackPlugin({
      filename: "back.html",
      inject: true,
      template: "src/back.html",
      chunks: ["back"],
    }),
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/front/, /back/]),
  ],
};
