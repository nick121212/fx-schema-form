import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps, RC } from "../components";
export interface DataHocOutProps extends DefaultProps {
}
export interface DataHocSettings {
    rootReducerKey: string[];
    data?: boolean;
    dataLength?: boolean;
}
declare const _default: (hocFactory: BaseFactory<RC<DefaultProps, {}>>, settings?: DataHocSettings) => (Component: any) => RC<DataHocOutProps, any>;
export default _default;
