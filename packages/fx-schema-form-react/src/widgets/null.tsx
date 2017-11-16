import React, { SyntheticEvent } from "react";
import { Switch } from "antd";
import { SwitchProps } from "antd/lib/switch";

import { SchemaFormItemProps } from "../components/formitem";

export class NullWidget extends React.Component<any, any> {

    public render(): JSX.Element {
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, meta, validate, updateItemData } = this.props;
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <span>
                此值为Null值，这个有啥意思么
        </span>);
    }
}
