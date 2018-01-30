/// <reference types="react" />
import { PureComponent } from "react";
import { UtilsHocOutProps } from "../../hocs/utils";
import { DefaultProps } from "../../../dts/components";
export interface AntdCheckBoxProps extends DefaultProps, UtilsHocOutProps {
}
export declare class AntdCheckboxWidget extends PureComponent<AntdCheckBoxProps, any> {
    private setDefaultProps();
    render(): JSX.Element;
}
