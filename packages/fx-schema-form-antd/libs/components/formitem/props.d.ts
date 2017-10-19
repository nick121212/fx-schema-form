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
    formDefaultData?: any;
    formData?: any;
    formItemData?: any;
    meta?: any;
    getCurrentState?: (state: any, props: any) => any;
}
