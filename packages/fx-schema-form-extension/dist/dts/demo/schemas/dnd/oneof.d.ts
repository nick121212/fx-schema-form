declare const _default: {
    type: string;
    $id: string;
    title: string;
    default: {};
    required: string[];
    properties: {
        type: {
            type: string;
            enum: number[];
            title: string;
            description: string;
        };
        value: {
            oneOf: {
                $id: string;
                type: string;
                title: string;
            }[];
        };
    };
};
export default _default;
