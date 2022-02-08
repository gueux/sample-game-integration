const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

dotenv.config();

module.exports = env => {
  const isProduction = env.production;

  return {
    target: "node",
    entry: path.join(__dirname, 'src', 'index.tsx'),
    devtool: 'inline-source-map',
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.(js)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(css)$/,
          use: ['style-loader', 'css-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
      fallback: {
        "fs": false,
        "tls": false,
        "net": false,
        "path": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
        "crypto-browserify": false,
        "bufferutil": false,
        "utf-8-validate": false,
        "erlpack": false,
        "zlib-sync": false,
      }
    },
    output: {
      path: path.join(__dirname, 'build'),
    },
    plugins: [
      new HtmlWebpackPlugin(Object.assign({}, {
        template: path.join(__dirname, 'public', 'index.ejs'),
        filename: 'index.html',
      }, {})),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'src'),
      hot: true,
      inline: true,
      port: 3000,
      open: true,
    },
  };
};
