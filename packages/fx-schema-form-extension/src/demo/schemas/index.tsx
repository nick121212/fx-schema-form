import { default as row } from "./dnd/row";
import { default as col } from "./dnd/col";
import { default as common } from "./dnd/common";
import { default as div } from "./dnd/div";

import { default as echart } from "./dnd/echart";
import { default as echart1 } from "./dnd/echart1";
import { default as echart2 } from "./dnd/echart2";
import { default as echartTitle } from "./dnd/echart.title";
import { default as echartToolbox } from "./dnd/echart.toolbox";
import { default as echartTooltip } from "./dnd/echart.tooltip";
import { default as echartLineStyle } from "./dnd/echart.linestyle";
import { default as echartAreaStyle } from "./dnd/echart.areastyle";
import { default as echartTextStyle } from "./dnd/echart.textstyle";
import { default as echartAxis } from "./dnd/echart.axis";
import { default as echartLegend } from "./dnd/echart.legend";
import { default as echartSeries } from "./dnd/echart.series";
import { default as echartItemStyle } from "./dnd/echart.itemstyle";
import { default as echartTimeline } from "./dnd/echart.timeline";
import { default as style } from "./dnd/style";
import { default as design } from "./dnd/design";


// const design = {
//     $async: true,
//     type: "object",
//     $id: "design",
//     required: ["name", "dsModelIds"],
//     properties: {
//         name: {
//             type: "string",
//             title: "面板名称",
//             minLength: 2,
//             $async: true,
//             idExists: {},
//             description: "远程验证字段，输入nick或者nora试试看"
//         },
//         point: {
//             "type": "object",
//             "title": "表示一个点的坐标",
//             "properties": {
//                 "x": {
//                     "type": "number"
//                 },
//                 "y": {
//                     "type": "number"
//                 }
//             }
//         },
//         description: {
//             type: "string",
//             title: "面板详情"
//         },
//         appType: {
//             anyOf: [{
//                 $id: "design-app-type-1",
//                 type: "object",
//                 required: ["a"],
//                 properties: {
//                     a: {
//                         type: "string",
//                         title: "test-oneof-1"
//                     }
//                 },
//                 title: "应用类型"
//             }, {
//                 $id: "design-app-type-2",
//                 type: "object",
//                 required: ["b"],
//                 properties: {
//                     b: {
//                         type: "string",
//                         title: "test-oneof-2"
//                     }
//                 },
//                 title: "应用类型"
//             }]
//         },
//         dsModelIds: {
//             type: "array",
//             maxItems: 3,
//             items: {
//                 type: "object",
//                 required: ["age", "name", "password"],
//                 default: {},
//                 properties: {
//                     age: {
//                         type: "string",
//                         default: "25"
//                     },
//                     name: {
//                         type: "string",
//                         minLength: 10,
//                         errorMessage: {
//                             minLength: "必须10个字符及以上"
//                         }
//                     },
//                     password: { type: "string" }
//                 }
//             }
//         },
//         dsModelData: {
//             type: "object",
//             properties: {
//                 data: {
//                     type: "object"
//                 },
//                 ids: {
//                     type: "array",
//                     items: {
//                         type: "string"
//                     }
//                 }
//             }
//         },
//         infoOptions: {
//             type: "array",
//             items: {
//                 type: "object",
//                 default: {},
//                 properties: {
//                     label: {
//                         type: "string"
//                     },
//                     data: {
//                         oneOf: [{
//                             $id: "design-object",
//                             type: "object",
//                         }, {
//                             $id: "design-string",
//                             type: "string"
//                         }]
//                     },
//                     infoOptions: {
//                         $ref: "design#/properties/infoOptions"
//                     }
//                 }
//             }
//         }
//     }
// };


export {
    style,
    common,
    row,
    col,
    div,
    echartLineStyle,
    echartAreaStyle,
    echartTextStyle,
    echartItemStyle,
    echartAxis,
    echartSeries,
    echartTooltip,
    echartLegend,
    echartToolbox,
    echartTimeline,
    echartTitle,
    echart,
    echart1,
    echart2,
    design
};
