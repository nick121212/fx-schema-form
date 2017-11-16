import React, { SyntheticEvent } from "react";
import { Checkbox } from "antd";
import { CheckboxProps } from "antd/lib/checkbox/Checkbox";

import { SchemaFormItemProps } from "../components/formitem";


export interface AntdCheckBoxProps extends SchemaFormItemProps {
}

export class AntdCheckboxWidget extends React.Component<AntdCheckBoxProps, any> {
    private setDefaultProps(): CheckboxProps {
        const { mergeSchema } = this.props;
        const props: CheckboxProps = {};

        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        } else {
            props.defaultChecked = mergeSchema.default;
        }

        return props;
    }

    public render(): JSX.Element {
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, meta, validate, updateItemData, getWidgetOptions } = this.props;
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <Checkbox onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                updateItemData((e.target as any).checked);
                validate((e.target as any).checked);
            }}
                disabled={readonly}
                {...getWidgetOptions("checkbox")}
                {...this.setDefaultProps() }
            ></Checkbox>
        );
    }
}
