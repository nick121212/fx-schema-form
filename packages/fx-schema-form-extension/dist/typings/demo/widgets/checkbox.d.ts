import { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
export interface AntdCheckBoxProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}
export declare class AntdCheckboxWidget extends PureComponent<AntdCheckBoxProps, any> {
    private setDefaultProps;
    render(): JSX.Element;
}
