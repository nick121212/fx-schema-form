import { TreeMap } from "fx-schema-form-core";

export interface ISchemaFormData<T> {
    data?: T;
    meta: TreeMap;
}
