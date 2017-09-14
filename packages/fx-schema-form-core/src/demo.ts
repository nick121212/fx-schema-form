import { merge } from "./index";

const schema = {
    type: "object",
    title: "测试SCHEMA",
    required: ["array", "string"],
    properties: {
        string: { type: "string", "title": "测试string类型" },
        number: { type: "number", "title": "测试number类型" },
        integer: { type: "integer", "title": "测试integer类型" },
        boolean: { type: "boolean", "title": "测试boolean类型" },
        array: { type: "array", items: { type: "string" }, "title": "测试array类型" },
        object: {
            type: "object", properties: {
                settings: { type: "boolean" }
            }
        },
        array1: {
            type: "array",
            title: "测试array类型",
            items: {
                type: "object",
                properties: {
                    test: { type: "string" },
                    test1: { type: "string" },
                    children: { $ref: "#/properties/array1" }
                }
            }
        },
        null: { type: "null", "title": "测试null类型" },
        muti: { type: ["string", "integer", "number"], "title": "测试多类型" }
    }
};

const uiSchema = [
    "array1"
    // {
    //     "key": "boolean",
    //     "widget": "switch"
    // }, {
    //     "key": "object/settings"
    // }, {
    //     "key": "object",
    //     "root": ""
    // }, {
    //     "key": "string",
    //     "options": {
    //         "widget": {
    //             "input": {
    //                 onPressEnter: (e) => {
    //                     console.log(e);
    //                 }
    //             }
    //         }
    //     }
    // },
    // "*",
    // {
    //     "key": "array1",
    //     "items": ["array1/-/test", "array1/-/children"]
    // },
    // "muti",
    // {
    //     "key": "array",
    //     "widget": "array-fdjaf",
    //     "onChange": (form) => {
    //         console.log("1");
    //     },
    //     "items": [{
    //         key: "array/-",
    //         widget: "jdflajl"
    //     }]
    // }
];

let options: any = {};
let aaa = merge("test", schema, uiSchema, options);
aaa = merge("test", aaa[0], aaa[0].uiSchema.items, Object.assign({}, options, { parentKeys: aaa[0].keys }));

console.log(merge("test", aaa[2], aaa[2].uiSchema.items, Object.assign({}, options, { parentKeys: aaa[2].keys })));

