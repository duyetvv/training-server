const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./src/index.js']
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
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
}
