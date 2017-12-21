const path = require('path');
const webpack = require('webpack');
//设定 HtmlWebpackPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清理 /dist 文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
//清单文件插件，生成manifest.json文件，该文件中包含src中的文件与dist中生成文件的映射关系
const ManifestPlugin = require('webpack-manifest-plugin');

/**
  将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，
  是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。因此通过实现以上步骤，
  利用客户端的长效缓存机制，可以通过命中缓存来消除请求，并减少向服务器获取资源，
  同时还能保证客户端代码和服务器端代码版本一致。这可以通过使用新的 entry(入口) 起点，
  以及再额外配置一个 CommonsChunkPlugin 实例的组合方式来实现
*/
module.exports = {
  entry:{
  	main: './src/index.js',
  	vendor: [
      'lodash'
    ]
  },
  plugins: [
     //清单文件
     new ManifestPlugin(),
     //清理/dist文件夹
     new CleanWebpackPlugin(['dist']),
     //每次生成新的html文件替换掉旧的html文件。解决改变入口，html中文件名不变问题。
     new webpack.HashedModuleIdsPlugin(),
     new HtmlWebpackPlugin({
       title:'Caching'
     }),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'vendor'
     }),
     new webpack.optimize.CommonsChunkPlugin({
       name: 'runtime'
     })
   ],
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  }
};