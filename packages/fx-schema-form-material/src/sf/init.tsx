import ajv from "ajv";
import { ResolveLib } from "fx-schema-form-core";
import schemaFormReact from "fx-schema-form-react";

import temps from "./templates";
import widgets from "./widgets";

export { globalOptions } from "./options/default";

const { defaultTheme } = schemaFormReact;
const { tempFactory, widgetFactory, fieldFactory } = defaultTheme;

temps.forEach((temp: any) => {
    for (const key in temp) {
        if (temp.hasOwnProperty(key)) {
            tempFactory.add(key, temp[key]);
        }
    }
});

widgets.forEach((widget: any) => {
    for (const key in widget) {
        if (widget.hasOwnProperty(key)) {
            widgetFactory.add(key, widget[key]);
        }
    }
});

export const curAjv: ajv.Ajv = new ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    format: "full",
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
});

const schema = {
    type: "object",
    $id: "dnd-style",
    required: ["textAlign", "width", "height"],
    properties: {
        width: { type: "string", title: "宽度", description: "高度可以是多行" },
        height: { type: "string", title: "高度", description: "高度可以是多行" },
        fontSize: { type: "number", title: "字号" },
        url: { type: "string", format: "url" },
        email: { type: "string", format: "email" },
        textAlign: {
            type: "string",
            enum: ["left", "right", "center"],
            description: "Note: 只能是left，right，center中的一个。"
        },
        aaa: {
            type: "array",
            title: "测试checkbox group",
            items: {
                title: "测试Object",
                type: "object",
                properties: {
                    a: { type: "string" },
                    b: { type: "number" },
                    c: { type: "boolean" }
                }
            }
        },
        ids: {
            type: "array",
            title: "测试数组",
            maxItems: 4,
            minItems: 3,
            description: "拖动元素试试",
            items: {
                title: "测试ID",
                type: "string",
                format: "uuid"
            }
        },
        checked: { type: "boolean", title: "是否同意协议" },
    }
};


let designResolve = [
    new ResolveLib(curAjv, schema as any),
    // new ResolveLib(curAjv, div as any),
    // new ResolveLib(curAjv, checkbox as any),
    // new ResolveLib(curAjv, style as any),
    // new ResolveLib(curAjv, oneof as any),
    // new ResolveLib(curAjv, tree as any),
];
