import React from "react";
import Immutable from "immutable";
import schemaFormReact from "fx-schema-form-react";
import { compose, shouldUpdate } from "recompose";
import { DefaultProps } from "fx-schema-form-react/libs/components";
import { IconButton, Icon, Tooltip } from "material-ui";

const { hocFactory } = schemaFormReact;

@(compose(
    shouldUpdate(() => false),
    hocFactory.get("utils")(),
    hocFactory.get("validate")(),
    hocFactory.get("array")(),
    hocFactory.get("data")({
        rootReducerKey: ["schemaForm"],
        data: true,
        dataLength: true,
        meta: true
    })
) as any)
export class ArrayComponent extends React.PureComponent<DefaultProps & any> {
    private addItem: any;
    private hideItems: any;

    constructor(props: DefaultProps & any) {
        super(props);

        this.addItem = () => {
            props.addItem(this.props);
        };
        this.hideItems = (collapsing: boolean) => {
            props.updateItemMeta(props, null, {
                collapsing
            });
        };
    }

    public render() {
        const { uiSchema, formItemData, formItemMeta } = this.props;
        const { maxItems } = uiSchema;
        const { collapsing = false } = formItemMeta ? formItemMeta.toJS() : {};
        let canAdd = true;

        if (Number.isInteger(maxItems) && Number.isInteger(formItemData)) {
            canAdd = formItemData < maxItems;
        }

        return (
            <div key="opt">
                <Tooltip title="添加项">
                    <IconButton key={"add" + canAdd} color="primary" aria-label="Add" disabled={!canAdd} onClick={this.addItem}>
                        <Icon>add</Icon>
                    </IconButton>
                </Tooltip>
                <Tooltip title="隐藏/显示">
                    <IconButton key={"collapsing" + collapsing} aria-label="Collapsing" onClick={() => {
                        this.hideItems(!collapsing);
                    }}>
                        <Icon>{collapsing ? "keyboard_arrow_down" : "keyboard_arrow_up"}</Icon>
                    </IconButton>
                </Tooltip>
            </div>
        );
    }
}

@(compose(
    hocFactory.get("validate")(),
    hocFactory.get("array")()
) as any)
export class ArrayItemComponent extends React.PureComponent<DefaultProps & any> {
    private removeItem: any;
    private moveTo: any;

    constructor(props: DefaultProps & any) {
        super(props);
    }

    public render() {
        const { addItem } = this.props;

        this.removeItem = () => {
            this.props.removeItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex);
        };
        this.moveTo = () => {
            this.props.moveItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex, 0);
        };

        return (
            <Tooltip title="删除项">
                <IconButton aria-label="Remove" color="secondary" onClick={this.removeItem}>
                    <Icon>remove</Icon>
                </IconButton>
            </Tooltip>
        );
    }
}
