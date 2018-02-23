const path = require('path');

module.exports = {
  entry: __dirname + "/src/index",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  watch: true,
  devServer: {
    contentBase: './src',
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.html$/,
        use: {loader: 'html-loader'}
      }
    ]
  }
};