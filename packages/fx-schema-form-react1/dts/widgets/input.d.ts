/// <reference types="react" />
import React from "react";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
import { ValidateHocOutProps } from "../hocs/validate";
export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}
export declare class AntdInputWidget extends React.PureComponent<AntdInputWidgetProps, any> {
    private setDefaultProps();
    render(): JSX.Element;
}
