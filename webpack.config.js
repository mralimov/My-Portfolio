const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: './src/ProjectsFilterJSX.js',
  output: {
    path: path.join(__dirname),
    filename: '{projectsFilter.js',
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  devtools: '',
};
