"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var redux_1 = require("redux");
var redux_immutable_1 = require("redux-immutable");
var immutable = require("immutable");
var react_perf_tool_1 = require("react-perf-tool");
var react_addons_perf_1 = require("react-addons-perf");
// Import styles if they don"t get loaded already
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
require("./index.less");
require("react-perf-tool/lib/styles.css");
var array_1 = require("./array");
var normal_1 = require("./normal");
var object_1 = require("./object");
var custom_hoc_1 = require("./custom.hoc");
var antd_1 = require("antd");
var store = redux_1.createStore(redux_immutable_1.combineReducers({
    "arraySetting": array_1.settings.reducer,
    "array": array_1.reducer.reducer,
    "normal": normal_1.reducer.reducer,
    "object": object_1.reducer.reducer,
    "custom.hoc": custom_hoc_1.reducer.reducer
}), immutable.Map());
store.subscribe(function () {
    console.log(store.getState().toJS().object);
});
react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
    react_1.default.createElement(react_router_dom_1.HashRouter, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("div", { style: { display: "none" } },
                react_1.default.createElement(react_perf_tool_1.default, { perf: react_addons_perf_1.default })),
            react_1.default.createElement(antd_1.Menu, { mode: "horizontal", theme: "dark" },
                react_1.default.createElement(antd_1.Menu.Item, { key: "home" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                        react_1.default.createElement(antd_1.Icon, { type: "mail" }),
                        "\u4E3B\u9875")),
                react_1.default.createElement(antd_1.Menu.Item, { key: "array" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/array" },
                        react_1.default.createElement(antd_1.Icon, { type: "mail" }),
                        "\u65E0\u9650\u6781\u6570\u7EC4")),
                react_1.default.createElement(antd_1.Menu.Item, { key: "object" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/object" },
                        react_1.default.createElement(antd_1.Icon, { type: "mail" }),
                        "\u5BF9\u8C61\u7C7B\u578B")),
                react_1.default.createElement(antd_1.Menu.Item, { key: "custom.hoc" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/custom.hoc" },
                        react_1.default.createElement(antd_1.Icon, { type: "mail" }),
                        "\u81EA\u5B9A\u4E49HOC"))),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: normal_1.NormalSchemaFormComponent }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/array", component: array_1.ArraySchemaFormComponent }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/object", component: object_1.ObjectSchemaFormComponent }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/custom.hoc", component: custom_hoc_1.CustomHocSchemaFormComponent })))), document.getElementById("root"), console.log);
//# sourceMappingURL=index.js.map