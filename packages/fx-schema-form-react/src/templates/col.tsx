import React from "react";
import { Col } from "antd";

import { SchemaFormItemProps } from "../components/formitem";

export interface AntdColTempProps extends SchemaFormItemProps {
    tempKey: string;
}

export class AntdColTemp extends React.Component<AntdColTempProps, any> {
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
