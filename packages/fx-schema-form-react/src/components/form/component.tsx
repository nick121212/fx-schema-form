import React, { PureComponent } from "react";
import { ValidationMap } from "prop-types";

import { DefaultProps } from "../index";
import { hoc } from "./container";
import { MergeHocOutProps } from "../../hocs/merge";
import { SchemaFormItem } from "../formitem/index";
import { FxUiSchema } from "../../models/index";

export interface Props extends DefaultProps, MergeHocOutProps {
    RootComponent?: any;
    uiSchemas?: Array<string | FxUiSchema>;
}

@(hoc as any)
export class SchemaForm extends PureComponent<Props, any> {
    public static propTypes: ValidationMap<Props>;

    public render() {
        const { schemaId, mergeSchemaList, arrayLevel, RootComponent, children, ...extraProps } = this.props;
        const formItemList = mergeSchemaList ? mergeSchemaList.map((uiScehma: FxUiSchema, idx: number) => {
            let arrayLevelCopy = arrayLevel ? arrayLevel.concat([]) : [];

            return <SchemaFormItem
                key={idx}
                {...extraProps}
                schemaId={schemaId}
                uiSchema={uiScehma}
                arrayLevel={arrayLevelCopy}
            />;
        }) : [];

        if (RootComponent) {
            return <RootComponent >
                {formItemList}
                {children}
            </RootComponent>;
        }

        return (
            <div>
                {formItemList}
                {children}
            </div>
        );
    }
}
