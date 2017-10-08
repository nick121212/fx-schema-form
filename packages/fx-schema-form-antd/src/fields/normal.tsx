import React from "react";

import { RC } from "../types";
import { SchemaFormItemProps } from "../components/formitem";

export interface NormalFieldProps extends SchemaFormItemProps {

}

export class NormalField extends React.Component<NormalFieldProps, any> {
    public render(): JSX.Element {
        const { mergeSchema, currentTheme, WidgetComponent } = this.props;

        return (
            <WidgetComponent key={mergeSchema.keys.join(".")} {...this.props} />
        );
    }
}
