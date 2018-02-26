export default {
    type: "object",
    $id: "dnd-oneof",
    title: "oneof测试schema",
    default: {},
    required: ["value"],
    properties: {
        type: {
            type: "number",
            enum: [1, 2, 3, 4],
            title: "类型选择",
            description: "1:数字,2:字符串,3:bool,4:object"
        },
        value: {
            oneOf: [{
                $id: "dnd-oneof-number",
                type: "number",
                title: "这是一个数字类型"
            }, {
                $id: "dnd-oneof-string1",
                type: "string",
                title: "这是一个字符串类型"
            }, {
                $id: "dnd-oneof-boolean",
                type: "boolean",
                title: "这是一个bool类型"
            }, {
                $id: "dnd-oneof-object",
                type: "object",
                title: "这是一个object类型",
                default: {},
                required: ["a", "b"],
                properties: {
                    a: { type: "string", default: "nick" },
                    b: { type: "boolean", default: true }
                }
            }]
        }
    }
};
