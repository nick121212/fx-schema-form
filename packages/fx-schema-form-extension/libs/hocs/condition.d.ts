import { ComponentEnhancer } from "recompose";
import Immutable from "immutable";
import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { RC } from "fx-schema-form-react/libs/models/index";
export interface ConditionHocOutProps {
    condition?: Immutable.Map<string, any>;
}
export interface ConditionPath {
    path: string;
    meta?: boolean;
    metaKey?: string;
    jsonata?: string;
}
export interface ConditionHocSettings {
    paths?: ConditionPath[];
    hoc?: ComponentEnhancer<any, any>;
}
export interface ConditionHocProps extends DefaultProps, UtilsHocOutProps {
}
export declare const name = "condition";
export declare const innerHoc: (hocFactory: BaseFactory<any>) => (settings?: ConditionHocSettings) => (Component: any) => RC<ConditionHocOutProps, any>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => (settings?: ConditionHocSettings) => (Component: any) => RC<ConditionHocOutProps, any>;
};
export default _default;
