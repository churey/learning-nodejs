var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }]
  }
}
