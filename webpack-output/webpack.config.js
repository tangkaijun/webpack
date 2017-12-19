const path = require('path');
//设定 HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清理 /dist 文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
//清单文件插件，生成manifest.json文件，该文件中包含src中的文件与dist中生成文件的映射关系
const ManifestPlugin = require('webpack-manifest-plugin');


module.exports = {
  entry:{
  	app:'./src/index.js',
  	print:'./src/print.js'
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
    path: path.resolve(__dirname, 'dist')
  }
};