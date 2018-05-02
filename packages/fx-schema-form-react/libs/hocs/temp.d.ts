import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "../components";
import { RC } from "../models";
import { ThemeHocOutProps } from "./theme";
export declare const name = "temp";
export declare const hoc: (hocFactory: BaseFactory<any>) => (settings?: any) => (Component: any) => RC<DefaultProps & ThemeHocOutProps, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => (settings?: any) => (Component: any) => RC<DefaultProps & ThemeHocOutProps, any>;
};
export default _default;
