import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC } from "fx-schema-form-react/dist/typings/models";
export interface ConditionHocSettings {
    keys?: string[];
}
export interface ClearHocProps extends DefaultProps, UtilsHocOutProps {
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: ConditionHocSettings) => (Component: any) => RC<ClearHocProps, any>;
export default _default;
