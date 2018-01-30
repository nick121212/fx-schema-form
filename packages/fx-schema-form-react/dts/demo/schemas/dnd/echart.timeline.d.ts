declare const _default: {
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
export default _default;
