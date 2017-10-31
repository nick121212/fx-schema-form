const path = require('path');
const webpack = require('webpack');
const cssnano = require('cssnano');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const env = process.env.NODE_ENV || "dev";

const __DEV__ = env.toUpperCase() == "DEV" || env.toUpperCase() == "DEVELOPMENT";
const __TEST__ = env.toUpperCase() == "UAT";
const __PROD__ = env.toUpperCase() == "PRODUCTION";
const __STAG__ = env.toUpperCase() == "STG";

module.exports = {
    entry: {
        index: __DEV__ ? ['./src/demo/index.ts'] : ['./src/index.ts']
    },
    output: {
        path: path.resolve('./out'),
        filename: '[name].js',
        publicPath: '/',
        libraryTarget: "umd",
        library: "fxSchemaFormCore"
    },
    devtool: __DEV__ ? "cheap-module-eval-source-map" : "cheap-module-eval-source-map",
    devServer: {
        // historyApiFall:"",
        hot: true,
        inline: true,
        port: 8083,
        host: "127.0.0.1",
        stats: { colors: true },
        proxy: {
            '/weixin': {
                target: 'https://qyapi.weixin.qq.com/',
                pathRewrite: { '^/weixin': '/cgi-bin/media/get' },
                changeOrigin: true
            }
        }
    },
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
            loader: 'style-loader!css-loader?modules!postcss-loader!stylus-loader',
        }, {
            test: /module\.css/,
            loader: 'style-loader!css-loader?modules!postcss-loader',
        }, {
            test: /\.css/,
            exclude: /module\.css/,
            loader: 'style-loader!css-loader!postcss-loader',
        }, {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            loader: 'babel-loader!awesome-typescript-loader',
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
            test: /content\/.*\.svg$/,
            loader: 'file-loader',
        }, {
            test: /icons\/.*\.svg$/,
            loader: 'raw-loader!svgo-loader?{"plugins":[{"removeStyleElement":true}]}',
        }, {
            test: /\.md/,
            loader: 'raw-loader',
        }],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                "NODE_ENV": JSON.stringify(env),
                "__DEV__": __DEV__,
                "__TEST__": __TEST__,
                "__PROD__": __PROD__,
                "__STAG__": __STAG__
            },
        }),
        __DEV__ ? new HtmlWebpackPlugin({
            // favicon: 'static/favicon.png',
            template: 'src/index.html',
        }) : new CleanWebpackPlugin(
            ['out1/**',],　 //匹配删除的文件
            {
                root: __dirname,       　　　　　　　　　　//根目录
                verbose: true,        　　　　　　　　　　//开启在控制台输出信息
                dry: false        　　　　　　　　　　//启用删除文件
            }
        ),
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                unused: true,
                dead_code: true,
                warnings: false,
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    cssnano({
                        autoprefixer: {
                            add: true,
                            remove: true,
                            browsers: ['last 2 versions'],
                        },
                        discardComments: {
                            removeAll: true,
                        },
                        safe: true,
                    })
                ],
                svgo: {
                    plugins: [
                        { removeStyleElement: true },
                    ],
                },
            }
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    externals: __DEV__ ? {} : {
        "ajv": "ajv"
    }
}