/// <reference types="react" />
import React from "react";
import { SchemaFormItemProps } from "../components/formitem";
export interface ArryFieldProps extends SchemaFormItemProps {
}
export declare class ArrayField extends React.PureComponent<ArryFieldProps, any> {
    private renderItem(idx, maxLen);
    render(): JSX.Element | null;
}
