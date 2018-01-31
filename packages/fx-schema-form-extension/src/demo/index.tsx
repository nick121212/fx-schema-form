import React from "react";
import ReactDOM from "react-dom";
// import Perf from "react-addons-perf";
// import ReactPerfTool from "react-perf-tool";
import { createStore } from "redux";
import { combineReducers } from "redux-immutable";
import { ResolveLib } from "fx-schema-form-core";
import schemaFormReact from "fx-schema-form-react";
import Immutable from "immutable";
import { Provider } from "react-redux";

import { Form, Button } from "antd";
import { design } from "./schemas";

import "antd/dist/antd.css";
// import "react-perf-tool/lib/styles.css";

import { gloabelOptions, curAjv } from "./init";
// import { reducerFactory, SchemaForm, hocFactory, schemaFormDec } from "../../dist/index";

const { SchemaForm, hocFactory, schemaFormDec } = schemaFormReact;

// 首先要解析一份schema
let designResolve = new ResolveLib(curAjv, design as any);
// 获取actions
let actions = schemaFormReact.reducerFactory.get("schemaForm").actions;
// 将schemaForm加入到store
let store = createStore<any>(combineReducers({
    "schemaForm": schemaFormReact.reducerFactory.get("schemaForm").reducer as any
}), Immutable.fromJS({}));

// actions要assign到store
for (const key in actions) {
    if (actions.hasOwnProperty(key)) {
        const element = actions[key];
        element.assignTo(store);
    }
}

// 创建一个form
actions.createForm({
    key: "designForm",
    data: {
        dsModelIds: [],
        name: "nick"
    }
});

@(schemaFormDec({
    rootReducerKey: ["schemaForm"],
    parentKeys: ["designForm"]
}) as any)
class TestForm extends React.PureComponent<any> {

    private _validateAll: () => Promise<void>;

    constructor(props: any) {
        super(props);

        this._validateAll = props.validateAll.bind(this);
    }

    public render() {
        return <SchemaForm
            key={"designForm" + "design"}
            RootComponent={Form}
            schemaId="design"
            uiSchemas={["*"]}
            uiSchema={null as any}
            parentKeys={this.props.parentKeys}
            globalOptions={gloabelOptions}
            ajv={curAjv} >
            <Button onClick={this._validateAll}>validate</Button>
        </SchemaForm>;
    }
}

ReactDOM.render(
    <Provider store={store}>
        <div>
            <TestForm ajv={curAjv} schemaId="design" />
        </div>
    </Provider>,
    document.getElementById("root"),
    () => {
        console.log("form ok!");
    });

