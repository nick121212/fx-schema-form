const path = require('path');
const webpack = require('webpack');
const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

const env = process.env.NODE_ENV || "dev";

const __DEV__ = env.toUpperCase() == "DEV" || env.toUpperCase() == "DEVELOPMENT";
const __TEST__ = env.toUpperCase() == "UAT";
const __PROD__ = env.toUpperCase() == "PRODUCTION";
const __STAG__ = env.toUpperCase() == "STG";

module.exports = {
    entry: __PROD__ ? {
        index: ['./src/index.tsx'],
        // vender: ["antd", "react", "react-dom", "recompose", "fx-schema-form-core", "reselect", "ajv", "react-redux", "reudx", "redux-act", "lodash.clonedeep", "lodash.isequal", "uuid", "json-pointer"],
    } : {
            demo: ['./src/demo/index.tsx']
        },
    // devServer: {
    //     historyApiFallback,
    //     hot: true,
    //     // inline: true,
    //     // contentBase: './out',
    //     port: 8081,
    //     host: "127.0.0.1",
    //     stats: { colors: true },
    //     proxy: {
    //         '/weixin': {
    //             target: 'https://qyapi.weixin.qq.com/',
    //             pathRewrite: { '^/weixin': '/cgi-bin/media/get' },
    //             changeOrigin: true
    //         }
    //     }
    // },
    output: {
        path: path.resolve('./out'),
        filename: '[name].js',
        publicPath: __TEST__ ? './' : '/',
        libraryTarget: "umd",
        umdNamedDefine: true,
        library: "fx-schema-form-antd",
        chunkFilename: '[id].[chunkhash].bundle.js'
    },
    devtool: !(__PROD__ || __STAG__) ? "cheap-module-eval-source-map" : "cheap-module-source-map",
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.ts(x?)$/,
            loader: 'tslint-loader',
            exclude: /node_modules/,
        }, {
            test: require.resolve("react-addons-perf"),
            loader: "expose-loader?Perf"
        }, {
            test: /module\.styl/,
            loader: 'style-loader!css-loader?modules!stylus-loader',
        }, {
            test: /module\.css/,
            loader: 'style-loader!css-loader?modules',
        }, {
            test: /\.less$/,
            use: ExtractTextPlugin.extract("css-loader!less-loader?sourceMap")
        }, {
            test: /\.css/,
            exclude: /module\.css/,
            loader: 'style-loader!css-loader?modules',
        }, {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader',
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /\.json/,
            loader: 'json-loader',
        }, {
            test: /\.(jpg|png)/,
            loader: 'file-loader',
        }, {
            test: /icons\/.*\.svg$/,
            loader: 'raw-loader!svgo-loader?{"plugins":[{"removeStyleElement":true}]}',
        }, { test: /\.md/, loader: 'raw-loader' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml' },
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff" },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff" },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream" },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" }],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                "NODE_ENV": JSON.stringify(env),
            },
            "__DEV__": JSON.stringify(__DEV__),
            "__TEST__": JSON.stringify(__TEST__),
            "__PROD__": JSON.stringify(__PROD__),
            "__STAG__": JSON.stringify(__STAG__)
        }),
        new CheckerPlugin(),
        !(__PROD__ || __STAG__) ? new HtmlWebpackPlugin({
            // favicon: 'static/favicon.png',
            template: 'test.html',
        }) : new CleanWebpackPlugin(
            ['out/**',],
            {
                root: __dirname,
                verbose: true,
                dry: false
            }
        ),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'commons',
        //     chunks: ["vender"],
        //     filename: '[name].bundle.js',
        //     minChunks: 4,
        // }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                unused: false,
                dead_code: true,
                warnings: false,
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                svgo: {
                    plugins: [
                        { removeStyleElement: true },
                    ],
                },
            }
        }),
        new ExtractTextPlugin("styles/[name].[contenthash:6].css")
    ],
    resolve: {
        extensions: ['.js', '.ts', '.less', '.tsx']
    },
    externals: !(__PROD__) ? [{}] : [{
        "react": true,
        "react-dom": true,
        "recompose": true,
        "antd": true,
        "fx-schema-form-core": true,
        "reselect": true,
        "ajv": true,
        "react-redux": true,
        "reudx": true,
        "redux-act": true,
        "lodash.clonedeep": true,
        "lodash.isequal": true,
        "uuid": true,
        "json-pointer": true
    }]
}