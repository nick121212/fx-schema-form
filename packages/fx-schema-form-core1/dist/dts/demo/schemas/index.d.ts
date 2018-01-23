declare const _default: {
    style: {
        type: string;
        $id: string;
        properties: {
            width: {
                type: string;
            };
            height: {
                type: string;
            };
            fontSize: {
                type: string;
            };
            textAlign: {
                type: string;
                enum: string[];
            };
        };
    };
    common: {
        type: string;
        $id: string;
        properties: {
            className: {
                type: string;
                title: string;
                description: string;
            };
            style: {
                type: string;
                properties: {
                    width: {
                        type: string;
                        title: string;
                    };
                    height: {
                        type: string;
                        title: string;
                    };
                };
            };
            deg: {
                type: string;
                description: string;
            };
        };
    };
    row: {
        type: string;
        $id: string;
        properties: {
            className: {
                $ref: string;
            };
            style: {
                type: string;
                $ref: string;
            };
        };
    };
    col: {
        type: string;
        $id: string;
        properties: {
            className: {
                $ref: string;
            };
            style: {
                type: string;
                $ref: string;
            };
            small: {
                type: string;
                title: string;
                description: string;
                properties: {
                    span: {
                        type: string;
                        default: number;
                        title: string;
                    };
                    pull: {
                        type: string;
                        default: number;
                        title: string;
                    };
                    push: {
                        type: string;
                        default: number;
                        title: string;
                    };
                };
            };
            medium: {
                $ref: string;
                type: string;
                title: string;
                description: string;
            };
            large: {
                $ref: string;
                type: string;
                title: string;
                description: string;
            };
            eLarge: {
                $ref: string;
                type: string;
                title: string;
                description: string;
            };
            eeLarge: {
                $ref: string;
                type: string;
                title: string;
                description: string;
            };
            eeeLarge: {
                $ref: string;
                type: string;
                title: string;
                description: string;
            };
        };
    };
    div: {
        type: string;
        $id: string;
        properties: {
            className: {
                type: string;
            };
            position: {
                type: string;
                properties: {
                    x: {
                        type: string;
                    };
                    y: {
                        type: string;
                    };
                };
            };
            size: {
                type: string;
                properties: {
                    width: {
                        type: string;
                    };
                    height: {
                        type: string;
                    };
                };
            };
        };
    };
    echartLineStyle: {
        type: string;
        $id: string;
        default: {};
        properties: {
            color: {
                type: string;
                default: string;
                title: string;
            };
            type: {
                type: string;
                default: string;
                enum: string[];
                title: string;
            };
            width: {
                type: string;
                title: string;
            };
            shadowColor: {
                type: string;
                default: string;
                title: string;
            };
            shadowBlur: {
                type: string;
                default: number;
                title: string;
            };
            shadowOffsetX: {
                type: string;
                default: number;
                title: string;
            };
            shadowOffsetY: {
                type: string;
                default: number;
                title: string;
            };
        };
    };
    echartAreaStyle: {
        type: string;
        $id: string;
        default: {};
        properties: {
            color: {
                type: string;
                default: string;
                title: string;
            };
            type: {
                type: string;
                default: string;
                title: string;
            };
        };
    };
    echartTextStyle: {
        type: string;
        $id: string;
        default: {};
        properties: {
            color: {
                type: string;
                default: string;
                title: string;
            };
            fontStyle: {
                type: string;
                default: string;
                title: string;
            };
            fontWeight: {
                type: string;
                default: string;
                title: string;
            };
            fontFamily: {
                type: string;
                default: string;
                title: string;
            };
            fontSize: {
                type: string;
                default: number;
                title: string;
            };
            align: {
                type: string;
                title: string;
                enum: string[];
            };
            verticalAlign: {
                type: string;
                title: string;
                enum: string[];
            };
            lineHeight: {
                type: string;
                title: string;
            };
            width: {
                type: string;
                title: string;
            };
            height: {
                type: string;
                title: string;
            };
            textBorderColor: {
                type: string;
                default: string;
                title: string;
            };
            textBorderWidth: {
                type: string;
                default: number;
                title: string;
            };
            textShadowColor: {
                type: string;
                default: string;
                title: string;
            };
            textShadowBlur: {
                type: string;
                title: string;
            };
            textShadowOffsetX: {
                type: string;
                default: number;
                title: string;
            };
            textShadowOffsetY: {
                type: string;
                default: number;
                title: string;
            };
        };
    };
    echartItemStyle: {
        type: string;
        $id: string;
        default: {};
        properties: {
            color: {
                type: string;
                default: string;
                title: string;
            };
            lineStyle: {
                $ref: string;
            };
            areaStyle: {
                $ref: string;
            };
            borderColor: {
                type: string;
                title: string;
            };
        };
    };
    echartAxis: {
        $id: string;
        title: string;
        type: string;
        default: any[];
        items: {
            type: string;
            default: {};
            properties: {
                zlevel: {
                    type: string;
                    default: number;
                    title: string;
                };
                z: {
                    type: string;
                    default: number;
                    title: string;
                    description: string;
                };
                show: {
                    type: string;
                    default: boolean;
                    title: string;
                };
                type: {
                    type: string;
                    default: string;
                    title: string;
                    description: string;
                    enum: string[];
                };
                position: {
                    type: string;
                    title: string;
                    description: string;
                    enum: string[];
                };
                name: {
                    type: string;
                    default: string;
                    title: string;
                };
                nameLocation: {
                    type: string;
                    default: string;
                    title: string;
                    description: string;
                    enum: string[];
                };
                boundaryGap: {
                    type: string;
                    default: boolean;
                    title: string;
                };
                min: {
                    type: string;
                };
                max: {
                    type: string;
                };
                scale: {
                    type: string;
                    default: boolean;
                    title: string;
                };
                data: {
                    type: string;
                    title: string;
                    description: string;
                    items: {
                        type: string;
                    };
                };
                dataDeg: {
                    type: string;
                    title: string;
                    description: string;
                };
            };
        };
    };
    echartSeries: {
        type: string;
        $id: string;
        title: string;
        default: any[];
        items: {
            type: string;
            default: {};
            properties: {
                zlevel: {
                    type: string;
                    default: number;
                    title: string;
                };
                z: {
                    type: string;
                    default: number;
                    title: string;
                    description: string;
                };
                type: {
                    type: string;
                    default: string;
                    title: string;
                    description: string;
                    enum: string[];
                };
                name: {
                    type: string;
                    default: string;
                    title: string;
                    description: string;
                };
                clickable: {
                    type: string;
                    default: boolean;
                    title: string;
                };
                selectedMode: {
                    type: string;
                    default: string;
                    title: string;
                    enum: string[];
                    description: string;
                };
                label: {
                    type: string;
                    properties: {
                        normal: {
                            type: string;
                            properties: {
                                show: {
                                    type: string;
                                };
                                position: {
                                    type: string;
                                    enum: string[];
                                };
                                formatter: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
                itemStyle: {
                    $ref: string;
                };
                color: {
                    type: string;
                    title: string;
                    items: {
                        type: string;
                    };
                };
                data: {
                    type: string;
                    default: any[];
                };
                dataDeg: {
                    type: string;
                    title: string;
                    description: string;
                };
            };
        };
    };
    echartTooltip: {
        type: string;
        $id: string;
        title: string;
        default: {};
        properties: {
            show: {
                type: string;
                default: boolean;
                title: string;
            };
            zlevel: {
                type: string;
                default: number;
                title: string;
            };
            z: {
                type: string;
                default: number;
                title: string;
                description: string;
            };
            showContent: {
                type: string;
                default: boolean;
                title: string;
            };
            trigger: {
                type: string;
                default: string;
                enum: string[];
                title: string;
            };
            showDelay: {
                type: string;
                default: number;
                title: string;
            };
            hideDelay: {
                type: string;
                default: number;
                title: string;
            };
            transitionDuration: {
                type: string;
                default: number;
                title: string;
                description: string;
            };
            enterable: {
                type: string;
                default: boolean;
                title: string;
            };
            backgroundColor: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            borderColor: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            borderWidth: {
                type: string;
                default: number;
                title: string;
            };
            borderRadius: {
                type: string;
                default: number;
                title: string;
            };
            padding: {
                type: string;
                title: string;
                description: string;
            };
            textStyle: {
                type: string;
                $ref: string;
            };
            axisPointer: {
                type: string;
                title: string;
                properties: {
                    type: {
                        type: string;
                        enum: string[];
                    };
                    lineStyle: {
                        type: string;
                        $ref: string;
                    };
                    crossStyle: {
                        type: string;
                        $ref: string;
                    };
                    shadowStyle: {
                        type: string;
                        $ref: string;
                    };
                };
            };
        };
    };
    echartLegend: {
        type: string;
        $id: string;
        title: string;
        default: {};
        properties: {
            show: {
                type: string;
                default: boolean;
                title: string;
            };
            zlevel: {
                type: string;
                default: number;
                title: string;
            };
            z: {
                type: string;
                default: number;
                title: string;
                description: string;
            };
            orient: {
                type: string;
                title: string;
                enum: string[];
            };
            x: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            y: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            backgroundColor: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            borderColor: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            borderWidth: {
                type: string;
                default: number;
                title: string;
            };
            padding: {
                type: string;
                title: string;
                description: string;
            };
            itemGap: {
                type: string;
                title: string;
            };
            itemWidth: {
                type: string;
                default: number;
                title: string;
            };
            itemHeight: {
                type: string;
                default: number;
                title: string;
            };
            textStyle: {
                type: string;
                $ref: string;
            };
            data: {
                type: string;
                items: {
                    type: string;
                };
            };
            dataDeg: {
                type: string;
                title: string;
                description: string;
            };
        };
    };
    echartToolbox: {
        type: string;
        $id: string;
        title: string;
        default: {};
        properties: {
            show: {
                type: string;
                default: boolean;
                title: string;
            };
            showTitle: {
                type: string;
                default: boolean;
                title: string;
            };
            zlevel: {
                type: string;
                default: number;
                title: string;
            };
            z: {
                type: string;
                default: number;
                title: string;
            };
            orient: {
                type: string;
                title: string;
                enum: string[];
            };
            x: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            y: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            backgroundColor: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            borderColor: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            borderWidth: {
                type: string;
                default: number;
                title: string;
            };
            padding: {
                type: string;
                title: string;
                description: string;
            };
            itemGap: {
                type: string;
                title: string;
            };
            itemSize: {
                type: string;
                default: number;
                title: string;
            };
            color: {
                type: string;
                title: string;
                items: {
                    type: string;
                };
            };
            disableColor: {
                type: string;
                default: string;
                title: string;
            };
            effectiveColor: {
                type: string;
                default: string;
                title: string;
            };
            textStyle: {
                type: string;
                $ref: string;
            };
            feature: {
                type: string;
                title: string;
            };
        };
    };
    echartTimeline: {
        $id: string;
        type: string;
        title: string;
        default: {};
        properties: {
            show: {
                type: string;
                default: boolean;
                title: string;
            };
            type: {
                type: string;
                default: string;
                enum: string[];
            };
            axisType: {
                type: string;
                default: string;
                enum: string[];
                title: string;
            };
            currentIndex: {
                type: string;
                default: number;
                title: string;
            };
            autoPlay: {
                type: string;
                default: boolean;
                title: string;
            };
            rewind: {
                type: string;
                default: boolean;
                title: string;
            };
            loop: {
                type: string;
                default: boolean;
                title: string;
            };
            playInterval: {
                type: string;
                default: number;
                title: string;
            };
            realtime: {
                type: string;
                default: boolean;
                title: string;
            };
            controlPosition: {
                type: string;
                default: string;
                enum: string[];
                title: string;
            };
            left: {
                type: string;
                title: string;
                description: string;
            };
            right: {
                type: string;
                title: string;
                description: string;
            };
            top: {
                type: string;
                title: string;
                description: string;
            };
            bottom: {
                type: string;
                title: string;
                description: string;
            };
            padding: {
                type: string;
                title: string;
                description: string;
            };
            orient: {
                type: string;
                title: string;
                enum: string[];
            };
            inverse: {
                type: string;
                default: boolean;
                title: string;
            };
            symbol: {
                type: string;
                default: string;
                title: string;
                enum: string[];
            };
            data: {
                type: string;
                items: {
                    type: string;
                };
            };
            dataDeg: {
                type: string;
                title: string;
                description: string;
            };
        };
    };
    echartTitle: {
        type: string;
        $id: string;
        title: string;
        default: {};
        properties: {
            show: {
                type: string;
                default: boolean;
                title: string;
            };
            zlevel: {
                type: string;
                default: number;
                title: string;
            };
            z: {
                type: string;
                default: number;
                title: string;
                description: string;
            };
            text: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            link: {
                type: string;
                default: string;
                title: string;
            };
            target: {
                type: string;
                default: string;
                title: string;
                enum: string[];
            };
            subtext: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            sublink: {
                type: string;
                default: string;
                title: string;
            };
            subtarget: {
                type: string;
                default: string;
                title: string;
                enum: string[];
            };
            x: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            y: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            textAlign: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            backgroundColor: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            borderColor: {
                type: string;
                default: string;
                title: string;
                description: string;
            };
            borderWidth: {
                type: string;
                default: number;
                title: string;
            };
            padding: {
                type: string;
                title: string;
                description: string;
            };
            itemGap: {
                type: string;
                title: string;
            };
            textStyle: {
                type: string;
                $ref: string;
            };
            subtextStyle: {
                type: string;
                $ref: string;
            };
        };
    };
    echart: {
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
    echart1: {
        $id: string;
        type: string;
        properties: {
            className: {
                type: string;
            };
            notMerge: {
                type: string;
            };
            lazyUpdate: {
                type: string;
            };
            theme: {
                type: string;
            };
            option: {
                type: string;
                $ref: string;
            };
        };
    };
    echart2: {
        $id: string;
        type: string;
        properties: {
            className: {
                type: string;
            };
            notMerge: {
                type: string;
            };
            lazyUpdate: {
                type: string;
            };
            theme: {
                type: string;
            };
            option: {
                type: string;
                properties: {
                    baseOption: {
                        type: string;
                        $ref: string;
                    };
                    options: {
                        type: string;
                        items: {
                            type: string;
                            $ref: string;
                        };
                    };
                    optionsDeg: {
                        type: string;
                        title: string;
                        description: string;
                    };
                };
            };
        };
    };
};
export default _default;
