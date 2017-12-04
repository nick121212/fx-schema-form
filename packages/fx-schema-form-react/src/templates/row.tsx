import React from "react";
import { Row } from "antd";

import { SchemaFormItemProps } from "../components/formitem";
import { shouldUpdate } from "recompose";

export interface AntdRowTempProps extends SchemaFormItemProps {
    tempKey: string;
}

@(shouldUpdate(() => false) as any)
export class AntdRowTemp extends React.PureComponent<AntdRowTempProps, any> {
    public render(): JSX.Element {
        const { children, globalOptions, tempKey, uiSchemaOptions, mergeSchema } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});

        return (
            <Row {...tempOptions}>
                {children}
            </Row>
        );
    }
}
