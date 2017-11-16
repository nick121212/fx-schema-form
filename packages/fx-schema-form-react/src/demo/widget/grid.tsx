import React, { SyntheticEvent, ReactText } from "react";
import { InputNumber, Row, Col } from "antd";
import { RowProps } from "antd/lib/grid/row";

import { SchemaFormItemProps } from "./../../index";

export interface AntdGridWidgetProps extends SchemaFormItemProps {
}

export class AntdGridWidget extends React.Component<AntdGridWidgetProps, any> {
    private setDefaultProps(): RowProps {
        const { mergeSchema } = this.props;
        const props: RowProps = {};

        if (typeof this.props.formItemData !== "number") {
            // props.value = NaN;
        } else {
            // props.value = this.props.formItemData;
        }

        return props;
    }

    public render(): JSX.Element {
        const { mergeSchema, globalOptions, uiSchemaOptions, validate, updateItemData } = this.props;
        const { col = {} } = uiSchemaOptions.widget || {};
        const { col: colDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema as any;

        return (
            <Col
                {...col }
                {...colDefault }
                {...this.setDefaultProps() }>
            </Col >
        );
    }
}
