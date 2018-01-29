/// <reference types="react" />
import React from "react";
import { DefaultProps, FxUiSchema } from "../index";
export interface Props extends DefaultProps {
    RootComponent?: any;
    uiSchemas?: Array<string | FxUiSchema>;
}
export declare class SchemaForm extends React.PureComponent<Props, any> {
    render(): JSX.Element;
}
