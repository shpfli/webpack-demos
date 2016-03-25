var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: [
    SRC_PATH
  ],
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  //html-webpack-plugin插件 会自动生成一个html文件
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello World app'
    })
  ],

  //webpack-dev-server 配置
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port: 9999
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css'], //注意loaders的处理顺序是从右到左的，这里就是先运行css-loader然后是style-loader
      include: SRC_PATH
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: SRC_PATH
    }]
  }
};
