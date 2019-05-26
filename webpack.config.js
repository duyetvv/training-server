const nodeExternals = require('webpack-node-externals');


module.exports = options => {
  console.log(options);
  return {
    entry: options.entry,
    output: options.output,
    mode: options.mode,
    optimization: options.optimization,
    target: "node",
    node: {
      // Need this when working with express, otherwise the build fails
      __dirname: false,   // if you don't put this is, __dirname
      __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()],
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
    },
    resolve: {
      modules: ['node_modules', 'src']
    },
  }
}
