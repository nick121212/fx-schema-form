//配置api 资料 ：https://doc.webpack-china.org/configuration/dev-server/
module.exports = {
    hot: true, // 启用 webpack 的模块热替换特性：
    inline: true, //设置为true，当源文件改变时会自动刷新页面
    stats: { colors: true, progress: true }, //此选项允许你精确控制 bundle 信息展示。这可以是一个很好的中间层，如果你想要只展示某些 bundle 信息，但不是所有的信息。
    compress: false, //一切服务都启用gzip 压缩：
    quiet: true, // 启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见。当前配置的结果为显示信息
    historyApiFallback: {
        "index": "/dist/index.html",
        rewrites: [
            // shows views/landing.html as the landing page
            { from: /^\/$/, to: '/index.html' },
            // shows views/404.html on all other pages
            { from: /./, to: '/index.html' },
        ]
    }, //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html。通过传入以下启用：
    host: "0.0.0.0",
    clientLogLevel: 'info', //当使用内联模式(inline mode)时，在开发工具(DevTools)的控制台(console)将显示消息，如：在重新加载之前，在一个错误之前，或者模块热替换(Hot Module Replacement)启用时。这可能显得很繁琐。
    progress: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
};