/* eslint-disable quote-props */
/* eslint-disable key-spacing */
const path = require('path');
const { DefinePlugin } = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const widgets = require('./widget-parser');

const PORT = 3000;

module.exports = {
  devtool: 'source-map',
  devServer: {
    compress: true, // GZip
    contentBase: './build',
    hot: true,
    noInfo: true, // Supress webpack bundle info. Errors and warnings will still be shown.
    port: PORT,
    stats: 'minimal' // some bundle information, but not all of it.
  },
  entry: {
    index: path.resolve(__dirname, 'src/index.jsx')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    path: path.resolve(__dirname, '../../docs'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[id]_[hash].js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.less', '.css', '.json', '.html'],
    alias: {
      '@appcraft/visualizer'  : path.resolve(__dirname, '../dist'),
      '@material-ui/core'     : path.resolve(__dirname, 'node_modules/@material-ui/core/'),
      '@material-ui/icons'    : path.resolve(__dirname, 'node_modules/@material-ui/icons/'),
      '@material-ui/pickers'  : path.resolve(__dirname, 'node_modules/@material-ui/pickers/'),
      'camelcase'             : path.resolve(__dirname, 'node_modules/camelcase/'),
      'clsx'                  : path.resolve(__dirname, 'node_modules/clsx/'),
      'lodash'                : path.resolve(__dirname, 'node_modules/lodash/'),
      'prop-types'            : path.resolve(__dirname, 'node_modules/prop-types/'),
      'react'                 : path.resolve(__dirname, 'node_modules/react/'),
      'react-dom'             : path.resolve(__dirname, 'node_modules/react-dom/'),
      'react-router-dom'      : path.resolve(__dirname, 'node_modules/react-router-dom/'),
      'styled-components'     : path.resolve(__dirname, 'node_modules/styled-components/')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new DefinePlugin({
      ...widgets
    })
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: [/(node_modules)/, path.resolve(__dirname, 'src/assets/lib')],
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: ['react-refresh/babel']
        }
      }]
    }, {
      test: /\.png$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: 'images',
          name: '[name].[ext]'
        }
      }]
    }, {
      test: /\.(eot|ttf|woff|woff2|svg|svgz|ico)(\?.+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[hash:8].[ext]'
        }
      }]
    }]
  }
};
