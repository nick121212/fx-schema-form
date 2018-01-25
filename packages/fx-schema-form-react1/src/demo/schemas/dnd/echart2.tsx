export default {
    $id: "dnd-echart2",
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
            properties: {
                baseOption: {
                    type: "object",
                    $ref: "dnd-echart#"
                },
                options: {
                    type: "array",
                    items: {
                        type: "object",
                        $ref: "dnd-echart#"
                    }
                },
                optionsDeg: {
                    type: "string",
                    title: "timeline数据",
                    description: "这里支持动态数据，输入$来选择数据源"
                }
            }

        }
    }
};
