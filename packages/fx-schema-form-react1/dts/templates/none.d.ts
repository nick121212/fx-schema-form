/// <reference types="react" />
import React from "react";
import { DefaultProps } from "../components/default.props";
import { UtilsHocOutProps } from "../hocs/utils";
export interface DivTempProps extends DefaultProps, UtilsHocOutProps {
    tempKey: string;
}
export declare class NoneTemp extends React.PureComponent<DivTempProps, any> {
    render(): any;
}
