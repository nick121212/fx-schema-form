/// <reference types="react" />
import React from "react";
import { DefaultProps } from "../index";
export interface Props extends DefaultProps {
    RootComponent?: any;
}
export declare class SchemaForm extends React.PureComponent<Props, any> {
    render(): JSX.Element;
}
