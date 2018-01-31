/// <reference types="react" />
import { PureComponent } from "react";
import { UtilsHocOutProps } from "../../hocs/utils";
import { ValidateHocOutProps } from "../../hocs/validate";
import { DefaultProps } from "../../../dist/dts/components";
export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}
export declare class AntdInputWidget extends PureComponent<AntdInputWidgetProps, any> {
    private _count;
    private setDefaultProps();
    render(): JSX.Element;
}
