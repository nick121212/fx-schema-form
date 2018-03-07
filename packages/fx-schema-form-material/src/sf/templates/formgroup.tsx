import React, { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ArrayHocOutProps } from "fx-schema-form-react/dist/typings/hocs/array";
import schemaFormReact from "fx-schema-form-react";
import { FormGroup, FormLabel, FormControl, Divider } from "material-ui";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ArrayHocOutProps {
}

export const tempKey = "formGroup";

export class Temp extends PureComponent<Props> {
    public render(): any {
        const { children, getOptions, getTitle, initArrayComponent, formItemMeta, uiSchema, arrayLevel } = this.props;
        const tempOptions = getOptions(this.props, schemaFormTypes.template, tempKey);

        return (
            <FormControl component="div"
                className="flex"
                margin="normal">
                {
                    tempOptions.showTitle === false ? null :
                        <>
                            <FormLabel component="div" className="b bl bw1 pa2 ma1" {...tempOptions.label}>
                                {getTitle(this.props)}
                            </FormLabel>
                            {/* <Divider light={true} /> */}
                        </>
                }
                <FormGroup row={true} {...tempOptions.options}>
                    {children}
                </FormGroup>
            </FormControl>
        );
    }
}

export default {
    [tempKey]: Temp
};
