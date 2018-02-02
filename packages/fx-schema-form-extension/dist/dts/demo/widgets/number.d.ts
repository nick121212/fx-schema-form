/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}
export declare class AntdInputNumberWidget extends PureComponent<AntdInputWidgetProps, any> {
    private _count;
    private setDefaultProps();
    render(): JSX.Element;
}
