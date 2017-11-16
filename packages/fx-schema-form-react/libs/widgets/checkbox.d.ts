/// <reference types="react" />
import React from "react";
import { SchemaFormItemProps } from "../components/formitem";
export interface AntdCheckBoxProps extends SchemaFormItemProps {
}
export declare class AntdCheckboxWidget extends React.Component<AntdCheckBoxProps, any> {
    private setDefaultProps();
    render(): JSX.Element;
}
