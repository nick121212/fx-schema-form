/// <reference types="react" />
import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { UtilsHocOutProps } from "./utils";
import { DefaultProps, RC } from "../components";
export interface ArrayHocOutProps extends DefaultProps {
    addItem: (props: DefaultProps, data?: any) => void;
    removeItem: (parentKeys: any[], keys: any[], index: number) => void;
    switchItem: (parentKeys: any[], keys: any[], curIndex: number, toIndex: number) => void;
    moveItem: (parentKeys: any[], keys: any[], curIndex: number, toIndex: number) => void;
    initArrayComponent: (props: DefaultProps, index?: number) => JSX.Element;
    ArrayComponent?: new () => React.PureComponent<DefaultProps>;
    ArrayItemComponent?: new () => React.PureComponent<DefaultProps>;
}
export interface ArrayProps extends DefaultProps, UtilsHocOutProps {
}
declare const _default: (hocFactory: BaseFactory<any>, settings?: any) => (Component: any) => RC<ArrayHocOutProps, any>;
export default _default;
