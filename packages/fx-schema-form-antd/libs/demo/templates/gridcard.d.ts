/// <reference types="react" />
import React from "react";
import { SchemaFormItemProps } from "./../../index";
export interface AntdCardTempProps extends SchemaFormItemProps {
    tempKey: string;
}
export declare class AntdCardTemp extends React.Component<AntdCardTempProps, any> {
    render(): JSX.Element;
}
