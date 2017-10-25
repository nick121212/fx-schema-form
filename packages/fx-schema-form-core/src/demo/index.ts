import { schemaMerge } from "../index";

const schema = {
    type: "object",
    title: "测试SCHEMA",
    required: ["array1", "array", "name"],
    removeAdditional: true,
    properties: {
        name: { type: "string", "title": "昵称", "default": "nora", description: "昵称，必填" },
        number: { type: "number", "title": "测试number类型" },
        integer: { type: "integer", "title": "测试integer类型" },
        boolean: { type: "boolean", "title": "测试boolean类型", default: true },
        array: { type: "array", items: { type: "string", "title": "测试array类型ITEM", minLength: 3 }, "title": "测试array类型" },
        object: {
            type: "object",
            properties: {
                settings: { type: "boolean", default: true }
            }
        },
        array1: {
            type: "array",
            title: "测试无限极数组类型",
            items: {
                type: "object",
                required: ["test"],
                properties: {
                    test: { type: "string", title: "无限极测试数据", minLength: 3 },
                    children: { $ref: "test#/properties/array1" }
                }
            }
        },
        null: { type: "null", "title": "测试null类型" },
        muti: { type: ["string", "integer", "number"], "title": "测试多类型" }
    }
};

let uiSchema: any = ["array"];

uiSchema = [{
    "key": "",
    items: [{ key: "array1/-/test" }, { key: "array1/-/children" }]
}, {
    "key": "array1",
    "items": [{ key: "array1/-/test" }, { key: "array1/-/children" }]
}];

let options: any = {};
let aaa = schemaMerge.merge("test", schema, uiSchema, options);

console.log(aaa);
