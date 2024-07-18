const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const CSSMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './app/index.ts',
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
      { test: /\.(css)$/, use: [MiniCSSExtractPlugin.loader, 'css-loader'] },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    extensionAlias: {
      ".js": [".js", ".ts"],
      ".cjs": [".cjs", ".cts"],
      ".mjs": [".mjs", ".mts"]
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: [new CSSMinimizerWebpackPlugin(), '...'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
      hash: true,
    }),
    new MiniCSSExtractPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
};
