import React, { SyntheticEvent } from "react";

import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
import { Input } from "antd";
import { hocFactory } from "../factory";
import { FxUiSchema } from "../components/index";
import { schemaFormReducer } from "../reducer";

export interface AntdInputWidgetProps extends DefaultProps, UtilsHocOutProps {
}

export class AntdInputWidget extends React.PureComponent<AntdInputWidgetProps, any> {
    private setDefaultProps(): any {
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        } else {
            // props.defaultValue = mergeSchema.default;
            props.value = "";
        }

        return props;
    }

    public render(): JSX.Element {
        const { getOptions, uiSchema, getTitle, parentKeys, schemaId } = this.props;
        const { keys } = uiSchema as FxUiSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <Input
                onBlur={(e: SyntheticEvent<HTMLInputElement>) => {
                    schemaFormReducer.actions.updateItemMeta({
                        parentKeys: parentKeys,
                        keys: keys,
                        data: {
                            isValid: !!e.currentTarget.value,
                            dirty: true
                        }
                    });
                }}
                onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                    schemaFormReducer.actions.updateItemData({
                        parentKeys: parentKeys,
                        keys: keys,
                        data: e.currentTarget.value
                    });
                }}
                disabled={readonly}
                placeholder={getTitle(this.props)}
                {...getOptions(this.props, "widget", "input") }
                {...this.setDefaultProps() }>
            </Input>
        );
    }
}
