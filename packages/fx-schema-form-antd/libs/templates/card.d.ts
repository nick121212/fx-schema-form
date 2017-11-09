/// <reference types="react" />
import React from "react";
import { SchemaFormItemProps } from "../components/formitem";
export interface AntdCardTempProps extends SchemaFormItemProps {
    tempKey: string;
}
export declare class AntdCardTemp extends React.Component<AntdCardTempProps, any> {
    render(): JSX.Element;
}
