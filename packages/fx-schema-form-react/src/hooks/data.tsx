import React from "react";
import { TreeMap } from "fx-schema-form-core";

export interface ISchemaFormData<T> {
    data: T;
    meta: TreeMap;
}

export interface ISchemaFormContext<T> {
    [key: string]: ISchemaFormData<T>;
}

export const SchemaFormContext = React.createContext<{ [key: string]: ISchemaFormContext<any> | undefined }>({});
