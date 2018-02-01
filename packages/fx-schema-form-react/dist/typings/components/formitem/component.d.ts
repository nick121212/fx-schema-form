/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "../default.props";
export interface Props extends DefaultProps {
}
export declare class SchemaFormItem extends PureComponent<Props, any> {
    constructor(props: Props, context: any);
    render(): JSX.Element | null;
}
