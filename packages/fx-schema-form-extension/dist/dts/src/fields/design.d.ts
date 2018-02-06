/// <reference types="react" />
import React from "react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/src/hocs/validate";
export interface DesignFieldProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}
export declare class DesignField extends React.PureComponent<DesignFieldProps, any> {
    private SchemaFormWithHoc;
    private SchemaFormItemWithHoc;
    constructor(props: DesignFieldProps, context: any);
    private initComponent();
    private renderItem(idx);
    render(): any;
}
