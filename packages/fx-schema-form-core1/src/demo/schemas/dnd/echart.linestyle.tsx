export default {
    type: "object",
    $id: "dnd-echart-linestyle",
    default:{},
    properties: {
        color: { type: "string", default: "#ccc", title: "颜色" },
        type: {
            type: "string",
            default: "solid",
            enum: ["solid", "dotted", "dashed", "curve", "broken"],
            title: "线条样式，可选为：'solid' | 'dotted' | 'dashed'， 树图还可以选：'curve' | 'broken'"
        },
        width: {
            type: "number",
            title: "线宽"
        },
        shadowColor: { type: "string", default: "#ccc", title: "颜色" },
        shadowBlur: {
            type: "number",
            default: 5,
            title: "折线主线(IE8+)有效，阴影模糊度，大于0有效"
        },
        shadowOffsetX: {
            type: "number",
            default: 3,
            title: "折线主线(IE8+)有效，阴影横向偏移，正值往右，负值往左"
        },
        shadowOffsetY: {
            type: "number",
            default: 3,
            title: "折线主线(IE8+)有效，阴影纵向偏移，正值往下，负值往上"
        },
    }
};
