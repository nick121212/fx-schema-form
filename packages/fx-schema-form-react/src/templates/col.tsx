import React from "react";
import { Col } from "antd";

import { SchemaFormItemProps } from "../components/formitem";
import { shouldUpdate } from "recompose";

export interface AntdColTempProps extends SchemaFormItemProps {
    tempKey: string;
}

@(shouldUpdate(() => false) as any)
export class AntdColTemp extends React.PureComponent<AntdColTempProps, any> {
    public render(): JSX.Element {
        const { children, globalOptions, mergeSchema, tempKey, uiSchemaOptions } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});

        return (
            <Col {...tempOptions}>
                {children}
            </Col>
        );
    }
}
