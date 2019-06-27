const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

module.exports = merge({
    mode: 'production'
}, baseConfig);