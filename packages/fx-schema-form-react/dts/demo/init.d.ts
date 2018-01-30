/// <reference types="react" />
import ajv from "ajv";
import { PureComponent } from "react";
import { DefaultProps } from "../components/index";
export declare class ArrayComponent extends PureComponent<DefaultProps & any> {
    private addItem;
    private hideItems;
    constructor(props: DefaultProps & any);
    render(): JSX.Element;
}
export declare class ArrayItemComponent extends PureComponent<DefaultProps & any> {
    private removeItem;
    private moveTo;
    constructor(props: DefaultProps & any);
    render(): JSX.Element;
}
export declare const gloabelOptions: any;
export declare const curAjv: ajv.Ajv;
