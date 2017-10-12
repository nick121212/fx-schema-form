import React, { SyntheticEvent } from "react";
import { Switch } from "antd";
import { SwitchProps } from "antd/lib/switch";

import { SchemaFormItemProps } from "../components/formitem";

export interface AntdSwitchProps extends SchemaFormItemProps {
}

export class AntdSwitchWidget extends React.Component<AntdSwitchProps, any> {

    private setDefaultProps(): SwitchProps {
        const { mergeSchema } = this.props;
        const props: SwitchProps = {};

        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        } else {
            props.defaultChecked = mergeSchema.default;
        }

        return props;
    }

    public render(): JSX.Element {
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, meta, validate, updateItemData } = this.props;
        const { switch: switcho = {} } = uiSchemaOptions.widget || {};
        const { switch: switchDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <Switch onChange={(checked: boolean) => {
                updateItemData(checked);
                validate(checked);
            }}
                disabled={readonly}
                {...switchDefault}
                {...switcho}
                {...this.setDefaultProps() }></Switch >
        );
    }
}
