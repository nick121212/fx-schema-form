/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/dist/dts/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/dts/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/dts/hocs/validate";
export interface AntdCheckBoxProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}
export declare class AntdCheckboxWidget extends PureComponent<AntdCheckBoxProps, any> {
    private setDefaultProps();
    render(): JSX.Element;
}
