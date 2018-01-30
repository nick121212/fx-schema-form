const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const devServer = require("./webpack/devserver"); // 用于快速开发应用程序

const env = process.env.NODE_ENV || "dev";

const __DEV__ = env.toUpperCase() == "DEV" || env.toUpperCase() == "DEVELOPMENT";
const __PROD__ = env.toUpperCase() == "PRODUCTION";

module.exports = {
    entry: __PROD__ ? "./src/index.tsx" : "./src/demo/index.tsx",
    devServer: devServer,
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'babel-loader!awesome-typescript-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
    // dev-sourceMap
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
            root: 'fx-schema-form-core',
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
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        chunkFilename: "[name].min.js",
        libraryTarget: "umd",
        sourceMapFilename: "[file].map",
        library: "fx-schema-form-react",
        umdNamedDefine: true,
        // libraryExport: "default"
    }
};