const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src/assets/images'),
                to: path.resolve(__dirname, 'dist', 'assets/images')
            }]
        })

    ],
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(scss)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']

            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.(?:mp3|wma|ogg|aac)$/i,
                type: 'asset/resource',
                loader: 'file-loader'
            },
            {
                test: /\.(?:mp4|avi|flv|wmv|mov)$/i,
                type: 'asset/resource',
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        port: 8080,
        static: './dist',
        hot: true
    }
}