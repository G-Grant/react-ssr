const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin  = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
    entry: {
        app: './index.js',
        a: './src/a.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].[contenthash:8].js'
    },
    module: {
        rules: [{
            test: /\.js[x]?/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            use: [{
                loader: MiniCssExtractPlugin.loader
            }, {
                loader: 'css-loader'
            }, {
                loader: 'postcss-loader'
            }, {
                loader: 'less-loader'
            }]
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React SSR',
            template: path.join(__dirname, '../template/template.ejs')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        }),
        new OptimizeCssAssetsPlugin({}),
        new CleanWebpackPlugin(),
        // new HtmlWebpackExternalsPlugin({
        //     externals: [{
        //         module: 'react',
        //         entry: 'https://lib.baomitu.com/react/16.8.6/umd/react.development.js',
        //         global: 'React'
        //     }, {
        //         module: 'react-dom',
        //         entry: 'https://lib.baomitu.com/react-dom/16.8.6/umd/react-dom.development.js',
        //         global: 'ReactDOM'
        //     }]
        // })
    ]
}