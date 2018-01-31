/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/dist/dts/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/dts/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/dts/hocs/validate";
export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}
export declare class AntdInputWidget extends PureComponent<AntdInputWidgetProps, any> {
    private _count;
    private setDefaultProps();
    render(): JSX.Element;
}
