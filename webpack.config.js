const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin  = require("mini-css-extract-plugin");
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins: [ 
    new MiniCssExtractPlugin({
        filename: 'style.css',
      }),
  ],
  devServer: {
     contentBase: './dist',
    },
};