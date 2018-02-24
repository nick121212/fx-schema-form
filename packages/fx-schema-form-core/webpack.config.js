const path = require('path');
const webpack = require("webpack");
const devServer = require("./webpack/devserver"); // 用于快速开发应用程序
const {
    CheckerPlugin
} = require('awesome-typescript-loader');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const env = process.env.NODE_ENV || "none";

const __DEV__ = env.toUpperCase() == "DEV" || env.toUpperCase() == "DEVELOPMENT";
const __PROD__ = env.toUpperCase() == "PRODUCTION";

module.exports = {
    entry: path.resolve("./src/index.ts"),
    devServer: devServer,
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.ts?$/,
            loaders: ['babel-loader', 'ts-loader']
        }]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify(env),
        },
        "__DEV__": JSON.stringify(__DEV__),
        "__PROD__": JSON.stringify(__PROD__)
    })].concat(!__PROD__ ? [

    ] : [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ]),
    output: __PROD__ || __DEV__ ? {
        path: path.resolve('./dist'),
        filename: __PROD__ ? 'index.prd.js' : 'index.dev.js',
        // chunkFilename: "[name].min.js",
        libraryTarget: "umd",
        strictModuleExceptionHandling: true,
        sourceMapFilename: __PROD__ ? 'index.prd.js.map' : 'index.dev.js.map',
        library: "SFC",
        // umdNamedDefine: true,
        // libraryExport: "default"
    } : {
        path: path.resolve('./dist'),
        filename: '[name].js',
    }
};