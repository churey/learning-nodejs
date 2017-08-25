const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting',
      template: './index.html'
    })
  ]
};
