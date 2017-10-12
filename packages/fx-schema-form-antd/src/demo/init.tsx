import React from "react";
import Ajv, { Thenable, ValidateFunction, SchemaValidateFunction } from "ajv";
import { Button } from "antd";

import { SchemaForm, createForms, hocFactory, defaultTheme } from "../index";
import { schema } from "./schema/normal";
import { AntdInputNumberWidget } from "./widget/number";
import { ConditionHoc } from "./hoc/condition";
import { GeoPositionField } from "./field/geo";

hocFactory.add("condition", ConditionHoc.bind(ConditionHoc, hocFactory));
defaultTheme.widgetFactory.add("number", AntdInputNumberWidget);
defaultTheme.widgetFactory.add("integer", AntdInputNumberWidget);

defaultTheme.fieldFactory.add("geo", GeoPositionField);
// defaultTheme.fieldFactory.add("integer", AntdInputNumberWidget);

const curAjv = new Ajv({
    allErrors: true,
    jsonPointers: true,
    // verbose: true,
    useDefaults: true,
    $data: true,
    errorDataPath: "property"
});

const schemaFormOptions = {
    ajv: curAjv
};

const globalOptions = {
    "ui:temp": ["formItem"],
    "hoc": {
        "array": {
            createItemButtons: (props: any) => {
                return (
                    <div>
                        <Button type="primary" shape="circle" icon="plus" ghost={true} onClick={() => { props.addItem(); }}></Button>
                        <Button type="primary" shape="circle" icon="shrink" ghost={true} onClick={() => { props.toggleItem(); }}></Button>
                    </div>
                );
            },
            createItemChildButtons: (props: any, idx: number, maxLength: number) => {
                return (
                    <div>
                        <Button ghost={true} type="primary" shape="circle" icon="minus"
                            onClick={() => { props.removeItem(idx); }}></Button>
                        <Button ghost={true} type="primary" shape="circle" icon="arrow-up"
                            onClick={() => { props.switchItem(idx, idx - 1); }}></Button>
                        <Button ghost={true} type="primary" shape="circle" icon="arrow-down"
                            onClick={() => { props.switchItem(idx, idx + 1); }}></Button>
                    </div>
                );
            }
        }
    },
    "formItem": {
        "hasFeedback": true,
        "labelCol": {
            "xs": { "span": 24 },
            "sm": { "span": 3 },
        },
        "wrapperCol": {
            "xs": { "span": 24 },
            "sm": { "span": 19 },
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
    "array": {
        "ui:temp": ["row", "col", "card"]
    }
};

curAjv.addSchema(schema, "test");

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
            }, 1000);
        });
    }) as SchemaValidateFunction
});

export {
    curAjv as ajv,
    schemaFormOptions,
    globalOptions
};
