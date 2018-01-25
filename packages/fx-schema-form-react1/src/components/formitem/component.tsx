import React from "react";

import { DefaultProps } from "../default.props";
import { hoc } from "./container";
import { FieldHocOutProps } from "../../hocs/field";

export interface Props extends DefaultProps {

}

@hoc
export class SchemaFormItem extends React.PureComponent<Props, any> {

    constructor(props: Props, context: any) {
        super(props, context);
    }

    public render() {
        const { FieldComponent, uiSchema, ...extraProps } = this.props as Props & FieldHocOutProps;

        if (!FieldComponent) {
            console.log(uiSchema, "没有找到匹配的field");
            return null;
        }

        return <FieldComponent uiSchema={uiSchema} {...extraProps} />;
    }
}
