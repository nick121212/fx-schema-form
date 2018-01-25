import React from "react";

import { DefaultProps, FxUiSchema } from "../index";
import { hoc } from "./container";
import { MergeHocOutProps } from "../../hocs/merge";
import { SchemaFormItem } from "../formitem/index";

export interface Props extends DefaultProps {

}

@hoc
export class SchemaForm extends React.PureComponent<Props, any> {
    public render() {
        const { schemaId, mergeSchemaList, arrayLevel, ...extraProps } = this.props as Props & MergeHocOutProps;

        return (
            <div>
                {
                    mergeSchemaList.map((uiScehma: FxUiSchema, idx: number) => {
                        let arrayLevelCopy = arrayLevel ? arrayLevel.concat([]) : [];

                        return <SchemaFormItem key={idx}
                            {...extraProps}
                            schemaId={schemaId}
                            uiSchema={uiScehma}
                            arrayLevel={arrayLevelCopy}
                        />;
                    })
                }
            </div>
        );
    }
}
