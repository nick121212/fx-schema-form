declare const _default: {
    type: string;
    $id: string;
    required: string[];
    properties: {
        width: {
            type: string;
            title: string;
            default: number;
        };
        height: {
            type: string;
            equal: string;
            title: string;
            description: string;
        };
        fontSize: {
            type: string;
        };
        url: {
            type: string;
            format: string;
        };
        email: {
            type: string;
            format: string;
        };
        ids: {
            type: string;
            description: string;
            items: {
                title: string;
                type: string;
                format: string;
            };
        };
        textAlign: {
            type: string;
            enum: string[];
            description: string;
        };
    };
};
export default _default;
