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

import { reducerFactory, SchemaFormActions, SchemaForm } from "../index";

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

ReactDOM.render(
    <Provider store={store}>
        <div>
            <SchemaForm schemaId="design" uiSchema={["name"]} parentKeys={[]} globalOptions={null} formKey="testForm" ajv={curAjv} />
            <ReactPerfTool perf={Perf} />
        </div>
    </Provider>,
    document.getElementById("root"),
    () => {
        console.log("form has been ok!");
    });

