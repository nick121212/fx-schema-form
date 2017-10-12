export const schema = {
    "$async": true,
    type: "object",
    title: "测试SCHEMA",
    required: [],
    properties: {
        name: { type: "string", "title": "昵称", "default": "nora", description: "昵称，必填" },
        number: { type: "number", "title": "测试number类型" },
        integer: { type: "integer", "title": "测试integer类型" },
        boolean: { type: "boolean", "title": "测试boolean类型", default: true },
        array: { type: "array", items: { type: "string", "title": "测试array类型ITEM", minLength: 3 }, "title": "测试array类型" },
        object: {
            type: "object",
            title: "测试对象的生成",
            default: {},
            properties: {
                settings: {
                    type: "boolean",
                    title: "测试boolean类型",
                    default: true
                }
            }
        },
        array1: {
            "$async": true,
            type: "array",
            title: "测试无限极数组类型",
            items: {
                "$async": true,
                type: "object",
                required: ["test"],
                properties: {
                    test: {
                        type: "string", title: "无限极测试数据", minLength: 3,
                        idExists: { "table": "posts" },
                    },
                    children: { $ref: "test#/properties/array1" }
                }
            }
        },
        null: { type: "null", "title": "测试null类型" },
        muti: { type: ["string", "integer", "number"], "title": "测试多类型" },
        geo: {
            type: "object",
            title: "geo position",
            required: ["lou", "lat"],
            properties: {
                lou: {
                    type: "number",
                    minimum: 0,
                    maximum: 100,
                    title: "纬度"
                },
                lat: {
                    type: "number",
                    title: "经度"
                }
            }
        },
    }
};
