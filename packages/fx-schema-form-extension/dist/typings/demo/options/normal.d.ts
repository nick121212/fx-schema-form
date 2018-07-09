import React from "react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
export declare class ArrayComponent extends React.PureComponent<DefaultProps & any> {
    private addItem;
    private hideItems;
    constructor(props: DefaultProps & any);
    render(): JSX.Element;
}
export declare class ArrayItemComponent extends React.PureComponent<DefaultProps & any> {
    private removeItem;
    private moveTo;
    constructor(props: DefaultProps & any);
    render(): JSX.Element;
}
export declare const globalOptions: any;
