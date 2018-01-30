const CopyWebpackPlugin = require("copy-webpack-plugin"); //拷贝资源插件
const devServer = require("./webpack/devserver"); // 用于快速开发应用程序
const path = require("path");
const webpack = require("webpack");
const distPath = "/dist/";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const env = process.env.NODE_ENV || "dev";

const __DEV__ = env.toUpperCase() == "DEV" || env.toUpperCase() == "DEVELOPMENT";
const __PROD__ = env.toUpperCase() == "PRODUCTION";

module.exports = (webpackConfig) => {
    let retVal = Object.assign({}, webpackConfig, {
        // 起点或是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行。
        entry: {
            index: __PROD__ ? "./src/index.tsx" : "./src/demo/index.tsx"
        },
        //防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。
        //例如，React 和 react-dom不打包到bundle中

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
        devServer: devServer
    });

    // retVal.babel.plugins.push("transform-runtime");

    //通过DefinePlugin可以定义一些全局的变量，我们可以在模块当中直接使用这些变量，无需作任何声明，看一个简单的webpack配置
    retVal.plugins.push(new webpack.DefinePlugin({
        __DEV__: JSON.stringify(__DEV__),
        __PROD__: JSON.stringify(__PROD__)
    }));

    if (!__PROD__) {
        retVal.plugins.push(new HtmlWebpackPlugin({
            template: "index.html"
        }));
    }

    retVal.plugins.shift();

    // 处理html的loader，不然htmlwebpackplugin会有问题
    retVal.module.loaders = webpackConfig.module.loaders.map((loader) => {
        // console.log(loader)
        if (loader.test.toString() === "/\\.html?$/") {
            loader.loader = "html?attrs[]=img:src&attrs[]=a:href"; //配置img的src属性和a的href属性
        }

        if (loader.test.toString() === "/\\.tsx?$/") {
            loader.loader = "babel-loader!awesome-typescript-loader"; //配置img的src属性和a的href属性
        }

        return loader;
    });

    retVal.module.loaders = [{
        test: /\.module\.scss$/,
        loader: "style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader"
    }, {
        test: /\.scss$/,
        loader: "style-loader!css-loader"
    }].concat(retVal.module.loaders).concat([{
            test: /\.svg(\?(.*?))?$/,
            loader: "file-loader?mimetype=image/svg+xml"
        },
        {
            test: /\.woff(\?(.*?))?$/,
            loader: "file-loader?mimetype=application/font-woff"
        },
        {
            test: /\.woff2(\?(.*?))?$/,
            loader: "file-loader?mimetype=application/font-woff"
        },
        {
            test: /\.ttf(\?(.*?))?$/,
            loader: "file-loader?mimetype=application/octet-stream"
        },
        {
            test: /\.eot(\?(.*?))?$/,
            loader: "file-loader"
        }
    ]);

    // retVal.output.publicPath = "/";
    retVal.output.target = "es5";

    if (__PROD__) {
        retVal.output = {
            path: path.resolve('./dist'),
            filename: '[name].js',
            publicPath: '/',
            chunkFilename: "[name].min.js",
            libraryTarget: "umd",
            sourceMapFilename: "[file].map",
            library: "fx-schema-form-react",
            umdNamedDefine: true
        };
    }

    console.log(retVal.resolve);

    retVal.resolve.alias = {
        FxSchemaForm: path.resolve('./dist') + '/index.js', //后续直接 require('AppStore') 即可
    };

    delete retVal.ts;

    return retVal;
};