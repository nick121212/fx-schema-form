import React from "react";
import ReactDOM from "react-dom";
import Perf from "react-addons-perf";
import ReactPerfTool from "react-perf-tool";
import "react-perf-tool/lib/styles.css";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import { ResolveLib } from "fx-schema-form-core";
import Immutable from "immutable";
import { Provider } from "react-redux";
import ajv from "ajv";
import { design } from "./schemas";

import { reducerFactory, SchemaFormActions, SchemaForm, hocFactory } from "../index";

const curAjv: ajv.Ajv = new ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
});

let designResolve = new ResolveLib(curAjv, design as any);


let actions: SchemaFormActions = reducerFactory.get("schemaForm").actions;

let store = createStore<any>(combineReducers({
    "schemaForm": reducerFactory.get("schemaForm").reducer
}), Immutable.fromJS({}));

store.subscribe(() => {
    console.log(store.getState().toJS());
});

actions.createForm.assignTo(store);
actions.updateItemData.assignTo(store);

let dsModelIds = [];

let start = performance.now();

// 加载10000个
//  {
//     type: "array",
//     items: {
//         type: "object",
//         properties: {
//             name: { type: "string" },
//             password: { type: "string" }
//         }
//     }
// }
for (let i = 10000; i > 0; i--) {
    dsModelIds.unshift({
        name: "nick" + i,
        password: "nick" + i + i
    });
}

actions.createForm({
    key: "designForm", data: {
        name: "test",
        dsModelIds: dsModelIds
    }
});

const gloabelOptions = Immutable.fromJS({
    field: {
        normal: {
            hocs: [hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                data: true
            })]
        },
        array: {
            hocs: [hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                data: true,
                dataLength: true
            })]
        }
    }
});

ReactDOM.render(
    <Provider store={store}>
        <div style={{
            backgroundColor: "red"
        }} onClick={() => {
            dsModelIds.push(dsModelIds.length + 1);
            actions.updateItemData({
                keys: ["designForm", "dsModelIds"],
                data: dsModelIds
            });
        }}>
            <SchemaForm schemaId="design" uiSchema={["dsModelIds"]} parentKeys={["designForm"]}
                globalOptions={gloabelOptions} ajv={curAjv} />
            <ReactPerfTool perf={Perf} />
        </div>
    </Provider>,
    document.getElementById("root"),
    () => {
        console.log("form has been ok!");

        console.log("首次渲染form所用时间：", performance.now() - start);
    });

