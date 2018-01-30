export default {
    type: "object",
    $id: "dnd-col",
    properties: {
        className: {
            $ref: "dnd-common#/properties/className"
        },
        style: {
            type: "object",
            $ref: "dnd-common#/properties/style"
        },
        small: {
            type: "object",
            title: "小屏",
            description: "小屏320px - 479px)",
            properties: {
                span: { type: "number", default: 1, title: "格子数" },
                pull: { type: "number", default: 1, title: "右边空格数" },
                push: { type: "number", default: 1, title: "左边空格数" }
            }
        },
        medium: {
            $ref: "dnd-col#/properties/small",
            type: "object",
            title: "中等屏",
            description: "中等屏(480px - 639px)"
        },
        large: {
            $ref: "dnd-col#/properties/small",
            type: "object",
            title: "大屏",
            description: "大屏(640px - 1023px)"
        },
        eLarge: {
            $ref: "dnd-col#/properties/small",
            type: "object",
            title: "超大屏",
            description: "超大屏(1024px - 1365px)"
        },
        eeLarge: {
            $ref: "dnd-col#/properties/small",
            type: "object",
            title: "特大屏",
            description: "特大屏(1366px - 1919px)"
        },
        eeeLarge: {
            $ref: "dnd-col#/properties/small",
            type: "object",
            title: "特特大幕",
            description: "特特大幕(1920px and up)"
        },
    }
};
