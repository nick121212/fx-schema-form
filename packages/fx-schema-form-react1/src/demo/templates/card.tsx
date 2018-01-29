import React from "react";
import { connect } from "react-redux";
import { Card } from "antd";
import { shouldUpdate, onlyUpdateForKeys, compose } from "recompose";
import { DefaultProps } from "../../components";
import { UtilsHocOutProps } from "../../hocs/utils";
import { ArrayHocOutProps } from "../../hocs/array";

export interface AntdCardTempProps extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}

export class AntdCardTemp extends React.PureComponent<AntdCardTempProps, any> {
    public render(): JSX.Element {
        const { children, tempKey, getOptions, getTitle, initArrayComponent, formItemMeta } = this.props;
        const tempOptions = getOptions(this.props, "temp", tempKey);
        let { isValid = true, errorText = "", collapsing = false } = formItemMeta ? formItemMeta.toJS() : {};

        return (
            <Card title={getTitle(this.props).toString()} {...tempOptions.options} extra={initArrayComponent(this.props)}>
                {collapsing ? <span>折叠中</span> : children}
            </Card>
        );
    }
}
