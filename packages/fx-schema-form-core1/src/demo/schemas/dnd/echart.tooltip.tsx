
export default {
    type: "object",
    $id: "dnd-echart-tooltip",
    title: "提示框参数设置",
    default: {},
    properties: {
        show: { type: "boolean", default: true, title: "是否显示标题组件" },
        zlevel: { type: "number", default: 0, title: "所有图形的 zlevel 值" },
        z: { type: "number", default: 6, title: "组件的所有图形的z值", description: "二级层叠控制，同一个canvas（相同zlevel）上z越高约靠顶层。" },
        showContent: { type: "boolean", default: true, title: "tooltip主体内容显示策略" },
        trigger: {
            type: "string", default: "item", enum: ["item", "axis"],
            title: "触发类型，默认数据触发，见下图，可选为：'item' | 'axis'"
        },
        showDelay: { type: "number", default: 20, title: "显示延迟，添加显示延迟可以避免频繁切换，特别是在详情内容需要异步获取的场景，单位ms" },
        hideDelay: { type: "number", default: 100, title: "隐藏延迟，单位ms" },
        transitionDuration: {
            type: "number", default: 0.4, title: "动画变换时长，单位s",
            description: "如果你希望tooltip的跟随实时响应，showDelay设置为0是关键，同时transitionDuration设0也会有交互体验上的差别"
        },
        enterable: { type: "boolean", default: false, title: "鼠标是否可进入详情气泡中，默认为false，如需详情内交互，如添加链接，按钮，可设置为true。" },
        backgroundColor: { type: "string", default: "transparent", title: "标题背景色", description: "默认透明" },
        borderColor: { type: "string", default: "#ccc", title: "标题的边框颜色", description: "支持的颜色格式同 backgroundColor" },
        borderWidth: { type: "number", default: 2, title: "标题的边框线宽" },
        borderRadius: { type: "number", default: 4, title: "提示边框圆角，单位px，默认为4" },
        padding: { type: "string", title: "标题内边距", description: "单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。" },
        textStyle: {
            type: "object",
            $ref: "dnd-echart-textstyle#"
        },
        axisPointer: {
            type: "object",
            title: "坐标轴指示器",
            properties: {
                type: {
                    type: "string",
                    enum: ["line", "cross", "shadow", "none"]
                },
                lineStyle: {
                    type: "object",
                    $ref: "dnd-echart-linestyle#"
                },
                crossStyle: {
                    type: "object",
                    $ref: "dnd-echart-linestyle#"
                },
                shadowStyle: {
                    type: "object",
                    $ref: "dnd-echart-areastyle#"
                }
            }
        }
    }
};
