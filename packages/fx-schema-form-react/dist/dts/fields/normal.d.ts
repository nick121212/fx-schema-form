/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
import { FieldHocOutProps } from "../hocs/field";
export interface NormalFieldProps extends DefaultProps, UtilsHocOutProps, FieldHocOutProps {
}
export declare class NormalField extends PureComponent<NormalFieldProps> {
    constructor(props: NormalFieldProps, context: any);
    render(): JSX.Element;
}
