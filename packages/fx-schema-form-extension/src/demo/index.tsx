import React from "react";
import ReactDOM from "react-dom";
import Perf from "react-addons-perf";
import ReactPerfTool from "react-perf-tool";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import schemaFormReact from "fx-schema-form-react";
import Immutable from "immutable";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";

import "antd/dist/antd.css";
import "react-perf-tool/lib/styles.css";
import "../";
import { RouterComponent } from "./router";

const { SchemaForm, hocFactory, schemaFormDec } = schemaFormReact;

// 将schemaForm加入到store
let store = createStore<any>(combineReducers({
    "schemaForm": schemaFormReact.reducerFactory.get("schemaForm").reducer as any
}), Immutable.fromJS({}));
// 初始化reducer
schemaFormReact.reducerFactory.get("schemaForm").init(store);

// store.subscribe(() => {
//     console.log(store.getState().toJS());
// });

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router>
                <RouterComponent key={"rootRouter"} />
            </Router>
            <ReactPerfTool perf={Perf} />
        </div>
    </Provider>,
    document.getElementById("root"),
    () => {
        console.log("form ok!");
    });

