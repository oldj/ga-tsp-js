/**
 * @author oldj
 * @blog https://oldj.net
 */

'use strict'

const path = require('path')
const webpack = require('webpack')
const moment = require('moment')

const config = {
  base: {
    entry: {
      'bundle': './js/index.js'
    },
    output: {
      path: path.join(__dirname, 'build'),
      filename: '[name].js',
      library: '[name]',
      libraryTarget: 'umd'
    },
    devtool: 'source-map',
    module: {
      rules: [{
        test: /\.js$/,
        loader: ['es3ify-loader', 'babel-loader'],
        exclude: /node_modules/
      }]
    },
    plugins: []
  },
  dev: {
    plugins: [],
    devServer: {
      host: '0.0.0.0',
      disableHostCheck: true
    }
  },
  test: {
    plugins: []
  },
  prod: {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        output: {
          ascii_only: true,
          quote_keys: true,
          screw_ie8: false
        },
        compress: {
          warnings: false,
          //drop_console: true,
          properties: false,
          screw_ie8: false
        },
        mangle: {
          screw_ie8: false
        }
      }),
      new webpack.BannerPlugin(`[name].js ${moment().format('YYYY-MM-DD HH:mm:ss')}`)
    ]
  }
}

module.exports = function (env) {
  return Object.assign(config.base, config[env])
}

