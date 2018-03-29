/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
export interface ArrayFieldProps extends DefaultProps, UtilsHocOutProps {
}
export declare const name = "array";
export declare class ArrayField extends PureComponent<ArrayFieldProps, any> {
    private SchemaFormWithHoc;
    private SchemaFormItemWithHoc;
    constructor(props: ArrayFieldProps);
    private initComponent();
    private renderItem(idx);
    render(): JSX.Element | null;
}
declare const _default: {
    [name]: typeof ArrayField;
};
export default _default;
