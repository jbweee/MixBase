var path = require('path');
var SRC_DIR = path.resolve(__dirname, './client');
var DIST_DIR = path.resolve(__dirname, './static');
// var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
    // publicPath: '/'
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
       }
      }
    ]
  },
  // devServer: {
  //   historyApiFallback: true,
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'static/index.html'
  //   })
  // ]
};