export default {
    type: "object",
    $id: "dnd-echart-itemstyle",
    default: {},
    properties: {
        color: {
            type: "string",
            default: "#ccc",
            title: "颜色"
        },
        lineStyle: {
            $ref: "dnd-echart-linestyle#"
        },
        areaStyle: {
            $ref: "dnd-echart-areastyle#"
        },
        borderColor: {
            type: "string",
            title: "边框颜色"
        }
    }
};
