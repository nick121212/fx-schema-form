"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var schema = {
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
var uiSchema = ["array"];
uiSchema = [{
        "key": "array1",
        "items": [{ key: "array1/-/test" }, { key: "array1/-/children" }]
    }];
var options = {};
var aaa = index_1.schemaMerge.merge("test", schema, uiSchema, options);
console.log(aaa);
var bbb = index_1.schemaMerge.merge("test", aaa[0], aaa[0].uiSchema.items, Object.assign({}, options, { parentKeys: aaa[0].keys }));
bbb = index_1.schemaMerge.merge("test", bbb[1], bbb[1].uiSchema.items, Object.assign({}, options, { parentKeys: bbb[1].keys }));
console.log(bbb);
//# sourceMappingURL=index.js.map