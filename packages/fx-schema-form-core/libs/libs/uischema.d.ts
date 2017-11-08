export declare const uiSchemaSchema: {
    type: string;
    items: {
        anyOf: ({
            type: string;
            minLength: number;
        } | {
            additionalProperties: boolean;
            type: string;
            required: any[];
            properties: {
                key: {
                    type: string;
                };
            };
        })[];
    };
};
