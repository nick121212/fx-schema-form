export var schema = {
    "$async": true,
    type: "object",
    title: "测试SCHEMA",
    required: ["name"],
    properties: {
        name: { type: "string", "title": "昵称", "default": "nora", description: "昵称，必填" },
        number: { type: "number", "title": "测试number类型" },
        integer: { type: "integer", "title": "测试integer类型" },
        boolean: { type: "boolean", "title": "测试boolean类型", default: true },
        object: {
            type: "object",
            title: "测试对象的生成",
            default: {},
            properties: {
                settings: {
                    type: "boolean",
                    enum: [true],
                    title: "测试boolean类型",
                    default: true
                }
            }
        },
        array: { type: "array", items: { type: "string", "title": "测试array类型ITEM", minLength: 3 }, "title": "测试array类型" },
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
                        type: "string",
                        title: "无限极测试数据",
                        description: "这个字段需要通过远程验证，输入nick试试",
                        minLength: 3,
                        idExists: { "table": "posts" },
                    },
                    children: { $ref: "test#/properties/array1" }
                }
            }
        },
        null: { type: "null", "title": "测试null类型", default: null },
        muti: {
            type: ["string", "integer", "number"], "title": "测试多类型",
            "description": "这个字段可以有【stirng，number，integer】三个类型，这里可以自定义一个组件，来处理多类型的字段(eg: 下拉选择类型，来生成不同的输入组件)"
        },
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
//# sourceMappingURL=normal.js.map