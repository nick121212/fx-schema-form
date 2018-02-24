/// <reference types="recompose" />
import { ComponentEnhancer } from "recompose";
import Immutable from "immutable";
import { BaseFactory } from "fx-schema-form-core";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { RC } from "fx-schema-form-react/dist/typings/models/index";
export interface ConditionHocOutProps {
    condition?: Immutable.Map<string, any>;
}
export interface ConditionPath {
    path: string;
    jsonata?: string;
}
export interface ConditionHocSettings {
    paths?: ConditionPath[];
    hoc?: ComponentEnhancer<any, any>;
}
export interface ConditionHocProps extends DefaultProps, UtilsHocOutProps {
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: ConditionHocSettings) => (Component: any) => RC<ConditionHocOutProps, any>;
export default _default;
