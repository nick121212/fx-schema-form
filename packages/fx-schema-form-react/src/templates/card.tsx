import React from "react";
import { Card } from "antd";

import { SchemaFormItemProps } from "../components/formitem";

export interface AntdCardTempProps extends SchemaFormItemProps {
    tempKey: string;
}

export class AntdCardTemp extends React.Component<AntdCardTempProps, any> {
    public render(): JSX.Element {
        const { children, globalOptions, tempKey, uiSchemaOptions, mergeSchema, ItemButtons, meta } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { uiSchema, title } = mergeSchema;
        let { dirty, isValid, errorText = "" } = meta;

        return (
            <Card title={title || uiSchema.title} extra={ItemButtons ? <ItemButtons /> : ""} bodyStyle={{
                "display": meta.isShow === false ? "none" : "block"
            }} {...tempOptions}>
                {children}
                {!isValid ? errorText : ""}
            </Card>
        );
    }
}
