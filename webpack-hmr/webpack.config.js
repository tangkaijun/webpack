const path = require('path');
//设定 HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清理 /dist 文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
//清单文件插件，生成manifest.json文件，该文件中包含src中的文件与dist中生成文件的映射关系
const ManifestPlugin = require('webpack-manifest-plugin');
//
const webpack = require('webpack');

//使用了 webpack-dev-middleware 而没有使用 webpack-dev-server，请使用 webpack-hot-middleware package 包，以在你的自定义服务或应用程序上启用 HMR

module.exports = {
  entry:{
  	app:'./src/index.js',
  },
   devtool: 'inline-source-map',//不要用户生产环境中，主要在开发环境中定位错误。
  //告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
  devServer: {
     contentBase: './dist',
     hot: true
  },
  plugins: [
     //清单文件
     new ManifestPlugin(),
     //清理/dist文件夹
     new CleanWebpackPlugin(['dist']),
     //每次生成新的html文件替换掉旧的html文件。解决改变入口，html中文件名不变问题。
     new HtmlWebpackPlugin({
       title: 'Hot Module Replacement'
     }),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
   ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};