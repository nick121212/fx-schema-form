export declare const schema: {
    "$async": boolean;
    type: string;
    title: string;
    required: string[];
    properties: {
        name: {
            type: string;
            "title": string;
            "default": string;
            description: string;
        };
        number: {
            type: string;
            "title": string;
        };
        integer: {
            type: string;
            "title": string;
        };
        boolean: {
            type: string;
            "title": string;
            default: boolean;
        };
        object: {
            type: string;
            title: string;
            default: {};
            properties: {
                settings: {
                    type: string;
                    enum: boolean[];
                    title: string;
                    default: boolean;
                };
            };
        };
        array: {
            type: string;
            items: {
                type: string;
                "title": string;
                minLength: number;
            };
            "title": string;
        };
        array1: {
            "$async": boolean;
            type: string;
            title: string;
            items: {
                "$async": boolean;
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
                        $ref: string;
                    };
                };
            };
        };
        null: {
            type: string;
            "title": string;
            default: any;
        };
        muti: {
            type: string[];
            "title": string;
            "description": string;
        };
        geo: {
            type: string;
            title: string;
            required: string[];
            properties: {
                lou: {
                    type: string;
                    minimum: number;
                    maximum: number;
                    title: string;
                };
                lat: {
                    type: string;
                    title: string;
                };
            };
        };
    };
};
