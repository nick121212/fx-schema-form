import React from "react";

import { RC } from "../types";
import { SchemaFormItemProps } from "../components/formitem";

export interface StringFieldProps extends SchemaFormItemProps {

}

export class StringField extends React.Component<StringFieldProps, any> {
    public componentDidMount(): void {
        console.log("string mounted!");
    }
    public render(): JSX.Element {
        const { mergeSchema, currentTheme, WidgetComponent } = this.props;

        console.log("field render", mergeSchema.keys.join("."));

        return (
            <WidgetComponent key={mergeSchema.keys.join(".")} {...this.props} />
        );
    }
}
