const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  target: 'electron-main',
  entry: {
    main: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: [path.resolve(__dirname, 'src', 'main.ts')],
        loader: 'ts-loader'
      }
    ]
  }
};
