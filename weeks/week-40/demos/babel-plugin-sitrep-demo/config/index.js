const merge = require('webpack-merge');

const commonConfig = require('./common'); // eslint-disable-line
const currentConfig = require(`./${process.env.NODE_ENV || 'development'}`); // eslint-disable-line

module.exports = merge(commonConfig, currentConfig);
