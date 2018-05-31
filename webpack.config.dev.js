
/*eslint no-restricted-globals: ["error", "event"]*/
/*eslint no-restricted-imports: ["error", { "paths": ["fs"], "patterns": ["webpack/*"] }]*/

//import webpack from 'webpack';
import path from 'path';

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

export default {
  mode: 'development',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],

  // debug: true,
  devtool: 'inline-source-map',
  //noInfo: false,
  //  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: "bundle.js"
  },

  plugins: [],

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }

}
