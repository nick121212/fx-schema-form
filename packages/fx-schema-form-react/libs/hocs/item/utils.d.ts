import { BaseFactory } from "fx-schema-form-core";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export interface UtilsHocOutProps {
    getHocOptions: (hoc?: string) => any;
    getFieldOptions: (field: string) => any;
    getWidgetOptions: (widget: string) => any;
}
export declare const UtilsHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<SchemaFormItemBaseProps, any>;
