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
import { immutableRenderDecorator } from "react-immutable-render-mixin";

import { Form } from "antd";
import { design } from "./schemas";

import "antd/dist/antd.css";

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
    // console.log(store.getState().toJS());
});

actions.createForm.assignTo(store);
actions.updateItemData.assignTo(store);
actions.updateItemMeta.assignTo(store);

let dsModelIds = [];

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
for (let i = 11; i > 0; i--) {
    dsModelIds.unshift({
        name: "nick" + i,
        password: "password" + i + i
    });
}




const gloabelOptions = Immutable.fromJS({
    field: {
        default: {
            temps: ["formitem"],
            widgetHocs: [hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                data: true
            })]
        },
        array: {
            temps: ["card"],
            fieldHocs: [hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                data: true,
                dataLength: true
            })]
        },
        normal: {
        },
        object: {

        }
    },
    temp: {
        card: {
            tempHocs: [hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                meta: true
            }), immutableRenderDecorator]
        },
        formitem: {
            tempHocs: [hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                meta: true
            }), immutableRenderDecorator]
        }
    }
});

let start = performance.now();

console.log("start", Date.now());

ReactDOM.render(
    <Provider store={store}>
        <div>
            {
                dsModelIds.map((d, i) => {
                    actions.createForm({
                        key: "designForm" + i,
                        data: {
                            name: "test",
                            dsModelIds: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, null]
                        }
                    });
                    return <SchemaForm
                        key={i}
                        RootComponent={Form}
                        schemaId="design"
                        uiSchema={["name", {
                            key: "dsModelIds",
                            title: "测试title" + i
                        }]}
                        parentKeys={["designForm" + i]}
                        globalOptions={gloabelOptions}
                        ajv={curAjv} />;
                })
            }
            <ReactPerfTool perf={Perf} />
        </div>
    </Provider>,
    document.getElementById("root"),
    () => {
        console.log("form has been ok!");
        console.log("首次渲染form所用时间：", performance.now() - start);
    });

