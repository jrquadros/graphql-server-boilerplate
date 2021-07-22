const path = require('path')
const NodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'server_bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  node: {
    global: true,
    __filename: false,
    __dirname: false,
  },
  externals: [NodeExternals()],
}
