import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "../components";
import { RC, NsFactory } from "../models/index";
export interface ThemeHocOutProps {
    currentTheme: NsFactory;
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<DefaultProps, any>;
export default _default;
