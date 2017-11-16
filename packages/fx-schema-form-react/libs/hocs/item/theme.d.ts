import { BaseFactory } from "fx-schema-form-core";
import { RC, NsFactory } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
export interface ThemeHocOutProps {
    currentTheme: NsFactory;
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<SchemaFormItemBaseProps, any>;
export default _default;
