/* eslint-disable */
const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.resolve(__dirname, '../../');
const sourceFolder = path.resolve(rootPath, 'src');
const buildFolder = path.resolve(rootPath, 'dist');
const configObj = require(path.resolve(
  rootPath,
  'tools',
  'config',
  'development.js',
));

module.exports = () => {
  const config = {
    output: { path: buildFolder },

    resolve: {
      extensions: ['.js', '.jsx'],
    },

    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        title: 'Quizrr code test',
        template: `${sourceFolder}/assets/index.ejs`,
      }),
      new webpack.DefinePlugin({
        config: JSON.stringify(configObj),
      }),
    ],

    optimization: {
      splitChunks: {
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
              )[1];

              return `npm.${packageName.replace('@', '')}`;
            },
            chunks: 'all',
          },
        },
      },
    },

    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          include: sourceFolder,
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: { emitWarning: true },
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader' },
        },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
          test: /\.html$/,
          use: [{ loader: 'html-loader', options: { minimize: true } }],
        },
        {
          test: /\.(otf|ttf|woff|svg|png)$/,
          exclude: /node_modules/,
          use: { loader: 'file-loader' },
        },
      ],
    },

    devServer: { historyApiFallback: true },
  };

  return config;
};
