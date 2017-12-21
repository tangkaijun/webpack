const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
/***
  有三种常用的代码分离方法：
     1.入口起点：使用 entry 配置手动地分离代码。
          缺点:
              如果入口 chunks 之间包含重复的模块，那些重复模块都会被引入到各个 bundle 中。
              这种方法不够灵活，并且不能将核心应用程序逻辑进行动态拆分代码。
     2.防止重复：使用 CommonsChunkPlugin 去重和分离 chunk。
     3.动态导入：通过模块的内联函数调用来分离代码。
*/

module.exports = {
  entry: {
    index: './src/index.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    }),
    new webpack.optimize.CommonsChunkPlugin({
       name: 'common' // 指定公共 bundle 的名称。
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};