import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Card from "antd/lib/card";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ArrayHocOutProps } from "fx-schema-form-react/dist/typings/hocs/array";


export interface AntdCardTempProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}

export class AntdCardTemp extends PureComponent<AntdCardTempProps, any> {
    public render(): JSX.Element {
        const { children, tempKey, getOptions, getTitle, initArrayComponent, formItemMeta, uiSchema, arrayLevel } = this.props;
        const tempOptions = getOptions(this.props, "temp", tempKey);
        let { isValid = true, errorText = "", collapsing = false } = formItemMeta ? formItemMeta.toJS() : {};

        return (
            <Card title={getTitle(this.props).toString()}
                {...tempOptions.options}
                extra={initArrayComponent ? initArrayComponent(this.props) : null}>
                {collapsing ? <span>折叠中</span> : children}
                {isValid ? null : errorText}
            </Card>
        );
    }
}
