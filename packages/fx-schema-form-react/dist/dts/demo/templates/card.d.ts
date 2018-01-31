/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "../../../dist/dts/components";
import { UtilsHocOutProps } from "../../hocs/utils";
import { ArrayHocOutProps } from "../../hocs/array";
export interface AntdCardTempProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}
export declare class AntdCardTemp extends PureComponent<AntdCardTempProps, any> {
    render(): JSX.Element;
}
