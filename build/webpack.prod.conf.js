const webpack = require('webpack')
const { merge } = require('webpack-merge')
const base = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")

base.output.filename = '[name].[hash].js'
base.output.chunkFilename = '[id].[hash].js'

module.exports = merge(base, {
  mode: 'production',
  optimization: {
    usedExports: true,
    minimize: true,
    concatenateModules: true,
    minimizer: [
      new TerserPlugin()
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: '../index.html',
      template: 'src/index.html'
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
})
