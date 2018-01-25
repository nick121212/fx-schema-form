export default {
    type: "object",
    $id: "dnd-echart-textstyle",
    default: {},
    properties: {
        color: { type: "string", default: "#333", title: "主标题文字的颜色" },
        fontStyle: { type: "string", default: "normal", title: "主标题文字字体的风格" },
        fontWeight: { type: "string", default: "normal", title: "主标题文字字体的粗细" },
        fontFamily: { type: "string", default: "sans-serif", title: "主标题文字的字体系列" },
        fontSize: { type: "number", default: 18, title: "主标题文字的字体大小" },
        align: { type: "string", title: "文字水平对齐方式，默认自动", enum: ["left", "center", "right"] },
        verticalAlign: { type: "string", title: "文字垂直对齐方式，默认自动", enum: ["top", "middle", "bottom"] },
        lineHeight: { type: "number", title: "行高" },
        width: { type: "string", title: "文字块的宽度" },
        height: { type: "string", title: "文字块的高度" },
        textBorderColor: { type: "string", default: "transparent", title: "文字本身的描边颜色" },
        textBorderWidth: { type: "number", default: 0, title: "文字本身的描边宽度" },
        textShadowColor: { type: "string", default: "transparent", title: "文字本身的阴影颜色" },
        textShadowBlur: { type: "number", title: "文字本身的阴影长度" },
        textShadowOffsetX: { type: "number", default: 0, title: "文字本身的阴影 X 偏移" },
        textShadowOffsetY: { type: "number", default: 0, title: "文字本身的阴影 Y 偏移" }
    }
};
