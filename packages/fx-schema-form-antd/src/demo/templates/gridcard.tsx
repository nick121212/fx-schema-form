import React from "react";
import { Card, Row, Col } from "antd";

import { SchemaFormItemProps } from "./../../index";

export interface AntdCardTempProps extends SchemaFormItemProps {
    tempKey: string;
}

export class AntdCardTemp extends React.Component<AntdCardTempProps, any> {
    public render(): JSX.Element {
        const { children, globalOptions, tempKey, uiSchemaOptions, mergeSchema, ItemButtons, meta } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { uiSchema, title } = mergeSchema;
        let { dirty, isValid, errorText = "" } = meta;
        let { showButtons, ...extra } = tempOptions;

        return (
            <Card {...extra} extra={showButtons ? <Col>{ItemButtons ? <ItemButtons /> : null}</Col> : null}>
                <Row type="flex">
                    {children}
                </Row>
            </Card>
        );
    }
}
