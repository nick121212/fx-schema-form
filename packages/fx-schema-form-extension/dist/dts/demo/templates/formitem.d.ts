/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/dist/dts/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/dts/hocs/utils";
import { ArrayHocOutProps } from "fx-schema-form-react/dist/dts/hocs/array";
export interface AntdFormItemTempProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}
export declare class AntdFormItemTemp extends PureComponent<AntdFormItemTempProps, any> {
    render(): JSX.Element;
}
