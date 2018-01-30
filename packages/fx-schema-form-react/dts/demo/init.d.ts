/// <reference types="react" />
import ajv from "ajv";
import React from "react";
import { DefaultProps } from "../index";
import { ArrayHocOutProps } from "../hocs/array";
import { UtilsHocOutProps } from "../hocs/utils";
import { ValidateHocOutProps } from "../hocs/validate";
export declare class ArrayComponent extends React.PureComponent<DefaultProps & ArrayHocOutProps & ValidateHocOutProps> {
    private addItem;
    private hideItems;
    constructor(props: DefaultProps & ArrayHocOutProps & ValidateHocOutProps);
    render(): JSX.Element;
}
export declare class ArrayItemComponent extends React.PureComponent<DefaultProps & ArrayHocOutProps & UtilsHocOutProps> {
    private removeItem;
    private moveTo;
    constructor(props: DefaultProps & ArrayHocOutProps & UtilsHocOutProps);
    render(): JSX.Element;
}
export declare const gloabelOptions: any;
export declare const curAjv: ajv.Ajv;
