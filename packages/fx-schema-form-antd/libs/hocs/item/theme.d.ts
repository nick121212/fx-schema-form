import { BaseFactory } from "fx-schema-form-core";
import { RC, NsFactory } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export interface ThemeHocOutProps {
    currentTheme: NsFactory;
}
export declare const ThemeHoc: (hocFactory: BaseFactory<any>, Component: any) => RC<SchemaFormItemBaseProps, any>;
