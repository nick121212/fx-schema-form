/// <reference types="react" />
import React from "react";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
import { FieldHocOutProps } from "../hocs/field";
export interface NormalFieldProps extends DefaultProps, UtilsHocOutProps, FieldHocOutProps {
}
export declare class NormalField extends React.PureComponent<NormalFieldProps, any> {
    render(): JSX.Element;
}
