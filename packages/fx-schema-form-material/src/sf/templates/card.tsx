import React, { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ArrayHocOutProps } from "fx-schema-form-react/dist/typings/hocs/array";
import schemaFormReact from "fx-schema-form-react";
import { Card, CardHeader, IconButton, Icon, CardContent, Typography, CardActions, Collapse, Divider, FormHelperText, Avatar } from "material-ui";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
}

export const tempKey = "card";

export class Temp extends PureComponent<Props> {
    public render(): any {
        const { children, getOptions, getTitle, initArrayComponent, formItemMeta, formItemData, uiSchema, arrayIndex } = this.props;
        const tempOptions = getOptions(this.props, schemaFormTypes.template, tempKey);
        const { isValid = true, errorText = "", collapsing = false, isLoading = false } = formItemMeta ? formItemMeta.toJS() : {};

        if (!uiSchema) {
            return null;
        }

        return (
            <Card {...tempOptions.options}>
                <CardHeader
                    action={
                        initArrayComponent ? initArrayComponent(this.props, arrayIndex) : null
                    }
                    className="pl0"
                    avatar={
                        tempOptions.icon ? <Avatar aria-label="Card-Icon">
                            <Icon>{tempOptions.icon}</Icon>
                        </Avatar> : null
                    }
                    title={getTitle(this.props)}
                    subheader={(tempOptions.showCount !== false && uiSchema.type === "array") ? `当前有${formItemData || 0}项` : ""}
                    {...tempOptions.header}
                />
                <Divider />
                <Collapse in={!collapsing && ((formItemData && uiSchema.type === "array") || uiSchema.type !== "array")}
                    timeout="auto" unmountOnExit>
                    <CardContent {...tempOptions.content}>
                        {children}
                    </CardContent>
                </Collapse>
                {/* {
                    (tempOptions.showCount !== false && uiSchema.type === "array") ? <CardContent className="pb0">
                        <FormHelperText >当前有{formItemData || 0}项</FormHelperText>
                    </CardContent> : null
                } */}
                {
                    <Collapse in={!isValid} timeout="auto" unmountOnExit>
                        <CardContent className="pt0">
                            <FormHelperText className="tr" error={!isValid}>{errorText}</FormHelperText>
                        </CardContent>
                    </Collapse>
                }
            </Card>
        );
    }
}

export default {
    [tempKey]: Temp
};
