declare const _default: {
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
export default _default;
