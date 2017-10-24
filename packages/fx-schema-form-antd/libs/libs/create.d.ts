import ajv from "ajv";
import { FormReducer } from "../reducer/form";
import { MetaData } from "./meta";
export declare class SchemaFormCreate {
    static metas: {
        [key: string]: MetaData;
    };
    createOne<T>(key: any, data: T, curJjv?: ajv.Ajv, schema?: any): FormReducer<T>;
    createMuti(forms?: {
        [id: string]: any;
    }): Object;
}
declare const _default: SchemaFormCreate;
export default _default;
