module.exports = {
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
  {
	 test: /\.(csv|tsv)$/,
	 use: [
	   'csv-loader'
	 ]
	},
	{
	 test: /\.xml$/,
	 use: [
	   'xml-loader'
	 ]
  },
     ]
  },


  devServer: {
    contentBase: "./public",
    // colors: true,
    historyApiFallback: true,
    inline: true
  }
}
