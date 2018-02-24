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
export default _default;
