/// <reference types="react" />
import { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
export interface DivTempProps extends DefaultProps, UtilsHocOutProps {
    tempKey: string;
}
export declare class NoneTemp extends PureComponent<DivTempProps, any> {
    render(): any;
}
