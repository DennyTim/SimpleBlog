import '@babel/polyfill';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

module.exports = {
  devtool: false,
  entry: {
    main: [
      '@babel/polyfill',
      './src/app/index.js',
      './src/css/main.scss'
    ],
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/react'],
            cacheDirectory: true,
            plugins: ['@babel/plugin-proposal-class-properties', 'react-hot-loader/babel'],
          },
        }],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              camelCase: true
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer,
              ],
            },
          }
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer,
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
          'img-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        devServer: true,
      },
    }),
    new CopyWebpackPlugin([
      { from: 'src/img', to: 'img' },
    ]),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      exclude: ['bundle.js'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.html',
    }),
  ],
};
