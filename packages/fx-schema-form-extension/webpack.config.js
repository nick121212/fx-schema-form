const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devServer = require("./webpack/devserver"); // 用于快速开发应用程序
const env = process.env.NODE_ENV || "dev";

const __DEV__ = env.toUpperCase() == "DEV" || env.toUpperCase() == "DEVELOPMENT";
const __PROD__ = env.toUpperCase() == "PRODUCTION";

module.exports = {
    entry: {
        index: "./src/index.tsx",
        demo: [ "tachyons", "./src/demo/index.tsx"]
    },
    devServer: devServer,
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            loaders: ['babel-loader', 'ts-loader'],
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
            root: 'SFC',
            amd: 'fx-schema-form-core',
            commonjs2: 'fx-schema-form-core',
            commonjs: 'fx-schema-form-core'
        },
        "fx-schema-form-react": {
            root: 'SFR',
            amd: 'fx-schema-form-react',
            commonjs2: 'fx-schema-form-react',
            commonjs: 'fx-schema-form-react'
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
        "prop-types": {
            root: 'prop-types',
            amd: 'prop-typese',
            commonjs2: 'prop-types',
            commonjs: 'prop-types'
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
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(env),
            },
            "__DEV__": JSON.stringify(__DEV__),
            "__PROD__": JSON.stringify(__PROD__)
        }),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ] : [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(env),
            },
            "__DEV__": JSON.stringify(__DEV__),
            "__PROD__": JSON.stringify(__PROD__)
        }),
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ],
    output: __PROD__ ? {
        path: path.resolve('./dist'),
        filename: 'index.js',
        // chunkFilename: "[name].min.js",
        libraryTarget: "umd",
        strictModuleExceptionHandling: true,
        sourceMapFilename: "index.map",
        library: "SFRT",
        // umdNamedDefine: true,
        // libraryExport: "default"
    } : {
        path: path.resolve('./dist'),
        filename: '[name].js',
    }
};