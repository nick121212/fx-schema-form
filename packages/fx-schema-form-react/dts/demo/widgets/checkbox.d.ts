/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "../../index";
import { UtilsHocOutProps } from "../../hocs/utils";
export interface AntdCheckBoxProps extends DefaultProps, UtilsHocOutProps {
}
export declare class AntdCheckboxWidget extends PureComponent<AntdCheckBoxProps, any> {
    private setDefaultProps();
    render(): JSX.Element;
}
