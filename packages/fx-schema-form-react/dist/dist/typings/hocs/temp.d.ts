import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "../components";
import { RC } from "../models/index";
import { ThemeHocOutProps } from "./theme";
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<DefaultProps & ThemeHocOutProps, any>;
export default _default;
