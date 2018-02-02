const path = require('path');
const webpack = require("webpack");
const devServer = require("./webpack/devserver"); // 用于快速开发应用程序
const {
    CheckerPlugin
} = require('awesome-typescript-loader');

const env = process.env.NODE_ENV || "dev";

const __DEV__ = env.toUpperCase() == "DEV" || env.toUpperCase() == "DEVELOPMENT";
const __PROD__ = env.toUpperCase() == "PRODUCTION";

module.exports = {
    entry: __PROD__ ? path.resolve("./src/index.ts") : "./src/demo/index.ts",
    devServer: devServer,
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.ts?$/,
            loader: 'awesome-typescript-loader',
            options: {
                "transpileOnly": false,
                "useBabel": false,
                "babelOptions": {
                    "babelrc": false,
                    "presets": [
                        ["env"]
                    ]
                },
                "babelCore": "babel-core",
            },
            exclude: /node_modules/
        }, {
            test: /\.jsx?$/,
            use: [
                'babel-loader'
            ],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    resolve: {
        extensions: ['.ts']
    },
    plugins: !__PROD__ ? [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ] : [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    beautify: false
                },
                mangle: {
                    eval: true
                }
            })
        ],
    output: __PROD__ ? {
        path: path.resolve('./dist'),
        filename: 'index.js',
        // chunkFilename: "[name].min.js",
        libraryTarget: "umd",
        strictModuleExceptionHandling: true,
        // sourceMapFilename: "index.map",
        library: "SchemaFormCore",
        // umdNamedDefine: true,
        // libraryExport: "default"
    } : {
            path: path.resolve('./dist'),
            filename: '[name].js',
        }
};