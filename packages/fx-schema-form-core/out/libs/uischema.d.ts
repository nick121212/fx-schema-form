export declare const uiSchemaSchema: {
    type: string;
    items: {
        anyOf: ({
            type: string;
            minLength: number;
        } | {
            additionalProperties: boolean;
            type: string;
            required: string[];
            properties: {
                key: {
                    type: string;
                };
            };
        })[];
    };
};
