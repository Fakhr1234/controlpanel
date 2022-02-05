const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
      publicPath: '/',
        path: path.resolve(__dirname, 'app'),
        filename: 'app.js',
      },
      devServer: {
        contentBase: path.join(__dirname, 'app'),
        // compress: true,
        port: 120,
        writeToDisk: true,
        stats: 'errors-only',
        open: true,
    inline: false,
    },
      module: {
        rules: [
          {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            exclude: /images/,
            use: [
              {
                loader: "file-loader", 
                options: {
                  name: '[name].[ext]',
                  outputPath: "assets/fonts",
                }
              }
            ]
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              MiniCssExtractPlugin.loader, 
              'css-loader', 
              'postcss-loader',
              'sass-loader'
            ]
          },
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
        ],
      },
      plugins: [
        
        new CleanWebpackPlugin(),
        new OptimizeCSSAssetsPlugin({}),
        new MiniCssExtractPlugin({
          filename: 'assets/css/style.css',
        }),
              new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            }),
      ],

  };
  