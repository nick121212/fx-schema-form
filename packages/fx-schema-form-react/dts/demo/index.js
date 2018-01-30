import React from "react";
import ReactDOM from "react-dom";
import Perf from "react-addons-perf";
import ReactPerfTool from "react-perf-tool";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import { ResolveLib } from "fx-schema-form-core";
import Immutable from "immutable";
import { Provider } from "react-redux";
import { Form } from "antd";
import { design } from "./schemas";
import "antd/dist/antd.css";
import "react-perf-tool/lib/styles.css";
import { reducerFactory, SchemaForm } from "../index";
import { gloabelOptions, curAjv } from "./init";
let designResolve = new ResolveLib(curAjv, design);
let actions = reducerFactory.get("schemaForm").actions;
let store = createStore(combineReducers({
    "schemaForm": reducerFactory.get("schemaForm").reducer
}), Immutable.fromJS({}));
for (const key in actions) {
    if (actions.hasOwnProperty(key)) {
        const element = actions[key];
        element.assignTo(store);
    }
}
let dsModelIds = [];
for (let i = 15; i > 0; i--) {
    dsModelIds.unshift({
        name: "nick" + i,
        password: "password" + i + i
    });
}
let start = performance.now();
actions.createForm({
    key: "designForm",
    data: {
        name: "test",
        dsModelIds: dsModelIds
    }
});
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement("div", null,
        React.createElement(SchemaForm, { RootComponent: Form, schemaId: "design", uiSchema: ["name", {
                    key: "dsModelIds",
                    title: "测试title"
                }], parentKeys: ["designForm"], globalOptions: gloabelOptions, ajv: curAjv }),
        React.createElement(ReactPerfTool, { perf: Perf }))), document.getElementById("root"), () => {
    console.log("首次渲染form所用时间：", performance.now() - start);
});
//# sourceMappingURL=index.js.map