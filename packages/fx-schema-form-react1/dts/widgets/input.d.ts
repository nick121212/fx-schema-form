/// <reference types="react" />
import React from "react";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps {
}
export declare class AntdInputWidget extends React.PureComponent<AntdInputWidgetProps, any> {
    private setDefaultProps();
    render(): JSX.Element;
}
