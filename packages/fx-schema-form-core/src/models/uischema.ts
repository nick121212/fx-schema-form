import { FxJsonSchema , a } from "./jsonschema";

let string = "string";

/**
 * uiSchema的模型schema
 */
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

export interface UiSchema extends FxJsonSchema {
    key: string;
    keys?: Array<string | number>;
    children?: Array<UiSchema | string>;
    refKeys?: string[];
}
