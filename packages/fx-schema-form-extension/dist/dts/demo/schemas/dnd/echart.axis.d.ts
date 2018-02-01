declare const _default: {
    $id: string;
    title: string;
    type: string;
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
export default _default;
