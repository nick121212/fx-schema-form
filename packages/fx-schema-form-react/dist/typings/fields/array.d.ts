/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
export interface ArrayFieldProps extends DefaultProps, UtilsHocOutProps {
}
export declare class ArrayField extends PureComponent<ArrayFieldProps, any> {
    private renderItem(idx);
    render(): JSX.Element | null;
}
