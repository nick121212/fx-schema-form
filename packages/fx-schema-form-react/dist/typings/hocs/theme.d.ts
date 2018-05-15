import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "../components";
import { RC, NsFactory } from "../models";
export interface ThemeHocOutProps {
    currentTheme: NsFactory;
}
export declare const name = "theme";
export declare const hoc: (hocFactory: BaseFactory<any>) => () => (Component: any) => RC<DefaultProps, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => () => (Component: any) => RC<DefaultProps, any>;
};
export default _default;
