
export default {
    type: "object",
    $id: "dnd-echart-title",
    title: "标题参数设置",
    default: {},
    properties: {
        show: { type: "boolean", default: true, title: "是否显示标题组件" },
        zlevel: { type: "number", default: 0, title: "所有图形的 zlevel 值" },
        z: { type: "number", default: 6, title: "组件的所有图形的z值", description: "二级层叠控制，同一个canvas（相同zlevel）上z越高约靠顶层。" },

        text: { type: "string", default: "", title: "主标题文本", description: "支持使用 \n 换行。" },
        link: { type: "string", default: "", title: "主标题文本超链接" },
        target: { type: "string", default: "blank", title: "指定窗口打开主标题超链接", enum: ["self", "blank"] },

        subtext: { type: "string", default: "", title: "副标题文本", description: "支持使用 \n 换行。" },
        sublink: { type: "string", default: "", title: "副标题文本超链接" },
        subtarget: { type: "string", default: "blank", title: "指定窗口打开主标题超链接", enum: ["self", "blank"] },

        x: {
            type: "string", default: "left", title: "水平安放位置",
            description: "默认为左侧，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）"
        },
        y: {
            type: "string", default: "top",
            title: "垂直安放位置", description: "默认为全图顶端，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）"
        },
        textAlign: {
            type: "string", default: "left",
            title: "水平对齐方式", description: "默认根据x设置自动调整，可选为： 'left' | 'right' | 'center'"
        },
        backgroundColor: { type: "string", default: "transparent", title: "标题背景色", description: "默认透明。" },
        borderColor: { type: "string", default: "#ccc", title: "标题的边框颜色", description: "支持的颜色格式同 backgroundColor。" },
        borderWidth: { type: "number", default: 2, title: "标题的边框线宽" },

        padding: { type: "string", title: "标题内边距", description: "单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。" },
        itemGap: { type: "string", title: "主副标题之间的间距" },
        textStyle: {
            type: "object",
            $ref: "dnd-echart-textstyle#"
        },
        subtextStyle: {
            type: "object",
            $ref: "dnd-echart-textstyle#"
        }
    }
};
