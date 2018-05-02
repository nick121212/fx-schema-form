import { BaseFactory } from "fx-schema-form-core";
import Immutable from "immutable";
import { JSONSchema6 } from "json-schema";
import { Ajv } from "ajv";
import { DefaultProps } from "../components";
import { RC } from "../models";
import { SchemaFormActions } from "../reducers/schema.form";
export declare const name = "utils";
export interface UtilsHocOutProps {
    getOptions: (props: DefaultProps, category: string, field: string, ...extraSettings: Immutable.Map<string, any>[]) => {
        [key: string]: any;
    };
    getTitle(props: DefaultProps, ...extraSettings: Immutable.Map<string, any>[]): () => string;
    getPathKeys: (keys: string[], path: string) => Array<string | number>;
    normalizeDataPath: (schemaId: string, dataPath: string) => Array<string | number>;
    getRequiredKeys: (props: DefaultProps, include: string[], exclude: string[]) => {
        [key: string]: any;
    };
    getDefaultData: (ajv: Ajv, schema: JSONSchema6, data: any, defaultData?: any, merge?: boolean) => Promise<any>;
    getActions: (props: DefaultProps, raw?: boolean) => SchemaFormActions;
    getPathProps: (props: DefaultProps, path: string) => DefaultProps;
}
export declare const hoc: (hocFactory: BaseFactory<any>) => () => (Component: any) => RC<DefaultProps, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => () => (Component: any) => RC<DefaultProps, any>;
};
export default _default;
