declare const _default: {
    type: string;
    $id: string;
    properties: {
        className: {
            $ref: string;
        };
        style: {
            type: string;
            $ref: string;
        };
        small: {
            type: string;
            title: string;
            description: string;
            properties: {
                span: {
                    type: string;
                    default: number;
                    title: string;
                };
                pull: {
                    type: string;
                    default: number;
                    title: string;
                };
                push: {
                    type: string;
                    default: number;
                    title: string;
                };
            };
        };
        medium: {
            $ref: string;
            type: string;
            title: string;
            description: string;
        };
        large: {
            $ref: string;
            type: string;
            title: string;
            description: string;
        };
        eLarge: {
            $ref: string;
            type: string;
            title: string;
            description: string;
        };
        eeLarge: {
            $ref: string;
            type: string;
            title: string;
            description: string;
        };
        eeeLarge: {
            $ref: string;
            type: string;
            title: string;
            description: string;
        };
    };
};
export default _default;
