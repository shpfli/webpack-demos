var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var TEM_PATH = path.resolve(SRC_PATH, 'templates');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: {
    app: path.resolve(SRC_PATH, 'index.js'),
    mobile: path.resolve(SRC_PATH, 'mobile.js'),
    //添加要打包在vendors里面的库
    vendors: ['jquery', 'moment']
  },
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    //只要再加上hash这个参数就可以了
    filename: '[name].[hash].js'
  },
  //html-webpack-plugin插件 会自动生成一个html文件
  plugins: [
    //这个使用uglifyJs压缩你的js代码
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
    //把入口文件里面的数组打包成verdors.js
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    //创建了两个HtmlWebpackPlugin的实例，生成两个页面
    new HtmlWebpackPlugin({
      title: 'Hello World app',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'index.html',
      //chunks这个参数告诉插件要引用entry里面的哪几个入口
      chunks: ['app', 'vendors'],
      //要把script插入到标签里
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      title: 'Hello Mobile app',
      template: path.resolve(TEM_PATH, 'mobile.html'),
      filename: 'mobile.html',
      chunks: ['mobile', 'vendors'],
      inject: 'body'
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css'], //注意loaders的处理顺序是从右到左的，这里就是先运行css-loader然后是style-loader
      include: SRC_PATH
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: SRC_PATH
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?limit=8192'
    }, {
      test: /\.jsx?$/,
      loader: 'babel',
      include: SRC_PATH,
      query: {
        presets: ['es2015']
      }
    }]
  }
};
