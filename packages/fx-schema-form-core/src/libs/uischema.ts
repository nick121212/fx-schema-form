export const uiSchemaSchema = {
    type: "array",
    items: {
        anyOf: [{
            type: "string",
            minLength: 1
        }, {
            additionalProperties: true,
            type: "object",
            required: [],
            properties: {
                key: { type: "string" }
            }
        }]
    }
};
