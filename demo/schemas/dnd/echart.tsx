export default {
    type: "object",
    $id: "dnd-echart",
    title: "echarts参数设置",
    default: {},
    properties: {
        timeline: {
            $ref: "dnd-echart-timeline#",
        },
        title: {
            $ref: "dnd-echart-title#",
        },
        toolbox: {
            $ref: "dnd-echart-toolbox#",
        },
        tooltip: {
            $ref: "dnd-echart-tooltip#",
        },
        legend: {
            $ref: "dnd-echart-legend#",
        },
        series: {
            type: "array",
            default: [],
            $ref: "dnd-echart-series#"
        },
        xAxis: {
            type: "array",
            default: [],
            $ref: "dnd-echart-axis#"
        },
        yAxis: {
            type: "array",
            default: [],
            $ref: "dnd-echart-axis#"
        }
    }
};
