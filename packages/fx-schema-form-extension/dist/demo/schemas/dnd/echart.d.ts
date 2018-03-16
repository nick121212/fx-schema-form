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
            default: never[];
            $ref: string;
        };
        xAxis: {
            type: string;
            default: never[];
            $ref: string;
        };
        yAxis: {
            type: string;
            default: never[];
            $ref: string;
        };
    };
};
export default _default;
