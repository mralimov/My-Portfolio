const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, ''),
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, './src/ProjectsFilterJSX.js'),
  output: {
    path: path.join(__dirname, ''),
    filename: '{projectsFilter.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
    loaders: [{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }],
  },
  // devtool: 'cheap-module-eval-source-map',
};
