import React from "react";
import ReactDOM from "react-dom";
import Perf from "react-addons-perf";
import ReactPerfTool from "react-perf-tool";
import "react-perf-tool/lib/styles.css";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import Immutable from "immutable";
import { Provider } from "react-redux";

import { reducerFactory, SchemaFormActions } from "../index";

let actions: SchemaFormActions = reducerFactory.get("schemaForm").actions;

let store = createStore<any>(combineReducers({
    "schemaForm": reducerFactory.get("schemaForm").reducer
}), Immutable.fromJS({}));

store.subscribe(() => {
    console.log(store.getState().toJS());
});

actions.createForm.assignTo(store);

actions.createForm({ key: "test", data: Immutable.fromJS({}) });
actions.createForm({ key: "test1", data: Immutable.fromJS({}) });
actions.createForm({ key: "test1", data: Immutable.fromJS({}) });


ReactDOM.render(
    <Provider store={store}>
        <span>
            Hello World!

        <ReactPerfTool perf={Perf} />
        </span>
    </Provider>,
    document.getElementById("root"),
    () => {
        console.log("form has been ok!");
    });

