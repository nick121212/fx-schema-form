/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ArrayHocOutProps } from "fx-schema-form-react/libs/hocs/array";
export interface Props extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}
export declare class DivTemp extends PureComponent<Props, any> {
    render(): JSX.Element;
}
