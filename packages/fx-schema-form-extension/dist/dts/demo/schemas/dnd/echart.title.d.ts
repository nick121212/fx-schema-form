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
export default _default;
