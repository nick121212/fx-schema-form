declare const _default: {
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
export default _default;
