
// import { SchemaFormProps } from "../form/props";
// import { FieldHocProps } from "../../hocs/field";

export interface SchemaFormItemBaseProps {
    mergeSchema: any;
    schemaKey: string;
    globalOptions: any;
    schemaFormOptions: any;
    uiSchemaOptions: any;
    updateItem: (data: { keys: Array<string>, data: any }) => void;
    arrayIndex?: number;
    arrayLevel?: number[];
    formDefaultData?: any;
    formData?: any;
    formItemData?: any;
    reducerKeys: Array<string>;
    con?: string;
    meta?: any;
    getCurrentState?: (state: any, props: any) => any;
}
