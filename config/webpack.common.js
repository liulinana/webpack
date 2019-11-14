const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        app:'./src/index.js',
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: 'static/js/[name].bundle.js',
        publicPath: '/'
    },
    optimization: {
        splitChunks:{
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.(c|le)ss$/,
                    chunks: 'all',
                    enforce: true
                },
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            },

        },
        runtimeChunk: 'single',
        minimizer: [
            new TerserJSPlugin({}),
        ]
    },
    plugins: [

        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[hash].css",
            chunkFilename: "static/css/[id].[hash].css"
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.LimitChunkCountPlugin({
            maxChunks: 5, // 必须大于或等于 1
            minChunkSize: 1000
        }),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 10000 // Minimum number of characters
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, '../src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }]
            },
            {
                test: /\.(c|le)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
};
