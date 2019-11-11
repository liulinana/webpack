const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const UglifyJsPlugin  = require('uglifyjs-webpack-plugin');
let ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimizer: [
            // new UglifyJsPlugin({
            //     sourceMap: true,
            // })
        ],
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        // new ParallelUglifyPlugin({
        //     cacheDir: '.cache/',
        //     uglifyJS:{
        //         output: {
        //             comments: false
        //         },
        //         compress: {
        //             warnings: false
        //         }
        //     }
        // })
    ]
});
