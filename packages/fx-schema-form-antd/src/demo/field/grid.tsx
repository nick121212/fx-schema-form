import React from "react";
import { Card, Col } from "antd";
import { ColProps } from "antd/lib/grid/col";

import { SchemaFormItemProps, SchemaForm } from "../../index";

export class GridColField extends React.PureComponent<SchemaFormItemProps> {

    private getColProps(): ColProps {
        const { formItemData } = this.props;
        const { span, push, offset } = formItemData;
        let props: ColProps = {};

        if (push) {
            props.push = push;
        }
        if (offset) {
            props.offset = offset;
        }

        props.span = span || 24;

        return props;
    }

    public render(): JSX.Element {
        const { mergeSchema, currentTheme, getCurrentState, formItemData, ItemButtons, getHocOptions, uiSchemaOptions,
            arrayIndex, arrayLevel, WidgetComponent, globalOptions, schemaFormOptions, schemaKey } = this.props;
        const { uiSchema } = mergeSchema;
        const { gridcol = { image: false } } = uiSchemaOptions || {};
        const { gridcol: gridDefault = {} } = globalOptions || {};

        return (
            <Col {...this.getColProps() }>
                {
                    gridcol.image ?
                        <img style={{ width: "100%" }} src={formItemData.image} /> :
                        <SchemaForm
                            arrayIndex={arrayIndex}
                            schemaFormOptions={schemaFormOptions}
                            ItemButtons={ItemButtons}
                            getCurrentState={getCurrentState}
                            schemaKey={schemaKey}
                            arrayLevel={arrayLevel}
                            schema={mergeSchema}
                            parentKeys={mergeSchema.originKeys}
                            RootComponent={uiSchema.root}
                            uiSchema={uiSchema.items || ["*"]}
                            globalOptions={globalOptions}>
                        </SchemaForm>
                }
            </Col>
        );
    }
}
