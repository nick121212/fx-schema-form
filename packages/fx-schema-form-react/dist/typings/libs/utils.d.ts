import { Map } from "immutable";
import { Ajv } from "ajv";
import { JSONSchema6 } from "json-schema";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
export declare const isProd: () => boolean;
export declare const normalizeDataPath: (schemaId: string, dataPath: string) => (string | number)[];
export declare const getPathProps: (props: DefaultProps & UtilsHocOutProps, path: string) => DefaultProps;
export declare const getActions: (propsCur: DefaultProps, raw?: boolean) => any;
export declare const getRequiredKeys: (props: {
    [key: string]: any;
}, includeKeys?: string[], excludeKeys?: string[]) => {
    [key: string]: any;
};
export declare const getOptions: ({uiSchema, globalOptions}: DefaultProps, category: string, field: string, ...extraSettings: Map<string, any>[]) => {
    [key: string]: any;
};
export declare const getTitle: ({uiSchema, arrayIndex}: DefaultProps, ...extraSettings: Map<string, any>[]) => string;
export declare const getPathKeys: (keys: string[], path: string, schemaId?: string | undefined) => string[];
export declare const getDefaultData: (ajv: Ajv, schema: JSONSchema6, data: any, defaultData?: any, needMerge?: boolean) => Promise<any>;
