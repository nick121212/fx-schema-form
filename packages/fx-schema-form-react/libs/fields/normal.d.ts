/// <reference types="react" />
import React from "react";
import { SchemaFormItemProps } from "../components/formitem";
export interface NormalFieldProps extends SchemaFormItemProps {
}
export declare class NormalField extends React.PureComponent<NormalFieldProps, any> {
    render(): JSX.Element;
}
