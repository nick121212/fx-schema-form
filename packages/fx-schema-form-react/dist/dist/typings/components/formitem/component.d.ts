/// <reference types="react" />
import { PureComponent } from "react";
import { ValidationMap } from "prop-types";
import { DefaultProps } from "../default.props";
export interface Props extends DefaultProps {
}
export declare class SchemaFormItem extends PureComponent<Props, any> {
    static propTypes: ValidationMap<Props>;
    render(): JSX.Element;
}
