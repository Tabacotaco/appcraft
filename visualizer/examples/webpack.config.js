/* eslint-disable quote-props */
/* eslint-disable key-spacing */
const path = require('path');
const { DefinePlugin } = require('webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const widgets = require('./widget-parser');

const PORT = 3000;

module.exports = {
  devtool: 'source-map',
  devServer: {
    port: PORT,
    contentBase: './build',
    hot: true
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
      'camelcase'             : path.resolve(__dirname, 'node_modules/camelcase/'),
      'clsx'                  : path.resolve(__dirname, 'node_modules/clsx/'),
      'lodash'                : path.resolve(__dirname, 'node_modules/lodash/'),
      'prop-types'            : path.resolve(__dirname, 'node_modules/prop-types/'),
      'react'                 : path.resolve(__dirname, 'node_modules/react/'),
      'react-dom'             : path.resolve(__dirname, 'node_modules/react-dom/'),
      'react-router-dom'      : path.resolve(__dirname, 'node_modules/react-router-dom/')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new CopyPlugin([{
      test: /\.png$/,
      from: path.resolve(__dirname, 'src/assets/images'),
      to: 'images'
    }]),
    new DefinePlugin({
      '__WEBPACK_DEFINE__.WIDGET_DEFINITIONS': JSON.stringify(widgets)
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
