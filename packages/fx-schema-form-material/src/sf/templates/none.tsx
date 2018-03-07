import React, { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import schemaFormReact from "fx-schema-form-react";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps {
}

export const tempKey = "none";

export class Temp extends PureComponent<Props> {
    public render(): any {
        const { children, getOptions } = this.props;
        const { className } = getOptions(this.props, schemaFormTypes.template, tempKey);

        return <div>
            {children}
        </div>;
    }
}

export default {
    [tempKey]: Temp
};
