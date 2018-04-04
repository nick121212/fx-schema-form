import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
import { ConditionHocOutProps, ConditionHocSettings } from "./condition";
export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps, ConditionHocOutProps {
}
export declare const name = "wrapper";
export interface WrapperHocSettings {
    condition?: ConditionHocSettings;
    hoc?: any;
    hocName?: string;
}
export declare const hoc: (hocFactory: BaseFactory<any>) => (settings?: WrapperHocSettings) => (Component: any) => RC<Props, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => (settings?: WrapperHocSettings) => (Component: any) => RC<Props, any>;
};
export default _default;
