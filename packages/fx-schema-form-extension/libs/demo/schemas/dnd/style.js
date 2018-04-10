export default {
    type: "object",
    $id: "dnd-style",
    required: ["textAlign", "width"],
    properties: {
        width: { type: "number", title: "宽度", default: 100 },
        height: { type: "number", equal: "width", title: "高度", description: "高必须和宽一致" },
        fontSize: { type: "number" },
        url: { type: "string", format: "url" },
        email: { type: "string", format: "email" },
        ids: {
            type: "array",
            description: "拖动元素试试",
            items: {
                title: "测试ID",
                type: "string",
                format: "uuid"
            }
        },
        textAlign: {
            type: "string",
            enum: ["left", "right", "center"],
            description: "Note: 只能是left，right，center中的一个。"
        }
    }
};
//# sourceMappingURL=style.js.map