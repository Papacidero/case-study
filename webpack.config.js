const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    bundle: './dist/scripts/index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
  },
  devServer: {
    inline: true,
    contentBase: './build',
    port: 5000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015', 'react'],
          },
        },
      },
      {
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}, 
    ],
  },
};