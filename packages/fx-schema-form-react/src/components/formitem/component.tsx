import React, { PureComponent } from "react";
import { compose } from "redux";

import { DefaultProps } from "../default.props";
import { hoc } from "./container";
import { FieldHocOutProps } from "../../hocs/field";
import { UtilsHocOutProps } from "../../hocs/utils";

export interface Props extends DefaultProps {

}

@(hoc as any)
export class SchemaFormItem extends PureComponent<Props, any> {

    constructor(props: Props, context: any) {
        super(props, context);
    }

    public render() {
        const { FieldComponent, uiSchema, ...extraProps } = this.props as Props & FieldHocOutProps & UtilsHocOutProps;
        const options = extraProps.getOptions(this.props, "field", (uiSchema as any).field || (uiSchema as any).type);
        let FieldComponentWithHoc = FieldComponent;

        if (!FieldComponent) {
            console.log(uiSchema, "没有找到匹配的field");
            return null;
        }

        if (options.fieldHocs && options.fieldHocs.length) {
            FieldComponentWithHoc = compose(
                ...(options.fieldHocs || [])
            )(FieldComponent);
        }

        return <FieldComponentWithHoc key={(uiSchema as any).keys.join("formItem")} uiSchema={uiSchema} {...extraProps} />;
    }
}
