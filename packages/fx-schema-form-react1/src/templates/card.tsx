import React from "react";
import { connect } from "react-redux";
import { Card } from "antd";
import { shouldUpdate, onlyUpdateForKeys, compose } from "recompose";
import { DefaultProps } from "../components";
import { UtilsHocOutProps } from "../hocs/utils";

export interface AntdCardTempProps extends DefaultProps, UtilsHocOutProps {
    tempKey: string;
}

export class AntdCardTemp extends React.PureComponent<AntdCardTempProps, any> {
    public render(): JSX.Element {
        const { children, tempKey, getOptions, getTitle } = this.props;
        const tempOptions = getOptions(this.props, "temp", tempKey);
        // let { isValid = true, errorText = "", isShow = true } = meta || {};

        return (
            <Card title={getTitle(this.props).toString()}  {...tempOptions.options}>
                {children}
            </Card>
        );
    }
}
