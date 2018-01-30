import { BaseFactory } from "fx-schema-form-core";
import { ThemeHocOutProps } from "./theme";
import { UtilsHocOutProps } from "./utils";
import { RC, DefaultProps } from "../components";
export interface FieldHocOutProps {
    FieldComponent: RC<any, any>;
    WidgetComponent: RC<any, any>;
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<DefaultProps & ThemeHocOutProps & UtilsHocOutProps, any>;
export default _default;
