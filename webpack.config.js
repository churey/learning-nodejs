var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname + '/dist',
    filename: "bundle.js"
  },
  devtool: 'source-map',
  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
    }]
  }
}
