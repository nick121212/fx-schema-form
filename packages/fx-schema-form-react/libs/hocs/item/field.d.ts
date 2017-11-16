import { BaseFactory } from "fx-schema-form-core";
import { ThemeHocOutProps } from "./theme";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export interface FieldHocOutProps {
    FieldComponent: RC<any, any>;
    WidgetComponent: RC<any, any>;
}
export declare const FieldHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<SchemaFormItemBaseProps & ThemeHocOutProps, any>;
