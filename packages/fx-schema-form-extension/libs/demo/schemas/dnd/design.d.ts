declare const _default: {
    type: string;
    $id: string;
    properties: {
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
