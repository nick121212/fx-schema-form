declare const _default: {
    type: string;
    $id: string;
    title: string;
    default: never[];
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
                default: never[];
            };
            dataDeg: {
                type: string;
                title: string;
                description: string;
            };
        };
    };
};
export default _default;
