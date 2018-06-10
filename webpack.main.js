const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  node: {
    __dirname: false,
    __filename: false
  }
};
