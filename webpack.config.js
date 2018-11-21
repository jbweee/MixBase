var path = require('path');
var SRC_DIR = path.resolve(__dirname, './client');
var DIST_DIR = path.resolve(__dirname, './static');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module : {
    rules : [
      {
        loader : 'babel-loader',
        test: /\.js[x]?/,
        exclude: /(node_modules|dep)/,    
        query: {
          presets: ['react', 'es2015', 'env'],
          plugins: [
            ['styled-components'], 
            ['babel-plugin-styled-components']
          ],
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};