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
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
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
};