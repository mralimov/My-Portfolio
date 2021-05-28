const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, ''),
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, './src/ProjectsFilterJSX.js'),
  output: {
    path: path.join(__dirname, '/'),
    filename: '{projectsFilter.js',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // devtool: 'cheap-module-eval-source-map',
};
