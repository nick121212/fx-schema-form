import React from "react";
import { compose } from "redux";

import { DefaultProps } from "../default.props";
import { hoc } from "./container";
import { FieldHocOutProps } from "../../hocs/field";
import { UtilsHocOutProps } from "../../hocs/utils";

export interface Props extends DefaultProps {

}

@hoc
export class SchemaFormItem extends React.PureComponent<Props, any> {

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

        FieldComponentWithHoc = compose(
            ...(options.hocs || [])
        )(FieldComponent);

        return <FieldComponentWithHoc uiSchema={uiSchema} {...extraProps} />;
    }
}
