import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "./utils";
import { RC } from "../models";
export interface Props extends DefaultProps, UtilsHocOutProps {
}
export interface ResetKeysHocOutSettings {
    excludeKeys: string[];
    includeKeys: string[];
}
export declare const name = "resetKey";
export declare const hoc: (hocFactory: BaseFactory<any>) => (settings?: ResetKeysHocOutSettings) => (Component: any) => RC<Props, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => (settings?: ResetKeysHocOutSettings) => (Component: any) => RC<Props, any>;
};
export default _default;
