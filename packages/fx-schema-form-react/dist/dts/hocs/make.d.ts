import { BaseFactory } from "fx-schema-form-core";
import { UtilsHocOutProps } from "./utils";
import { DefaultProps } from "../components";
import { RC } from "../models";
export interface MakeHocOutProps extends UtilsHocOutProps {
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<DefaultProps & MakeHocOutProps, any>;
export default _default;
