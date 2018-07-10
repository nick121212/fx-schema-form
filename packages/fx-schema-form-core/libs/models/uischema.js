import { a } from "./jsonschema";
let string = "string";
export const uiSchemaSchema = {
    type: "array",
    items: {
        anyOf: [{
                type: string,
                minLength: a
            }, {
                type: "object",
                required: ["key"],
                properties: {
                    key: { type: string }
                }
            }]
    }
};
//# sourceMappingURL=uischema.js.map