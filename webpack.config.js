const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const path = require('path')

module.exports = (env, argv) => ({
  mode: argv.mode === 'production' ? 'production' : 'development',
  devtool: argv.mode === 'production' ? false : 'inline-source-map',

  entry: {
    ui: './src/ui.tsx',
    code: './src/code.ts',
  },

  module: {
    rules: [
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['style-loader', { loader: 'css-loader' }] },
      { test: /\.(png|jpg|gif|webp|svg)$/, loader: 'url-loader' },
    ],
  },

  resolve: {
    alias: {
      '~': path.resolve(rootPath, '/src'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ui.html',
      filename: 'ui.html',
      cache: false,
      chunks: ['ui'],
    }),
    new ScriptExtHtmlWebpackPlugin({
      inline: [/\ui.js$/],
    })
  ],
})