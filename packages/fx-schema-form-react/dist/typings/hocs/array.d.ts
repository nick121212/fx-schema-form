/// <reference types="react" />
/// <reference types="recompose" />
import React from "react";
import { ComponentEnhancer } from "recompose";
import { BaseFactory } from "fx-schema-form-core";
import { UtilsHocOutProps } from "./utils";
import { DefaultProps } from "../components";
export interface ArrayHocOutProps {
    addItem: (props: DefaultProps, data?: any) => Promise<void>;
    removeItem: (parentKeys: any[], keys: any[], index: number) => void;
    moveItem: (parentKeys: any[], keys: any[], curIndex: number, toIndex: number) => void;
    initArrayComponent: (props: DefaultProps, index?: number) => JSX.Element;
    ArrayComponent?: new () => React.PureComponent<DefaultProps>;
    ArrayItemComponent?: new () => React.PureComponent<DefaultProps>;
}
export interface ArrayProps extends DefaultProps, UtilsHocOutProps {
}
export declare const name = "array";
export declare const hoc: (hocFactory: BaseFactory<any>) => () => ComponentEnhancer<any, ArrayProps>;
declare const _default: {
    name: string;
    hoc: (hocFactory: BaseFactory<any>) => () => ComponentEnhancer<any, ArrayProps>;
};
export default _default;
