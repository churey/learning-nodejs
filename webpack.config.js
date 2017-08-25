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
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 2 } },
        'postcss-loader',
	'sass-loader'
      ]
    }]
  }
}
