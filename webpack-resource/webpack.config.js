const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
  	//loader可以帮助把css,图片等非模块化的资源转换成webpack可加载的模块资源。
  	//加载css样式文件
  	rules:[
  		{
  			test:/\.css$/,//正则表达式匹配.css文件
  			use:[
  			   'style-loader',
  			   'css-loader'
  			]
  		},//加载css依赖的图片资源
  		{
  			test:/\.(png|svg|jpg|gif)$/,
  			use:[
  				'file-loader'//,
  				//'image-webpack-loader',
  				//'url-loader'
  			]
  		},//加载字体
  		{
  			test:/\.(woff|woff2|eot|ttf|otf)$/,
  			use:[
  				'file-loader'
  			]
  		}//加载数据如JSON 文件，CSV、TSV 和 XM
  		,
  		{
             test: /\.(csv|tsv)$/,
             use: [           
                 'csv-loader'
             ]
        },
        {
              test: /\.xml$/,
              use: [
                 'xml-loader'
             ]
        }
  	]
  }
};