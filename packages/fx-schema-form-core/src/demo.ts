import { schemaMerge } from "./index";

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
                    children: { $ref: "test#/properties/array1" }
                }
            }
        },
        null: { type: "null", "title": "测试null类型" },
        muti: { type: ["string", "integer", "number"], "title": "测试多类型" }
    }
};

const uiSchema = [{
    "key": "array1",
    "items": [{ key: "array1/-/test" }]
}];

let options: any = {};
let aaa = schemaMerge.merge("test", schema, uiSchema, options);
let bbb = schemaMerge.merge("test", aaa[0], aaa[0].uiSchema.items, Object.assign({}, options, { parentKeys: aaa[0].keys }));
bbb = schemaMerge.merge("test", aaa[0], aaa[0].uiSchema.items, Object.assign({}, options, { parentKeys: aaa[0].keys }));
bbb = schemaMerge.merge("test", aaa[0], aaa[0].uiSchema.items, Object.assign({}, options, { parentKeys: aaa[0].keys }));
bbb = schemaMerge.merge("test", aaa[0], aaa[0].uiSchema.items, Object.assign({}, options, { parentKeys: aaa[0].keys }));

console.log(bbb);
// console.log(merge("test", aaa[2], aaa[2].uiSchema.items, Object.assign({}, options, { parentKeys: aaa[2].keys })));

