declare const _default: {
    type: string;
    $id: string;
    required: string[];
    properties: {
        name: {
            type: string;
            title: string;
        };
        children: {
            type: string;
            items: {
                type: string;
                properties: {
                    data: {
                        type: string;
                    };
                    children: {
                        $ref: string;
                    };
                };
            };
        };
    };
};
export default _default;
