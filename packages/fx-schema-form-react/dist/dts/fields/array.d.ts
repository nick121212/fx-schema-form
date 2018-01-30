/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "../components";
export interface ArrayFieldProps extends DefaultProps {
}
export declare class ArrayField extends PureComponent<ArrayFieldProps, any> {
    private renderItem(idx);
    render(): JSX.Element | null;
}
