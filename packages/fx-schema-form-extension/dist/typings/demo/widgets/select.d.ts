import { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { UtilsHocOutProps } from "fx-schema-form-react/libs/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/libs/hocs/validate";
export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}
export declare class AntdSelectWidget extends PureComponent<AntdInputWidgetProps, any> {
    private setDefaultProps;
    render(): JSX.Element;
}
