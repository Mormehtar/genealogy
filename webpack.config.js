const path = require('path');

module.exports = {
  entry: './client/main.js',
  output: { path: path.join(__dirname, 'static'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', "stage-0"]
        }
      }
    ]
  },
  devtool: 'eval-source-map',
  plugins: []
};