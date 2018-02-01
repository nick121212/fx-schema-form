import { FxJsonSchema } from "./jsonschema";
export declare const uiSchemaSchema: {
    type: string;
    items: {
        anyOf: ({
            type: string;
            minLength: number;
            required?: undefined;
            properties?: undefined;
        } | {
            type: string;
            required: string[];
            properties: {
                key: {
                    type: string;
                };
            };
            minLength?: undefined;
        })[];
    };
};
export interface UiSchema extends FxJsonSchema {
    key: string;
    keys?: Array<string | number>;
    children?: Array<UiSchema | string>;
    refKeys?: string[];
}
