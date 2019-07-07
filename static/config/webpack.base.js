const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin  = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const glob = require("glob");

const fs = require('fs');

let files = fs.readdirSync('./src/modules/');

files = files.map(filePath=>path.resolve(__dirname, '../src/modules/' + filePath));

let entry = files.reduce((obj, filePath)=>{
    obj[path.basename(filePath, path.extname(filePath))] = filePath;
    return obj;
}, {})

function generateHtml(){
    return files.map(filePath=>{
        return new HtmlWebpackPlugin({
            title: path.basename(filePath, path.extname(filePath)),
            template: path.join(__dirname, '../template/template.ejs'),
            filename: `${path.basename(filePath, path.extname(filePath))}.html`,
            // 如果不使用 chunks，生成的 HTML 文件会加载所有打包后的文件，如果指定 chunks，则会引入指定的 chunks
            chunks: ['commons', path.basename(filePath, path.extname(filePath))]
        })
    })
}

module.exports = {
    entry: {
        // vendors: ['react', 'react-dom'],
        ...entry
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
        ...generateHtml(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css'
        }),
        new OptimizeCssAssetsPlugin({}),
        new CleanWebpackPlugin(),
        new HtmlWebpackExternalsPlugin({
            externals: [{
                module: 'react',
                entry: 'https://lib.baomitu.com/react/16.8.6/umd/react.development.js',
                global: 'React'
            }, {
                module: 'react-dom',
                entry: 'https://lib.baomitu.com/react-dom/16.8.6/umd/react-dom.development.js',
                global: 'ReactDOM'
            }]
        })
    ]
}