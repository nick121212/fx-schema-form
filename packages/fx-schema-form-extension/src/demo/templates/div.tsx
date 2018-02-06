import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ArrayHocOutProps } from "fx-schema-form-react/dist/typings/hocs/array";


export interface Props extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
    tempKey: string;
}

export class DivTemp extends PureComponent<Props, any> {
    public render(): JSX.Element {
        const { children, tempKey, getOptions, getTitle, initArrayComponent, formItemMeta } = this.props;
        const tempOptions = getOptions(this.props, "temp", tempKey,
            formItemMeta ? formItemMeta.get("options").getIn(["temp", tempKey]) : {});

        return (
            <div {...tempOptions.options}>
                这是一个DIV
                {children}
            </div>
        );
    }
}