const merge = require('webpack-merge'); //eslint-disable-line
const CompressionPlugin = require('compression-webpack-plugin'); //eslint-disable-line
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CompressionPlugin()],
  devtool: '',

});
