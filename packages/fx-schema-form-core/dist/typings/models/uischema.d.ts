import { FxJsonSchema } from "./jsonschema";
export declare const uiSchemaSchema: {
    type: string;
    items: {
        anyOf: ({
            type: string;
            minLength: number;
        } | {
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
    keys?: Array<string | number>;
    children?: Array<UiSchema | string>;
    refKeys?: string[];
}
