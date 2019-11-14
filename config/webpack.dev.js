const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer:{
        host: 'localhost',
        open: true,
        proxy: {
            "/api": {
                "target": "http://192.168.1.120",
                "changeOrigin": true,
                "pathRewrite": {"^/api": "/api"}
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});
