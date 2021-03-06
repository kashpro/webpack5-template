const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  /*==============================================================================*/
  mode: "development",
  /*==============================================================================*/
  devtool: "source-map",
  /*==============================================================================*/
  devServer: {
    contentBase: path.join(__dirname, 'src/'),
    watchContentBase: true,
    overlay: true,
    index: 'index.html',
    historyApiFallback: true,
    hot: true,
    inline: true,
    open: true,
    compress: true,
    publicPath: '/',
  },
  /*==============================================================================*/
});