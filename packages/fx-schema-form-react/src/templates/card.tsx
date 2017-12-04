import React from "react";
import { connect } from "react-redux";
import { Card } from "antd";
import { shouldUpdate, onlyUpdateForKeys, compose } from "recompose";
import isEqual from "lodash.isequal";

import { SchemaFormItemProps } from "../components/formitem";
import { mapMetaStateToProps } from "../hocs/select";

export interface AntdCardTempProps extends SchemaFormItemProps {
    tempKey: string;
}

@(compose(shouldUpdate(() => false),
    connect(mapMetaStateToProps),
    shouldUpdate((curProps: SchemaFormItemProps, nextProps: SchemaFormItemProps) => {
        return !isEqual(curProps.meta, nextProps.meta);
    })) as any)
export class AntdCardTemp extends React.PureComponent<AntdCardTempProps, any> {
    public render(): JSX.Element {
        const { children, globalOptions, tempKey, uiSchemaOptions, mergeSchema, ItemButtons, meta } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { uiSchema, title } = mergeSchema;
        let { isValid = true, errorText = "", isShow = true } = meta || {};

        console.log("antdCardTemp render");

        return (
            <Card title={title || uiSchema.title} extra={ItemButtons ? <ItemButtons /> : ""} bodyStyle={{
                "display": isShow === false ? "none" : "block"
            }} {...tempOptions}>
                {children}
                {!isValid ? errorText : ""}
            </Card>
        );
    }
}
