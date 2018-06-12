import React from "react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
export interface DesignFieldProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}
export declare const name = "design";
export declare class DesignField extends React.PureComponent<DesignFieldProps, any> {
    private SchemaFormWithHoc;
    private SchemaFormItemWithHoc;
    constructor(props: DesignFieldProps, context: any);
    private initComponent;
    private renderItem;
    render(): any;
}
declare const _default: {
    [name]: typeof DesignField;
};
export default _default;
