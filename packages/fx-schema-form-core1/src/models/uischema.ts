import { FxJsonSchema } from "./jsonschema";

/**
 * uiSchema的模型schema
 */
export const uiSchemaSchema = {
    type: "array",
    items: {
        anyOf: [{
            type: "string",
            minLength: 1
        }, {
            additionalProperties: true,
            type: "object",
            required: ["key"],
            properties: {
                key: { type: "string" }
            }
        }]
    }
};

export interface UiSchema extends FxJsonSchema {
    key: string;
    keys?: string[];
    // dataKeys?: string[];
    children?: Array<UiSchema | string>;
    refKeys?: string[];
}
