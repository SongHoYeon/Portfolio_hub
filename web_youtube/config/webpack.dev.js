const paths = require('./paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin'); // 설치한 모듈을 가져온다.

module.exports = merge(common, {
    // Set the mode to development or production
    mode: 'development',

    // Control how source maps are generated
    devtool: 'inline-source-map',

    // Spin up a server for quick development
    devServer: {
        historyApiFallback: true,
        contentBase: paths.build,
        open: false,
        compress: true,
        hot: true,
        // port: 8080,
    },

    plugins: [
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080/'
    })
    ],
})
