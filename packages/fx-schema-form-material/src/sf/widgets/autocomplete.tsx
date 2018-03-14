import React, { PureComponent, SyntheticEvent, ChangeEvent } from "react";
import Immutable from "immutable";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";
import { UtilsHocOutProps } from "fx-schema-form-react/dist/typings/hocs/utils";
import { ValidateHocOutProps } from "fx-schema-form-react/dist/typings/hocs/validate";
import { FxUiSchema } from "fx-schema-form-react/dist/typings/models";
import { Input, MenuItem, Typography, Icon, withStyles, InputAdornment } from "material-ui";
import schemaFormReact from "fx-schema-form-react";
import { fromJS } from "immutable";
import Select, { OptionComponentProps } from "react-select";

import "react-select/dist/react-select.css";

const { schemaFormTypes } = schemaFormReact;

export interface Props extends DefaultProps, UtilsHocOutProps, ValidateHocOutProps {
}


export const widgetKey = "autocomplete";

const ITEM_HEIGHT = 48;

const styles = (theme: any) => ({
    root: {
        flexGrow: 1,
        height: 250,
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
    // We had to use a lot of global selectors in order to style react-select.
    // We are waiting on https://github.com/JedWatson/react-select/issues/1679
    // to provide a better implementation.
    // Also, we had to reset the default style injected by the library.
    "@global": {
        ".Select-control": {
            display: "flex",
            alignItems: "center",
            border: 0,
            height: "auto",
            background: "transparent",
            "&:hover": {
                boxShadow: "none",
            },
        },
        ".Select-multi-value-wrapper": {
            flexGrow: 1,
            display: "flex",
            flexWrap: "wrap",
        },
        ".Select--multi .Select-input": {
            margin: 0,
        },
        ".Select.has-value.is-clearable.Select--single > .Select-control .Select-value": {
            padding: 0,
        },
        ".Select-noresults": {
            padding: theme.spacing.unit * 2,
        },
        ".Select-input": {
            display: "inline-flex !important",
            padding: 0,
            height: "auto",
        },
        ".Select-input input": {
            background: "transparent",
            border: 0,
            padding: 0,
            cursor: "default",
            display: "inline-block",
            fontFamily: "inherit",
            fontSize: "inherit",
            margin: 0,
            outline: 0,
        },
        ".Select-placeholder, .Select--single .Select-value": {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.pxToRem(16),
            padding: 0,
        },
        ".Select-placeholder": {
            opacity: 0.42,
            color: theme.palette.common.black,
        },
        ".Select-menu-outer": {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[2],
            position: "absolute",
            left: 0,
            top: `calc(100% + ${theme.spacing.unit}px)`,
            width: "100%",
            zIndex: 2,
            maxHeight: ITEM_HEIGHT * 4.5,
        },
        ".Select.is-focused:not(.is-open) > .Select-control": {
            boxShadow: "none",
        },
        ".Select-menu": {
            maxHeight: ITEM_HEIGHT * 4.5,
            overflowY: "auto",
        },
        ".Select-menu div": {
            boxSizing: "content-box",
        },
        ".Select-arrow-zone, .Select-clear-zone": {
            color: theme.palette.action.active,
            cursor: "pointer",
            height: 21,
            width: 21,
            zIndex: 1,
        },
        // Only for screen readers. We can"t use display none.
        ".Select-aria-only": {
            position: "absolute",
            overflow: "hidden",
            clip: "rect(0 0 0 0)",
            height: 1,
            width: 1,
            margin: -1,
        },
    },
});

export class Option extends React.Component<OptionComponentProps<any>> {
    private handleClick() {
        const { onSelect } = this.props;


    }

    public render() {
        const { children, isFocused, isSelected, onFocus, onSelect } = this.props;

        return (
            <MenuItem
                onFocus={onFocus as any}
                selected={isFocused}
                onClick={(event: any) => {
                    if (onSelect) {
                        onSelect(this.props.option, event);
                    }
                }}
                component="div"
                style={{
                    fontWeight: isSelected ? 500 : 400,
                }}>
                {children}
            </MenuItem>
        );
    }
}

export class SelectWrapped extends React.PureComponent<any> {
    public render(): JSX.Element | null {
        return (
            <Select
                optionComponent={Option}
                noResultsText={<Typography>{"No results found"}</Typography>}
                arrowRenderer={(arrowProps: any) => {
                    return <Icon>{arrowProps.isOpen ? "arraydrop_up" : "arraydrop_down"}</Icon>;
                }}
                clearRenderer={() => <Icon>clear</Icon>}
                {...this.props} />
        );
    }
}

export class Widget extends PureComponent<Props, any> {
    private setDefaultProps(widgetOptions: any): any {
        const props: any = {
            placeholder: ""
        }, { uiSchema, updateItemData, validate, getTitle, formItemMeta } = this.props,
            isValid = formItemMeta ? formItemMeta.get("isValid") : true;

        props.value = "";
        if (widgetOptions.options.multiple) {
            props.value = [];
        }

        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
            if (Immutable.Map.isMap(props.value) || Immutable.List.isList(props.value)) {
                props.value = props.value.toJS();
            }
        }

        if (widgetOptions.children) {
            props.options = widgetOptions.children;
        }

        props.onChange = async (val: any) => {
            if (!val) {
                return updateItemData(this.props, undefined, await validate(this.props, undefined));
            }
            updateItemData(this.props, val.value, await validate(this.props, val.value));
        };

        props.id = uiSchema ? uiSchema.schemaPath : "";
        props.isValid = isValid === false;
        // props.placeholder = getTitle(this.props);

        return props;
    }

    public render(): JSX.Element | null {
        const { getOptions, uiSchema, formItemMeta, getTitle } = this.props,
            metaOptions = formItemMeta ? formItemMeta.getIn(["options", schemaFormTypes.widget, widgetKey]) : fromJS({}),
            widgetOptions = getOptions(this.props, schemaFormTypes.widget, widgetKey, metaOptions);
        const calcProps = this.setDefaultProps(widgetOptions);

        return (
            <Input
                endAdornment={
                    <InputAdornment position="start">
                        <Icon color="disabled">search</Icon>
                    </InputAdornment>
                }
                value={calcProps.value}
                inputComponent={SelectWrapped}
                inputProps={calcProps}
            />
        );
    }
}

export default {
    [widgetKey]: withStyles(styles)(Widget as any) as any
};
