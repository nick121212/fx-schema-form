import React from "react";

import { RC } from "../types";
import { SchemaFormItemProps } from "../components/formitem";

export interface StringFieldProps extends SchemaFormItemProps {

}

export class StringField extends React.Component<StringFieldProps, any> {
    public render(): JSX.Element {
        const { mergeSchema, currentTheme, WidgetComponent } = this.props;

        return (
            <WidgetComponent key={mergeSchema.keys.join(".")} {...this.props} />
        );
    }
}
