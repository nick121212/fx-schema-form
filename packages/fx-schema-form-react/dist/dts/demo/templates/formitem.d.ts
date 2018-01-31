/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "../../../dist/dts/components/index";
import { UtilsHocOutProps } from "../../hocs/utils";
import { ArrayHocOutProps } from "../../hocs/array";
export interface AntdFormItemTempProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}
export declare class AntdFormItemTemp extends PureComponent<AntdFormItemTempProps, any> {
    render(): JSX.Element;
}
