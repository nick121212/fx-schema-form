/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps, FxUiSchema } from "../index";
import { MergeHocOutProps } from "../../hocs/merge";
export interface Props extends DefaultProps, MergeHocOutProps {
    RootComponent?: any;
    uiSchemas?: Array<string | FxUiSchema>;
}
export declare class SchemaForm extends PureComponent<Props, any> {
    render(): JSX.Element;
}
