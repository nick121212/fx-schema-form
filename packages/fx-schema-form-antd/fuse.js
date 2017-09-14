const {
    FuseBox,
    TypeScriptHelpers,
    SassPlugin,
    CSSPlugin,
    BabelPlugin,
    WebIndexPlugin,
    JSONPlugin,
    Sparky,
    QuantumPlugin,
} = require("fuse-box");

const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
// load
// const TypeHelper = require('fuse-box-typechecker').TypeHelper;
// Async check (worker)
// const testAsync = TypeHelper({
//     tsConfig: './tsconfig.json',
//     basePath:'./src',
//     name: 'Test async'
// });
// const { runCLI } = require("jest");

let fuse, app, vendor, isProduction;

Sparky.task("config", () => {
    fuse = FuseBox.init({
        homeDir: "src",
        output: "out/$name.js",
        tsConfig: "tsconfig.json",
        useJsNext: ["react", "react-dom"],
        polyfillNonStandardDefaultUsage: ["react", "react-dom"],
        sourceMaps: !isProduction,
        cache: false,
        plugins: [
            JSONPlugin(),
            [SassPlugin(), CSSPlugin()],
            TypeScriptHelpers(),

            BabelPlugin({
                config: {
                    sourceMaps: true,
                    presets: ["es2015"],
                    plugins: [
                        ["transform-react-jsx"],
                        "transform-runtime", ["import", {
                            "libraryName": "antd",
                            "style": "css"
                        }]
                    ],
                }
            }),
            WebIndexPlugin({
                template: "test.html",
                title: "FX-SCHEMA-FORM-ANTD DEMO",
                target: "index.html"
            }),
            isProduction && QuantumPlugin({
                bakeApiIntoBundle: 'vendor',
                treeshake: true,
                uglify: true,
            })
        ]
    });

    vendor = fuse.bundle("vendor").instructions("~/demo.tsx");
    app = fuse.bundle("app").instructions(" > [demo.tsx]");
});

Sparky.task("check-updates", () => {
    updateNotifier({ pkg }).notify();
});

Sparky.task("default", ["clean", "config", "check-updates"], () => {
    fuse.dev({
        root: "out"
    });
    // add dev instructions
    app.watch().hmr();
    return fuse.run();
});

Sparky.task("clean", () => Sparky.src("out/").clean("out/"));

Sparky.task("prod-env", ["clean"], () => {
    isProduction = true
});

Sparky.task("dist", ["prod-env", "config"], () => {
    // comment out to prevent dev server from running (left for the demo)
    fuse.dev();
    return fuse.run();
});
