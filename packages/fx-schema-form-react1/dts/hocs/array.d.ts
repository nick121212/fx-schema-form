import { BaseFactory } from "fx-schema-form-core";
import { MakeHocOutProps } from "./make";
import { DefaultProps, RC } from "../components";
export interface ArrayHocOutProps extends DefaultProps, MakeHocOutProps {
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<ArrayHocOutProps, any>;
export default _default;
