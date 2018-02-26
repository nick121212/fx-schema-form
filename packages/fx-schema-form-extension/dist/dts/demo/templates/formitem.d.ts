/// <reference types="react" />
import { PureComponent } from "react";
import { ArrayHocOutProps } from "fx-schema-form-react/dist/typings/hocs/array";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
export interface AntdFormItemTempProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}
export declare class AntdFormItemTemp extends PureComponent<AntdFormItemTempProps, any> {
    render(): JSX.Element;
}
