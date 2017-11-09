import { BaseFactory } from "fx-schema-form-core";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export interface ValidateHocOutProps {
    validate?: (data: any) => void;
    updateItemData?: (data: any) => void;
}
export declare const ValidateHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<SchemaFormItemBaseProps, any>;
