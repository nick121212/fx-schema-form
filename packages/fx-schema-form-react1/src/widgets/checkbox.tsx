import React, { SyntheticEvent } from "react";

import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";
import {Checkbox} from "antd";

export interface AntdCheckBoxProps extends DefaultProps, UtilsHocOutProps {
}

export class AntdCheckboxWidget extends React.Component<AntdCheckBoxProps, any> {
    private setDefaultProps(): any {
        const { uiSchema } = this.props;
        const props: any = {};

        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        } else {
            props.defaultChecked = false;
        }

        return props;
    }

    public render(): JSX.Element {
        const { getOptions, uiSchema } = this.props;
        const { keys } = uiSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <Checkbox onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                // updateItemData((e.target as any).checked);
                // validate((e.target as any).checked);
            }}
                disabled={readonly}
                {...getOptions(this.props, "widget", "checkbox") }
                {...this.setDefaultProps() }
            ></Checkbox>
        );
    }
}
