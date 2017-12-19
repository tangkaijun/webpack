const path = require('path');
//设定 HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清理 /dist 文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
//清单文件插件，生成manifest.json文件，该文件中包含src中的文件与dist中生成文件的映射关系
const ManifestPlugin = require('webpack-manifest-plugin');
/**
webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：
  1.webpack's Watch Mode   npm run watch
     package.json "watch": "webpack --watch",
  2.webpack-dev-server     npm start
     npm install --save-dev webpack-dev-server
     配置devServer: {
             contentBase: './dist'
         },
  3.webpack-dev-middleware npm run server
     npm install --save-dev express webpack-dev-middleware
     output增加 publicPath: '/'
     新增server.js
*/

module.exports = {
  entry:{
  	app:'./src/index.js',
  	print:'./src/print.js'
  },
  devtool: 'inline-source-map',//不要用户生产环境中，主要在开发环境中定位错误。
  //告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
  devServer: {
     contentBase: './dist'
  },
  plugins: [
     //清单文件
     new ManifestPlugin(),
     //清理/dist文件夹
     new CleanWebpackPlugin(['dist']),
     //每次生成新的html文件替换掉旧的html文件。解决改变入口，html中文件名不变问题。
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
   ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  }
};