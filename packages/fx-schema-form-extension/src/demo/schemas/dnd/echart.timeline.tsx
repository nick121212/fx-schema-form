export default {
    $id: "dnd-echart-timeline",
    type: "object",
    title: "timeline的配置",
    default: {},
    properties: {
        show: { type: "boolean", default: true, title: "是否显示timeline" },
        type: { type: "string", default: "slider", enum: ["slider"] },
        axisType: { type: "string", default: "time", enum: ["value", "category", "time"], title: "轴的类型" },
        currentIndex: { type: "number", default: 0, title: "表示当前选中项是哪项" },
        autoPlay: { type: "boolean", default: true, title: "表示是否自动播放" },
        rewind: { type: "boolean", default: false, title: "表示是否反向播放" },
        loop: { type: "boolean", default: true, title: "表示是否循环播放" },
        playInterval: { type: "number", default: 0, title: "表示播放的速度(单位毫秒)" },
        realtime: { type: "boolean", default: true, title: "拖动圆点的时候，是否实时更新视图" },
        controlPosition: { type: "string", default: "left", enum: ["left", "right"], title: "表示『播放』按钮的位置" },
        left: {
            type: "string", title: "timeline组件离容器左侧的距离",
            description: "left 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比，也可以是 'left', 'center', 'right'"
        },
        right: {
            type: "string", title: "timeline组件离容器右侧的距离",
            description: "ottom 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比"
        },
        top: {
            type: "string", title: "timeline组件离容器上侧的距离",
            description: "如果 top 的值为'top', 'middle', 'bottom'，组件会根据相应的位置自动对齐"
        },
        bottom: {
            type: "string", title: "timeline组件离容器下侧的距离",
            description: "ottom 的值可以是像 20 这样的具体像素值，可以是像 '20%' 这样相对于容器高宽的百分比"
        },
        padding: { type: "string", title: "标题内边距", description: "单位px，默认各方向内边距为5，接受数组分别设定上右下左边距。" },
        orient: { type: "string", title: "布局方式", enum: ["horizontal", "vertical"] },
        inverse: { type: "boolean", default: false, title: "是否反向放置 timeline，反向则首位颠倒过来" },
        symbol: {
            type: "string", default: "emptyCircle",
            title: "timeline标记的图形", enum: ["circle", "rect", "roundRect", "triangle", "diamond", "pin", "arrow"]
        },
        data: {
            type: "array",
            items: {
                type: "object"
            }
        },
        dataDeg: {
            type: "string",
            title: "timeline数据",
            description: "这里支持动态数据，输入$来选择数据源"
        }
    }
};
