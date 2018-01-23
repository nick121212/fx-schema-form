
export default {
    type: "object",
    $id: "dnd-echart-legend",
    title: "图例参数设置",
    default: {},
    properties: {
        show: { type: "boolean", default: true, title: "是否显示标题组件" },
        zlevel: { type: "number", default: 0, title: "所有图形的 zlevel 值" },
        z: { type: "number", default: 6, title: "组件的所有图形的z值", description: "二级层叠控制，同一个canvas（相同zlevel）上z越高约靠顶层。" },
        orient: { type: "string", title: "布局方式", enum: ["horizontal", "vertical"] },
        x: {
            type: "string", default: "left", title: "水平安放位置",
            description: "默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）"
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
        itemWidth: { type: "number", default: 20, title: "图例图形宽度" },
        itemHeight: { type: "number", default: 14, title: "图例图形高度" },
        textStyle: {
            type: "object",
            $ref: "dnd-echart-textstyle#"
        },
        data: {
            type: "array",
            items: {
                type: "string"
            }
        },
        dataDeg: {
            type: "string",
            title: "标注数据",
            description: "这里支持动态数据，输入$来选择数据源"
        }
    }
};
