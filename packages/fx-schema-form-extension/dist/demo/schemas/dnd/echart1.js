export default {
    $id: "dnd-echart1",
    type: "object",
    properties: {
        className: { type: "string" },
        notMerge: {
            type: "boolean"
        },
        lazyUpdate: {
            type: "boolean"
        },
        theme: { type: "string" },
        option: {
            type: "object",
            $ref: "dnd-echart#"
        }
    }
};
//# sourceMappingURL=echart1.js.map