const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const devMode = process.env.NODE_ENV === 'development';

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      // filename: "[name].css"
      filename: devMode ? "[name].css" : "[name].[contenthash].css",
      // chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      title: 'Carousel Template · Bootstrap v5.1',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
