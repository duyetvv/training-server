const nodeExternals = require('webpack-node-externals');


module.exports = require('./webpack.config')({
  mode: 'development',
  entry: {
    main: ['./src/index.js']
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
})
