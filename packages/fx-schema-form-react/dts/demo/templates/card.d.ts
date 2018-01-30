/// <reference types="react" />
import React from "react";
import { DefaultProps } from "../../components";
import { UtilsHocOutProps } from "../../hocs/utils";
import { ArrayHocOutProps } from "../../hocs/array";
export interface AntdCardTempProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}
export declare class AntdCardTemp extends React.PureComponent<AntdCardTempProps, any> {
    render(): JSX.Element;
}
