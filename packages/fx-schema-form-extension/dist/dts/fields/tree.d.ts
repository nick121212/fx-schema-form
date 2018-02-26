/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
export interface ObjectFieldProps extends DefaultProps, UtilsHocOutProps {
}
export declare const name = "tree";
export declare class TreeField extends PureComponent<ObjectFieldProps, any> {
    render(): JSX.Element | null;
}
declare const _default: {
    [name]: typeof TreeField;
};
export default _default;
