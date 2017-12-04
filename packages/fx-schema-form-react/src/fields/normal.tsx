import React from "react";
import { connect } from "react-redux";
import { RC } from "../types";
import { SchemaFormItemProps } from "../components/formitem";
import { compose, shouldUpdate } from "recompose";
import { mapFormItemDataProps } from "../hocs/select";

export interface NormalFieldProps extends SchemaFormItemProps {

}

// @(shouldUpdate(() => false) as any)
export class NormalField extends React.PureComponent<NormalFieldProps, any> {
    public render(): JSX.Element {
        const { mergeSchema, currentTheme, WidgetComponent, getFieldOptions } = this.props;
        const fieldOptions = getFieldOptions("normal");
        let WidgetComponentWithHoc = compose(
            connect(mapFormItemDataProps),
            ...(fieldOptions.hocs || [])
        )(WidgetComponent);

        return (
            <WidgetComponentWithHoc key={mergeSchema.keys.join(".")} {...this.props} />
        );
    }
}
