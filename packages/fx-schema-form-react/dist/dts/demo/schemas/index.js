"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var row_1 = require("./dnd/row");
exports.row = row_1.default;
var col_1 = require("./dnd/col");
exports.col = col_1.default;
var common_1 = require("./dnd/common");
exports.common = common_1.default;
var div_1 = require("./dnd/div");
exports.div = div_1.default;
var echart_1 = require("./dnd/echart");
exports.echart = echart_1.default;
var echart1_1 = require("./dnd/echart1");
exports.echart1 = echart1_1.default;
var echart2_1 = require("./dnd/echart2");
exports.echart2 = echart2_1.default;
var echart_title_1 = require("./dnd/echart.title");
exports.echartTitle = echart_title_1.default;
var echart_toolbox_1 = require("./dnd/echart.toolbox");
exports.echartToolbox = echart_toolbox_1.default;
var echart_tooltip_1 = require("./dnd/echart.tooltip");
exports.echartTooltip = echart_tooltip_1.default;
var echart_linestyle_1 = require("./dnd/echart.linestyle");
exports.echartLineStyle = echart_linestyle_1.default;
var echart_areastyle_1 = require("./dnd/echart.areastyle");
exports.echartAreaStyle = echart_areastyle_1.default;
var echart_textstyle_1 = require("./dnd/echart.textstyle");
exports.echartTextStyle = echart_textstyle_1.default;
var echart_axis_1 = require("./dnd/echart.axis");
exports.echartAxis = echart_axis_1.default;
var echart_legend_1 = require("./dnd/echart.legend");
exports.echartLegend = echart_legend_1.default;
var echart_series_1 = require("./dnd/echart.series");
exports.echartSeries = echart_series_1.default;
var echart_itemstyle_1 = require("./dnd/echart.itemstyle");
exports.echartItemStyle = echart_itemstyle_1.default;
var echart_timeline_1 = require("./dnd/echart.timeline");
exports.echartTimeline = echart_timeline_1.default;
var style_1 = require("./dnd/style");
exports.style = style_1.default;
var design = {
    $async: true,
    type: "object",
    $id: "design",
    required: ["name", "dsModelIds"],
    properties: {
        name: {
            type: "string",
            title: "面板名称",
            $async: true,
            idExists: { "table": "users" },
            description: "远程验证字段，输入nick试试看"
        },
        description: {
            type: "string",
            title: "面板详情"
        },
        appType: {
            type: "string",
            title: "应用类型"
        },
        dsModelIds: {
            type: "array",
            maxItems: 3,
            minItems: 1,
            items: {
                type: "object",
                required: ["age", "name", "password"],
                default: {},
                properties: {
                    age: {
                        type: "string",
                        default: "25"
                    },
                    name: {
                        type: "string",
                        minLength: 10,
                        errorMessage: {
                            minLength: "必须10个字符及以上"
                        }
                    },
                    password: { type: "string" }
                }
            }
        },
        dsModelData: {
            type: "object",
            properties: {
                data: {
                    type: "object"
                },
                ids: {
                    type: "array",
                    items: {
                        type: "string"
                    }
                }
            }
        },
        infoOptions: {
            type: "array",
            items: {
                type: "object",
                default: {},
                properties: {
                    label: {
                        type: "string"
                    },
                    data: {
                        oneOf: [{
                                $id: "design-object",
                                type: "object",
                            }, {
                                $id: "design-string",
                                type: "string"
                            }]
                    },
                    infoOptions: {
                        $ref: "design#/properties/infoOptions"
                    }
                }
            }
        }
    }
};
exports.design = design;
//# sourceMappingURL=index.js.map