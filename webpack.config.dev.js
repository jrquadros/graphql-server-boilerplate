const path = require('path')
const WebpackNodeExternals = require('webpack-node-externals')
// const WebpackShellPluginNext = require('webpack-shell-plugin-next')
const WebpackReloadServerPlugin = require('./webpack/ReloadServerPlugin')

const filename = 'server_bundle.js'

module.exports = {
  entry: './src/index.ts',
  plugins: [new WebpackReloadServerPlugin({ script: path.resolve('dist', filename) })],
  mode: 'development',
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
    __dirname: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  externals: [new WebpackNodeExternals()],
}
