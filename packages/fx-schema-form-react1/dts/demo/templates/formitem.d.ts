/// <reference types="react" />
import React from "react";
import { DefaultProps } from "../../index";
import { UtilsHocOutProps } from "../../hocs/utils";
import { ArrayHocOutProps } from "../../hocs/array";
export interface AntdFormItemTempProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}
export declare class AntdFormItemTemp extends React.PureComponent<AntdFormItemTempProps, any> {
    render(): JSX.Element;
}
