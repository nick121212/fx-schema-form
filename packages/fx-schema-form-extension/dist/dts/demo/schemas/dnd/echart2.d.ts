declare const _default: {
    $id: string;
    type: string;
    properties: {
        className: {
            type: string;
        };
        notMerge: {
            type: string;
        };
        lazyUpdate: {
            type: string;
        };
        theme: {
            type: string;
        };
        option: {
            type: string;
            properties: {
                baseOption: {
                    type: string;
                    $ref: string;
                };
                options: {
                    type: string;
                    items: {
                        type: string;
                        $ref: string;
                    };
                };
                optionsDeg: {
                    type: string;
                    title: string;
                    description: string;
                };
            };
        };
    };
};
export default _default;
