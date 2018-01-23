
export default {
    $id: "dnd-echart-axis",
    title: "axis",
    type: "array",
    default: [],
    items: {
        type: "object",
        default: {},
        properties: {
            zlevel: { type: "number", default: 0, title: "所有图形的 zlevel 值" },
            z: { type: "number", default: 6, title: "组件的所有图形的z值", description: "二级层叠控制，同一个canvas（相同zlevel）上z越高约靠顶层。" },

            show: { type: "boolean", default: true, title: "显示策略" },
            type: {
                type: "string",
                default: "",
                title: "坐标轴类型",
                description: "横轴默认为类目型'category'，纵轴默认为数值型'value'",
                enum: ["category", "value", "time", "log"]
            },
            position: {
                type: "string",
                title: "坐标轴类型",
                description: "横轴默认为类目型'bottom'，纵轴默认为数值型'left'，可选为：'bottom' | 'top' | 'left' | 'right'",
                enum: ["bottom", "left"]
            },
            name: { type: "string", default: "", title: "坐标轴名称，默认为空" },
            nameLocation: {
                type: "string",
                default: "start",
                title: "坐标轴名称位置",
                description: "默认为'end'，可选为：'start' | 'end'",
                enum: ["start", "end"]
            },
            boundaryGap: { type: "boolean", default: true, title: "类目起始和结束两端空白策略" },
            min: {
                type: "number"
            },
            max: {
                type: "number"
            },
            scale: {
                type: "boolean",
                default: false,
                title: "脱离0值比例，放大聚焦到最终_min，_max区间"
            },
            data: {
                type: "array",
                title: "轴数据",
                description: "格式为['1','2']",
                items: {
                    type: "string"
                }
            },
            dataDeg: {
                type: "string",
                title: "轴数据",
                description: "这里支持动态数据，输入$来选择数据源"
            }
        }
    }
};
