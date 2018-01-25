import React from "react";
import { connect } from "react-redux";
import { compose, shouldUpdate } from "recompose";

import { DefaultProps, FxUiSchema } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
import { FieldHocOutProps } from "../hocs/field";

export interface NormalFieldProps extends DefaultProps, UtilsHocOutProps, FieldHocOutProps {

}

// @(shouldUpdate(() => false) as any)
export class NormalField extends React.PureComponent<NormalFieldProps, any> {
    public render(): JSX.Element {
        const { WidgetComponent, FieldComponent, ...extraProps } = this.props;
        const fieldOptions = extraProps.getOptions(this.props, "field", "normal");
        const { keys } = extraProps.uiSchema as FxUiSchema;

        // let WidgetComponentWithHoc = compose(
        //     ...(fieldOptions.hocs || []),
        //     connect(mapFormItemDataProps)
        // )(WidgetComponent);

        if (!WidgetComponent) {
            return null;
        }

        return (
            <WidgetComponent key={keys.join(".")} {...extraProps} />
        );
    }
}
