import ajv from "ajv";
import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";
export declare class SchemaFormCreate {
    static metas: {
        [key: string]: MetaData;
    };
    createOne<T>(key: string, data: T, props: any, con?: string, curJjv?: ajv.Ajv, schema?: any): FormReducer<T>;
}
declare const _default: SchemaFormCreate;
export default _default;
