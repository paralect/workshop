const webpack = require('webpack');
const { publicPath } = require('./index');

module.exports = {
  output: {
    publicPath,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true,
      },
      compress: {
        screw_ie8: true,
      },
      comments: false,
    }),
  ],
};
