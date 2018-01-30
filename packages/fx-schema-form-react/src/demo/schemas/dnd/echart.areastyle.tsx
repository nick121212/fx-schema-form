export default {
    type: "object",
    $id: "dnd-echart-areastyle",
    default: {},
    properties: {
        color: { type: "string", default: "#ccc", title: "颜色" },
        type: {
            type: "string",
            default: "default",
            title: "填充样式，目前仅支持'default'(实填充)"
        }
    }
};
