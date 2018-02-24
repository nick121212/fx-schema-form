/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
export interface ObjectFieldProps extends DefaultProps, UtilsHocOutProps {
}
export declare const name = "object";
export declare class ObjectField extends PureComponent<ObjectFieldProps, any> {
    render(): JSX.Element | null;
}
declare const _default: {
    [name]: typeof ObjectField;
};
export default _default;
