/// <reference types="react" />
import React from "react";
import { SchemaFormItemProps } from "../components/formitem";
export interface AntdInputWidgetProps extends SchemaFormItemProps {
}
export declare class AntdInputWidget extends React.Component<AntdInputWidgetProps, any> {
    private setDefaultProps();
    render(): JSX.Element;
}
