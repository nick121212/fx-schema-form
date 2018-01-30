declare const _default: {
    type: string;
    $id: string;
    title: string;
    default: {};
    properties: {
        timeline: {
            $ref: string;
        };
        title: {
            $ref: string;
        };
        toolbox: {
            $ref: string;
        };
        tooltip: {
            $ref: string;
        };
        legend: {
            $ref: string;
        };
        series: {
            type: string;
            default: any[];
            $ref: string;
        };
        xAxis: {
            type: string;
            default: any[];
            $ref: string;
        };
        yAxis: {
            type: string;
            default: any[];
            $ref: string;
        };
    };
};
export default _default;
