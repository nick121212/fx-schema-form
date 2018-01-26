import React from "react";

import { DefaultProps, FxUiSchema } from "../index";
import { hoc } from "./container";
import { MergeHocOutProps } from "../../hocs/merge";
import { SchemaFormItem } from "../formitem/index";

export interface Props extends DefaultProps {
    RootComponent?: any;
}

@hoc
export class SchemaForm extends React.PureComponent<Props, any> {
    public render() {
        const { schemaId, mergeSchemaList, arrayLevel, RootComponent, ...extraProps } = this.props as Props & MergeHocOutProps;
        const formItemList = mergeSchemaList.map((uiScehma: FxUiSchema, idx: number) => {
            let arrayLevelCopy = arrayLevel ? arrayLevel.concat([]) : [];

            return <SchemaFormItem key={idx}
                {...extraProps}
                schemaId={schemaId}
                uiSchema={uiScehma}
                arrayLevel={arrayLevelCopy}
            />;
        });

        if (RootComponent) {
            return <RootComponent children={formItemList} />;
        }

        return (
            <div>
                {formItemList}
            </div>
        );
    }
}
