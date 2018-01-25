/// <reference types="react" />
import React from "react";
import { DefaultProps } from "../components";
export interface ArrayFieldProps extends DefaultProps {
}
export declare class ArrayField extends React.PureComponent<ArrayFieldProps, any> {
    private renderItem(idx, maxLen);
    render(): JSX.Element | null;
}
