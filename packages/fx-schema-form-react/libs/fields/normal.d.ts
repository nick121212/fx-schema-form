/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
import { FieldHocOutProps } from "../hocs/field";
export interface NormalFieldProps extends DefaultProps, UtilsHocOutProps, FieldHocOutProps {
}
export declare const name = "normal";
export declare class NormalField extends PureComponent<NormalFieldProps> {
    render(): JSX.Element | null;
}
declare const _default: {
    [name]: typeof NormalField;
    default: typeof NormalField;
};
export default _default;
