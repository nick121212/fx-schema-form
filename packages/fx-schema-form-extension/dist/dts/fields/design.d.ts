/// <reference types="react" />
import React from "react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
export interface DesignFieldProps extends DefaultProps, UtilsHocOutProps {
}
export declare class DesignField extends React.PureComponent<DesignFieldProps, any> {
    private SchemaFormWithHoc;
    private SchemaFormItemWithHoc;
    constructor(props: DesignFieldProps);
    private initComponent();
    private renderItem(idx);
    render(): any;
}
