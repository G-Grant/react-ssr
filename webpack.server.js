const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index-server.js',
    output: {
        filename: 'index-server.js',
        path: path.join(__dirname, 'server'),
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.js[x]?/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.less/,
            loader: 'ignore-loader'
        }, {
            test: /\.(png|jp[e]?g|gif)/,
            use: [{
                loader: 'url-loader',

                options: {
                    limit: 10240
                }
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}