/// <reference types="react" />
import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { RC } from "../../types";
import { SchemaFormItemBaseProps } from "../../components/formitem/props";
import { ValidateHocOutProps } from "./validate";
import { MakeHocOutProps } from "./make";
export interface ArrayHocOutProps extends SchemaFormItemBaseProps, ValidateHocOutProps, MakeHocOutProps {
    toggleItem?: () => void;
    removeItem?: (data: number) => void;
    addItem?: (data: any) => void;
    switchItem?: (data: any) => void;
    ItemButtons?: new () => React.PureComponent<any>;
    ItemChildButtons?: new () => React.PureComponent<any>;
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<ArrayHocOutProps, any>;
export default _default;
