const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const devServer = require("./webpack/devserver");
const CopyPlugin = require("copy-webpack-plugin");
const env = process.env.NODE_ENV || "dev";
const {
    CheckerPlugin
} = require("awesome-typescript-loader");

const __DEV__ = env.toUpperCase() == "DEV" || env.toUpperCase() == "DEVELOPMENT";
const __PROD__ = env.toUpperCase() == "PRODUCTION";

module.exports = {
    entry: ["./src/index.tsx", "tachyons"],
    devServer: devServer,
    devtool: 'inline-source-map',
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
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.scss/,
            use: [{
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
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
        new CopyPlugin([{
            from: 'src/sf/schemas',
            to: 'schemas'
        }]),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            template: "index.html"
        })
    ] : [
        new UglifyJsPlugin({
            sourceMap: true
        })
    ],
    output: __PROD__ ? {
        path: path.resolve('./dist'),
        filename: 'index.js',
        // chunkFilename: "[name].min.js",
        libraryTarget: "umd",
        // strictModuleExceptionHandling: true,
        sourceMapFilename: "index.map",
        library: "SchemaFormReactExtendsion",
        // umdNamedDefine: true,
        // libraryExport: "default"
    } : {
        path: path.resolve('./dist'),
        filename: '[name].js',
    }
};