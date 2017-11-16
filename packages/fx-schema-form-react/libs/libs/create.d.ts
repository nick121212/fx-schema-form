import ajv from "ajv";
import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";
export declare class SchemaFormCreate {
    static metas: {
        [key: string]: MetaData;
    };
    createOne<T>(key: string, data: T, curJjv?: ajv.Ajv, schema?: any, getOriginState?: (state: any) => any, updateState?: (state: any, data: any) => any): FormReducer<T>;
}
declare const _default: SchemaFormCreate;
export default _default;
