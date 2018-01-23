
export default {
    type: "object",
    $id: "dnd-echart-toolbox",
    title: "工具箱参数设置",
    default: {},
    properties: {
        show: { type: "boolean", default: true, title: "是否显示工具箱" },
        showTitle: { type: "boolean", default: true, title: "是否显示工具箱文字提示" },
        zlevel: { type: "number", default: 0, title: "一级层叠控制" },
        z: { type: "number", default: 6, title: "组件的所有图形的z值" },
        orient: { type: "string", title: "布局方式", enum: ["horizontal", "vertical"] },
        x: {
            type: "string", default: "left", title: "水平安放位置",
            description: "默认为全图居中，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）"
        },
        y: {
            type: "string", default: "top",
            title: "垂直安放位置", description: "默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）"
        },
        backgroundColor: { type: "string", default: "transparent", title: "标题背景色", description: "默认透明。" },
        borderColor: { type: "string", default: "#ccc", title: "标题的边框颜色", description: "支持的颜色格式同 backgroundColor。" },
        borderWidth: { type: "number", default: 2, title: "标题的边框线宽" },
        padding: { type: "string", title: "标题内边距", description: "单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。" },
        itemGap: { type: "string", title: "主副标题之间的间距" },
        itemSize: { type: "number", default: 16, title: "工具箱icon大小，单位（px）" },

        color: {
            type: "array",
            title: "工具箱icon颜色序列，循环使用，同时支持在具体feature内指定color",
            items: {
                type: "string"
            }
        },
        disableColor: { type: "string", default: "#ddd", title: "禁用颜色定义" },
        effectiveColor: { type: "string", default: "red", title: "生效颜色定义" },
        textStyle: {
            type: "object",
            $ref: "dnd-echart-textstyle#"
        },
        feature: {
            type: "object",
            title: "暂未支持"
        }
    }
};
