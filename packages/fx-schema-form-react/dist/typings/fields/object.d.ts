/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
export interface ObjectFieldProps extends DefaultProps, UtilsHocOutProps {
}
export declare class ObjectField extends PureComponent<ObjectFieldProps, any> {
    render(): JSX.Element | null;
}
