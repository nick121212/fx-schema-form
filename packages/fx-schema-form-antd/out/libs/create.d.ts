import { FormReducer } from "../reducer/form";
export declare class SchemaFormCreate {
    createOne<T>(key: any, data: T): FormReducer<T>;
    createMuti(forms?: {
        [id: string]: any;
    }): Object;
}
declare const _default: SchemaFormCreate;
export default _default;
