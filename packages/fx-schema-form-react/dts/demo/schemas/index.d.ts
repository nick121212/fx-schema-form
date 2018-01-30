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
declare const design: {
    $async: boolean;
    type: string;
    $id: string;
    required: string[];
    properties: {
        name: {
            type: string;
            title: string;
            $async: boolean;
            idExists: {
                "table": string;
            };
            description: string;
        };
        description: {
            type: string;
            title: string;
        };
        appType: {
            type: string;
            title: string;
        };
        dsModelIds: {
            type: string;
            maxItems: number;
            minItems: number;
            items: {
                type: string;
                required: string[];
                default: {};
                properties: {
                    age: {
                        type: string;
                        default: string;
                    };
                    name: {
                        type: string;
                        minLength: number;
                        errorMessage: {
                            minLength: string;
                        };
                    };
                    password: {
                        type: string;
                    };
                };
            };
        };
        dsModelData: {
            type: string;
            properties: {
                data: {
                    type: string;
                };
                ids: {
                    type: string;
                    items: {
                        type: string;
                    };
                };
            };
        };
        infoOptions: {
            type: string;
            items: {
                type: string;
                default: {};
                properties: {
                    label: {
                        type: string;
                    };
                    data: {
                        oneOf: {
                            $id: string;
                            type: string;
                        }[];
                    };
                    infoOptions: {
                        $ref: string;
                    };
                };
            };
        };
    };
};
export { style, common, row, col, div, echartLineStyle, echartAreaStyle, echartTextStyle, echartItemStyle, echartAxis, echartSeries, echartTooltip, echartLegend, echartToolbox, echartTimeline, echartTitle, echart, echart1, echart2, design };
