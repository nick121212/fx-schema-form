import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "../components";
import { RC } from "../models";
export interface DataHocOutProps extends DefaultProps {
}
export interface DataHocSettings {
    rootReducerKey: Array<string | number>;
    data?: boolean;
    dataLength?: boolean;
    meta?: boolean;
}
declare const _default: (hocFactory: BaseFactory<RC<DefaultProps, {}>>, settings?: DataHocSettings) => (Component: any) => RC<DataHocOutProps, any>;
export default _default;
