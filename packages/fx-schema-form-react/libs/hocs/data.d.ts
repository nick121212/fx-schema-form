import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "../components";
import { RC } from "../models";
export interface DataHocOutProps extends DefaultProps {
}
export interface DataHocSettings {
    root?: boolean;
    data?: boolean;
    dataLength?: boolean;
    meta?: boolean;
    metaKeys?: string[];
    treeNode?: boolean;
}
export declare const name = "data";
export declare const hoc: (hocFactory: BaseFactory<RC<DefaultProps, {}>>) => (settings?: DataHocSettings) => (Component: any) => RC<DefaultProps, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<RC<DefaultProps, {}>>) => (settings?: DataHocSettings) => (Component: any) => RC<DefaultProps, any>;
};
export default _default;
