import { BaseFactory } from "fx-schema-form-core";
import { ThemeHocOutProps } from "./theme";
import { UtilsHocOutProps } from "./utils";
import { DefaultProps } from "../components";
import { RC } from "../models/index";
export interface FieldHocOutProps {
    FieldComponent: RC<any, any>;
    WidgetComponent: RC<any, any>;
}
export declare const name = "field";
export declare const hoc: (hocFactory: BaseFactory<any>) => () => (Component: any) => RC<DefaultProps & ThemeHocOutProps & UtilsHocOutProps, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => () => (Component: any) => RC<DefaultProps & ThemeHocOutProps & UtilsHocOutProps, any>;
};
export default _default;
