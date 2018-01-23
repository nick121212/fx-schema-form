const devServer = require("./webpack/devserver"); // 用于快速开发应用程序
const path = require("path");
const webpack = require("webpack");
const distPath = "/dist/";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const env = process.env.NODE_ENV || "dev";

const __DEV__ = env.toUpperCase() == "DEV" || env.toUpperCase() == "DEVELOPMENT";
const __TEST__ = env.toUpperCase() == "UAT";
const __PROD__ = env.toUpperCase() == "PRODUCTION";
const __STAG__ = env.toUpperCase() == "STG";

module.exports = (webpackConfig) => {
    let retVal = Object.assign({}, webpackConfig, {
        // 起点或是应用程序的起点入口。从这个起点开始，应用程序启动执行。如果传递一个数组，那么数组的每一项都会执行。
        entry: {
            index: __DEV__ ? ['./src/demo/index.ts'] : ['./src/index.ts']
        },
        //防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖(external dependencies)。
        //例如，React 和 react-dom不打包到bundle中
        externals: __DEV__ ? {} : {
            "ajv": "ajv"
        },
        devServer: devServer
    });

    // retVal.babel.plugins.push("transform-runtime");

    // 环境
    //通过DefinePlugin可以定义一些全局的变量，我们可以在模块当中直接使用这些变量，无需作任何声明，看一个简单的webpack配置
    retVal.plugins.push(new webpack.DefinePlugin({
        __DEV__: JSON.stringify(!process.env.NODE_ENV || process.env.NODE_ENV === "dev"),
        __TEST__: JSON.stringify(process.env.NODE_ENV === "uat1"),
        __PROD__: JSON.stringify(process.env.NODE_ENV === "production"),
        __STAG__: JSON.stringify(process.env.NODE_ENV === "stg"),
    }));

    // 处理html的loader，不然htmlwebpackplugin会有问题
    retVal.module.loaders = webpackConfig.module.loaders.map((loader) => {
        // console.log(loader)
        // if (loader.test.toString() === "/\\.html?$/") {
        //     loader.loader = "html?attrs[]=img:src&attrs[]=a:href"; //配置img的src属性和a的href属性
        // }

        if (loader.test.toString() === "/\\.ts?$/") {
            loader.loader = "babel-loader!awesome-typescript-loader"; //配置img的src属性和a的href属性
        }

        return loader;
    });

    if (__DEV__) {
        retVal.plugins.push(new HtmlWebpackPlugin({
            template: "index.html"
        }));
    }

    if (__PROD__) {
        retVal.output.publicPath = "/";
        retVal.output.filename = "[name].js";
        retVal.output.libraryTarget = "umd";
        retVal.output.library = "fxSchemaFormCore";
    }

    delete retVal.ts;

    return retVal;
};