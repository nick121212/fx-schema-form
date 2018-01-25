/// <reference types="react" />
import React from "react";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
export interface AntdCheckBoxProps extends DefaultProps, UtilsHocOutProps {
}
export declare class AntdCheckboxWidget extends React.PureComponent<AntdCheckBoxProps, any> {
    private setDefaultProps();
    render(): JSX.Element;
}
