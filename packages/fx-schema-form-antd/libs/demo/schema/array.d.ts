declare const _default: {
    $async: boolean;
    id: string;
    type: string;
    required: string[];
    properties: {
        test: {
            type: string;
            title: string;
            description: string;
            minLength: number;
            idExists: {
                "table": string;
            };
        };
        children: {
            type: string;
            items: {
                $ref: string;
            };
        };
    };
};
export default _default;
