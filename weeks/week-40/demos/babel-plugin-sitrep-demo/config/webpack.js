const merge = require('webpack-merge');

const commonConfig = require('./common/webpack'); // eslint-disable-line
const currentConfig = require(`./${process.env.NODE_ENV || 'development'}/webpack`); // eslint-disable-line

module.exports = merge(commonConfig, currentConfig);
