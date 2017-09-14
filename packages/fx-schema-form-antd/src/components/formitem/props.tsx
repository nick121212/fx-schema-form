
import { SchemaFormProps } from "../form/props";
// import { FieldHocProps } from "../../hocs/field";

export interface SchemaFormItemBaseProps {
    mergeSchema: any;
    schemaKey: string;
    globalOptions: any;
    schemaFormOptions: any;
    uiSchemaOptions: any;

    updateItem: (data: { keys: Array<string>, data: any }) => void;

    arrayIndex?: number;
    formData?: any;
    meta?: any;
}
