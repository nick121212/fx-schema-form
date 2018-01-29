import React from "react";
import ReactDOM from "react-dom";
import Perf from "react-addons-perf";
import ReactPerfTool from "react-perf-tool";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import { ResolveLib } from "fx-schema-form-core";
import Immutable from "immutable";
import { Provider } from "react-redux";
import ajv from "ajv";

import { Form } from "antd";
import { design } from "./schemas";

import "antd/dist/antd.css";
import "react-perf-tool/lib/styles.css";

import { reducerFactory, SchemaFormActions, SchemaForm, hocFactory } from "../index";
import { gloabelOptions, curAjv } from "./init";



// 首先要解析一份schema
let designResolve = new ResolveLib(curAjv, design as any);
// 获取actions
let actions: SchemaFormActions = reducerFactory.get("schemaForm").actions;

// 将schemaForm加入到store
let store = createStore<any>(combineReducers({
    "schemaForm": reducerFactory.get("schemaForm").reducer
}), Immutable.fromJS({}));

// actions要assign到store

for (const key in actions) {
    if (actions.hasOwnProperty(key)) {
        const element = actions[key];

        element.assignTo(store);
    }
}

let dsModelIds = [];
for (let i = 0; i > 0; i--) {
    dsModelIds.unshift({
        name: "nick" + i,
        password: "password" + i + i
    });
}

let start = performance.now();

// 创建一个form
actions.createForm({
    key: "designForm",
    data: {
        name: "test",
        dsModelIds: dsModelIds
    }
});

ReactDOM.render(
    <Provider store={store}>
        <div>
            <SchemaForm
                RootComponent={Form}
                schemaId="design"
                uiSchemas={["name", {
                    key: "dsModelIds",
                    title: "测试title"
                }]}
                parentKeys={["designForm"]}
                globalOptions={gloabelOptions}
                ajv={curAjv} />
            <ReactPerfTool perf={Perf} />
        </div>
    </Provider>,
    document.getElementById("root"),
    () => {
        console.log("首次渲染form所用时间：", performance.now() - start);
    });

