import { BaseFactory } from "fx-schema-form-core";
import { UtilsHocOutProps } from "./utils";
import { DefaultProps } from "../components";
import { RC } from "../models";
export interface MakeHocOutProps extends UtilsHocOutProps {
}
export declare const name = "make";
export declare const hoc: (hocFactory: BaseFactory<any>) => (settings?: any) => (Component: any) => RC<DefaultProps & MakeHocOutProps, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => (settings?: any) => (Component: any) => RC<DefaultProps & MakeHocOutProps, any>;
};
export default _default;
