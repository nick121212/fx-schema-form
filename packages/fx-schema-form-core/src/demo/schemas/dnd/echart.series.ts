
export default {
    type: "array",
    $id: "dnd-echart-series",
    title: "series",
    default: [],
    items: {
        type: "object",
        default: {},
        properties: {
            zlevel: { type: "number", default: 0, title: "所有图形的 zlevel 值" },
            z: { type: "number", default: 6, title: "组件的所有图形的z值", description: "二级层叠控制，同一个canvas（相同zlevel）上z越高约靠顶层。" },
            type: {
                type: "string",
                default: "line",
                title: "图表类型",
                description: "可选为： 'line'（折线图） | 'bar'（柱状图） | 'scatter'（散点图） | 'k'（K线图） | 'pie'（饼图） | 'radar'（雷达图） | 'chord'（和弦图） | 'force'（力导向布局图） | 'map'（地图）",
                enum: ["line", "bar", "scatter", "pie", "map", "radar", "chord", "force"]
            },
            name: { type: "string", default: "", title: "系列名称", description: "如启用legend，该值将被legend.data索引相关" },
            clickable: { type: "boolean", default: true, title: "数据图形是否可点击，默认开启，如果没有click事件响应可以关闭" },
            selectedMode: {
                type: "string",
                default: "single",
                title: "选中模式",
                enum: ["single", "multiple"],
                description: "默认关闭，可选single，multiple"
            },
            label: {
                type: "object",
                properties: {
                    normal: {
                        type: "object",
                        properties: {
                            show: { type: "boolean" },
                            position: {
                                type: "string",
                                enum: [
                                    "top",
                                    "left",
                                    "right",
                                    "bottom",
                                    "inside",
                                    "insideLeft",
                                    "insideRight",
                                    "insideTop",
                                    "insideBottom",
                                    "insideTopLeft",
                                    "insideBottomLeft",
                                    "insideTopRight",
                                    "insideBottomRight"]
                            },
                            formatter: { type: "string" }
                        }
                    }
                }
            },
            itemStyle: {
                $ref: "dnd-echart-itemstyle#"
            },
            color: {
                type: "array",
                title: "颜色组",
                items: {
                    type: "string"
                }
            },
            data: {
                type: "array",
                default: []
            },
            dataDeg: {
                type: "string",
                title: "曲线数据",
                description: "这里支持动态数据，输入$来选择数据源"
            }
        }
    }
};
