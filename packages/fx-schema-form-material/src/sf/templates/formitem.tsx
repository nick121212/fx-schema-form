import React, { PureComponent } from "react";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ArrayHocOutProps } from "fx-schema-form-react/dist/typings/hocs/array";
import schemaFormReact from "fx-schema-form-react";
import { FormControl, InputLabel, FormHelperText, FormGroup, Grid, Icon } from "material-ui";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps,
    UtilsHocOutProps,
    ArrayHocOutProps { }

export const tempKey = "formItem";

export class Temp extends PureComponent<Props> {
    public render() {
        const {
            children,
            getOptions,
            getTitle,
            initArrayComponent,
            formItemMeta,
            uiSchema,
            arrayIndex
        } = this.props;
        const tempOptions = getOptions(this.props, schemaFormTypes.template, tempKey);
        const {
            isValid = true,
            errorText = "",
            collapsing = false,
            isLoading = false,
            dirty = false
        } = formItemMeta
                ? formItemMeta.toJS()
                : {};

        if (!uiSchema) {
            return null;
        }

        return (
            <FormGroup row={true} className="flex-auto">
                <Grid container={true} alignItems="flex-end" spacing={0}>
                    <Grid item xs={true}>
                        <FormControl
                            error={!isValid}
                            margin="normal"
                            required={uiSchema.isRequired}
                            {...tempOptions.options}>
                            {tempOptions.showTitle === false
                                ? null
                                : <InputLabel htmlFor={uiSchema.schemaPath}>{getTitle(this.props)}</InputLabel>
                            }
                            {children}
                            {(uiSchema.description)
                                ? <FormHelperText error={false}>
                                    {uiSchema.description}
                                </FormHelperText>
                                : null
                            }
                            {!isValid
                                ? <FormHelperText className="tr" error={!isValid}>
                                    {errorText}
                                </FormHelperText>
                                : null
                            }
                        </FormControl>
                    </Grid>
                    <Grid item>
                        {initArrayComponent
                            ? initArrayComponent(this.props, arrayIndex)
                            : null}
                    </Grid>
                </Grid>
            </FormGroup>
        );
    }
}

export default {
    [tempKey]: Temp
};
