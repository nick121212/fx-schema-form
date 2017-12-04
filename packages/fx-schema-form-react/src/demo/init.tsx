import React from "react";
import Ajv, { Thenable, ValidateFunction, SchemaValidateFunction } from "ajv";
import { Button, Popover, Popconfirm } from "antd";

import { SchemaForm, createForms, hocFactory, defaultTheme, SchemaFormReducer } from "../index";
import { schema } from "./schema/normal";
import normal from "./schema/normal1";
import flow from "./schema/flow";
import array from "./schema/array";

import { AntdInputNumberWidget } from "./widget/number";
import { ConditionHoc } from "./hoc/condition";
import { GeoPositionField } from "./field/geo";
import { GridColField } from "./field/grid";


import templates from "../templates";
import templates1 from "./templates";
import widgets from "../widgets";

// let schemaFormReducer = new SchemaFormReducer({}, () => {

// });



defaultTheme.widgetFactory.add("number", AntdInputNumberWidget);
defaultTheme.widgetFactory.add("integer", AntdInputNumberWidget);
defaultTheme.fieldFactory.add("geo", GeoPositionField);
defaultTheme.fieldFactory.add("gridcol", GridColField);


for (let key in widgets) {
    if (widgets.hasOwnProperty(key)) {
        let widget = widgets[key];
        defaultTheme.widgetFactory.add(key, widget);
    }
}
for (let key in templates) {
    if (templates.hasOwnProperty(key)) {
        let template = templates[key];
        defaultTheme.tempFactory.add(key, template);
    }
}

for (let key in templates1) {
    if (templates1.hasOwnProperty(key)) {
        let template = templates1[key];
        defaultTheme.tempFactory.add(key, template);
    }
}


const curAjv = new Ajv({
    allErrors: true,
    removeAdditional: false,
    jsonPointers: true,
    extendRefs: true,
    inlineRefs: true,
    format: "full",
    multipleOfPrecision: 12,
    transpile: "nodent",
    loopRequired: Infinity,
    sourceCode: true,
    coerceTypes: true,
    missingRefs: true,
    // inlineRefs: false,
    // v5: true,
    async: "es7",
    useDefaults: true,
    $data: true,
    errorDataPath: "property",
    loadSchema: (uri: string) => {
        console.log(uri);
        return fetch(uri).then((res: Response) => {
            return res.text();
        }) as Ajv.Thenable<any>;
    }
});

const schemaFormOptions = {
    ajv: curAjv,
    maxDepth: 10
};

export class ItemButtons extends React.PureComponent<any, any> {
    public render() {
        const { isShow = true } = this.props.meta || {};

        return (
            <div>
                <Button style={{ marginRight: 5 }} type="primary" shape="circle" icon="plus" ghost={true}
                    onClick={() => { this.props.addItem(); }}></Button>
                <Button type={!isShow ? "dashed" : "primary"}
                    shape="circle" icon={isShow ? "shrink" : "arrows-alt"}
                    onClick={() => { this.props.toggleItem(); }}></Button>
            </div>
        );
    }
}

export class ItemChildButtons extends React.PureComponent<any, any> {
    public render() {
        const { arrayIndex, removeItem, switchItem } = this.props;
        const { isShow = true } = this.props.meta || {};

        return (
            <Popover placement="topLeft" title={null} content={(
                <div>
                    <Popconfirm
                        style={{ marginRight: 5 }}
                        title="Are you sure？"
                        onConfirm={() => {
                            removeItem(arrayIndex);
                        }}
                        okText="Yes"
                        cancelText="No">
                        <Button ghost={true} type="danger" shape="circle" icon="delete"></Button>
                    </Popconfirm>
                    <Button style={{ marginRight: 5 }} ghost={false} type="dashed" shape="circle" icon="packup"
                        onClick={() => { switchItem(arrayIndex, arrayIndex - 1); }}></Button>
                    <Button ghost={false} type="dashed" shape="circle" icon="unfold"
                        onClick={() => { switchItem(arrayIndex, arrayIndex + 1); }}></Button>
                </div>
            )} trigger="hover">
                <Button icon="switch" shape="circle"></Button>
            </Popover>
        );
    }
}

const globalOptions = {
    "ui:temp": ["formItem"],
    "hoc": {
        "array": {
            ItemChildButtons: ItemChildButtons,
            ItemButtons: ItemButtons
        }
    },
    "formItem": {
        "hasFeedback": true,
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    },
    "row": {
        "type": "flex"
    },
    "col": {
        "xs": { "span": 24, "offset": 0 },
        "sm": { "span": 20, "offset": 2 },
    },
    "card": {
        "noHovering": true,
        "bordered": false
    },
    "object": {
        "ui:temp": ["card"]
    },
    "array": {
        "ui:temp": ["row", "col", "card"]
    },
    "string": {
        "ui:temp": ["formItem"]
    },
    "boolean": {
        "widget": "switch",
        "ui:temp": ["formItem"]
    }
};
curAjv.addSchema(array);
curAjv.addSchema(schema);
curAjv.addSchema(normal);
curAjv.addSchema(flow);
curAjv.addKeyword("idExists", {
    async: true,
    type: "string",
    validate: ((sch: any, data) => {
        return new Promise<any>((resolve, reject) => {
            if (!data) {
                return resolve(true);
            }
            setTimeout(() => {
                resolve(data === "nick");
            }, 200);
        });
    }) as SchemaValidateFunction
});

// let defaultSchema = {
//     "$async": true,
//     type: "object",
//     required: [],
//     properties: {
//         array1: {
//             $ref: "test#/properties/array1"
//         }
//     }
// };

// window.addEventListener("unhandledrejection", event => {
//     console.log(event);
// });

// curAjv.compileAsync(schema, true, async (err, validate) => {
//     try {
//         // console.log(validate.source.code);
//         await validate({
//             name: "dlkjkxfa",
//             array1: [{
//                 test: "nick",
//                 children: [{
//                     test: "nick3",
//                     children: [{
//                         children: [{
//                             test: "nick",
//                             children: [{}]
//                         }]
//                     }]
//                 }]
//             }]
//         }, "/", {});
//     } catch (e) {
//         console.log("dfadsfads", e);
//     }

// });


export {
    curAjv as ajv,
    schemaFormOptions,
    globalOptions
};
