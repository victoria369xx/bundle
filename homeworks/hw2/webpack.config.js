const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require ('webpack-bundle-analyzer');

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const plugins = () => {
    const base = [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ];
    if (isProd) {
        base.push(new BundleAnalyzerPlugin())
    }
    return base; 
}

module.exports = {
    entry: './js/main.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: plugins (),
    module: {
        rules: [{
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.wav$/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        port: 9000
    }
}