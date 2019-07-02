const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge({
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor:{
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    minChunks: 1,
                    chunks: 'all'
                },
                // lodash: {
                //     test: /lodash/,
                //     name: 'lodash',
                //     minChunks: 1,
                //     chunks: 'initial'
                // }
            }
        }
    },
    plugins: [
        // new BundleAnalyzerPlugin()
    ]
}, baseConfig);