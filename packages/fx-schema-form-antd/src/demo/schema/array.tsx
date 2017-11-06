export default {
    $async: true,
    id: "array",
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
        children: {
            type: "array",
            items: {
                $ref: "array"
            }
        }
    }
};
