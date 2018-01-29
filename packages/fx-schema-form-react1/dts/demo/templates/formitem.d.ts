/// <reference types="react" />
import React from "react";
import { DefaultProps } from "../../index";
import { UtilsHocOutProps } from "../../hocs/utils";
export interface AntdFormItemTempProps extends DefaultProps, UtilsHocOutProps {
    tempKey: string;
}
export declare class AntdFormItemTemp extends React.PureComponent<AntdFormItemTempProps, any> {
    render(): JSX.Element;
}
