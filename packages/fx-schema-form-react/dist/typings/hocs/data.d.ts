import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "../components";
import { RC } from "../models/index";
export interface DataHocOutProps extends DefaultProps {
}
export interface DataHocSettings {
    data?: boolean;
    dataLength?: boolean;
    meta?: boolean;
    metaKeys?: string[];
    treeNode?: boolean;
}
declare const _default: (hocFactory: BaseFactory<RC<DefaultProps, {}>>, settings?: DataHocSettings) => (Component: any) => RC<DefaultProps, any>;
export default _default;
