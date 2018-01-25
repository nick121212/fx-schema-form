import { FxJsonSchema } from "./jsonschema";
/**
 * uiSchema的模型schema
 */
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
export interface UiSchema extends FxJsonSchema {
    key: string;
    keys?: string[];
    children?: Array<UiSchema | string>;
}
