/// <reference types="react" />
import React from "react";
import { SchemaFormItemProps } from "../components/formitem";
export interface AntdColTempProps extends SchemaFormItemProps {
    tempKey: string;
}
export declare class AntdColTemp extends React.Component<AntdColTempProps, any> {
    render(): JSX.Element;
}
