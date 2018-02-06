const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devServer = require("./webpack/devserver"); // 用于快速开发应用程序
const {
    CheckerPlugin
} = require('awesome-typescript-loader');

const env = process.env.NODE_ENV || "dev";

const __DEV__ = env.toUpperCase() == "DEV" || env.toUpperCase() == "DEVELOPMENT";
const __PROD__ = env.toUpperCase() == "PRODUCTION";

module.exports = {
    entry: __PROD__ ? "./src/index.tsx" : ["babel-polyfill", "tachyons", "./src/demo/index.tsx"],
    devServer: devServer,
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader',
            options: {
                "transpileOnly": false,
                "useBabel": true,
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
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    target: "web",
    externals: __PROD__ ? {
        "react": {
            root: 'React',
            amd: 'react',
            commonjs2: 'react',
            commonjs: 'react'
        },
        "react-redux": {
            root: 'react-redux',
            amd: 'react-redux',
            commonjs2: 'react-redux',
            commonjs: 'react-redux'
        },
        "redux": {
            root: 'Redux',
            amd: 'redux',
            commonjs2: 'redux',
            commonjs: 'redux'
        },
        "fx-schema-form-core": {
            root: 'SchemaFormCore',
            amd: 'fx-schema-form-core',
            commonjs2: 'fx-schema-form-core',
            commonjs: 'fx-schema-form-core'
        },
        "recompose": {
            root: 'recompose',
            amd: 'recompose',
            commonjs2: 'recompose',
            commonjs: 'recompose'
        },
        "immutable": {
            root: 'Immutable',
            amd: 'immutable',
            commonjs2: 'immutable',
            commonjs: 'immutable'
        },
        "redux-immutable": {
            root: 'redux-immutable',
            amd: 'redux-immutable',
            commonjs2: 'redux-immutable',
            commonjs: 'redux-immutable'
        },
        "redux-act": {
            root: 'redux-act',
            amd: 'redux-act',
            commonjs2: 'redux-act',
            commonjs: 'redux-act'
        },
        "reselect": {
            root: 'reselect',
            amd: 'reselect',
            commonjs2: 'reselect',
            commonjs: 'reselect'
        },
        "ajv": {
            root: 'Ajv',
            amd: 'ajv',
            commonjs2: 'ajv',
            commonjs: 'ajv'
        },
        "resolve-pathname": {
            root: 'resolve-pathname',
            amd: 'resolve-pathname',
            commonjs2: 'resolve-pathname',
            commonjs: 'resolve-pathname'
        },
    } : {},
    resolve: {
        extensions: ['.tsx', '.js']
    },
    plugins: !__PROD__ ? [
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
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
        sourceMapFilename: "index.map",
        library: "SchemaFormReactExtendsion",
        // umdNamedDefine: true,
        // libraryExport: "default"
    } : {
        path: path.resolve('./dist'),
        filename: '[name].js',
    }
};