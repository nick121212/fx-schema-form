/// <reference types="react" />
export interface SchemaFormItemBaseProps {
    mergeSchema: any;
    schemaKey: string;
    globalOptions: any;
    schemaFormOptions: any;
    uiSchemaOptions: any;
    updateItem: (data: {
        keys: Array<string>;
        data: any;
    }) => void;
    arrayIndex?: number;
    arrayItems?: any;
    arrayItemItems?: Array<JSX.Element>;
    formData?: any;
    formItemData?: any;
    meta?: any;
}
