const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
    path:__dirname + '/dist'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting',
      template: './index.html'
    })
  ]
};
