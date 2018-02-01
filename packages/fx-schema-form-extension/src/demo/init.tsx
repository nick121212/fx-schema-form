import Immutable from "immutable";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import ajv from "ajv";
import React, { PureComponent } from "react";
import ajvErrors from "ajv-errors";
import { compose } from "recompose";
import { Button } from "antd";

import schemaFormReact from "fx-schema-form-react";
import { NoneTemp, AntdCardTemp, AntdFormItemTemp } from "./templates";
import { AntdCheckboxWidget, AntdInputWidget } from "./widgets";
import { DefaultProps } from "fx-schema-form-react/dist/typings/components";


schemaFormReact.defaultTheme.tempFactory.add("default", NoneTemp as any);
schemaFormReact.defaultTheme.tempFactory.add("card", AntdCardTemp as any);
schemaFormReact.defaultTheme.tempFactory.add("formitem", AntdFormItemTemp as any);

schemaFormReact.defaultTheme.widgetFactory.add("checkbox", AntdCheckboxWidget as any);
schemaFormReact.defaultTheme.widgetFactory.add("default", AntdInputWidget as any);

@(compose(
    schemaFormReact.hocFactory.get("validate")(),
    schemaFormReact.hocFactory.get("array")(),
    schemaFormReact.hocFactory.get("data")({
        rootReducerKey: ["schemaForm"],
        data: true,
        dataLength: true,
        meta: true
    })
) as any)
export class ArrayComponent extends PureComponent<DefaultProps & any> {
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
            <Button.Group key="opt">
                <Button key={"add" + canAdd} type="primary" icon="plus" disabled={!canAdd} onClick={this.addItem} />
                <Button key={"collapsing" + collapsing} type="primary" icon={collapsing ? "arrow-up" : "arrow-down"} onClick={() => {
                    this.hideItems(!collapsing);
                }} />
            </Button.Group>
        );
    }
}

@(compose(
    schemaFormReact.hocFactory.get("validate")(),
    schemaFormReact.hocFactory.get("array")()
) as any)
export class ArrayItemComponent extends PureComponent<DefaultProps & any> {
    private removeItem: any;
    private moveTo: any;

    constructor(props: DefaultProps & any) {
        super(props);

        this.removeItem = () => {
            props.removeItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex);
        };
        this.moveTo = () => {
            props.moveItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex, 0);
        };
    }

    public render() {
        const { addItem } = this.props;

        return <Button.Group key="opt">
            <Button key="remove" type="primary" icon="minus" onClick={this.removeItem} />
            <Button key="moveTo" type="primary" icon="swap-right" onClick={this.moveTo} />
        </Button.Group>;
    }
}

export const gloabelOptions = Immutable.fromJS({
    field: {
        default: {
            temps: ["formitem"],
            widgetHocs: [schemaFormReact.hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                data: true
            })]
        },
        array: {
            temps: ["card"],
            fieldHocs: [schemaFormReact.hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                data: true,
                dataLength: true
            })]
        },
        normal: {
        },
        object: {
            temps: ["card"]
        }
    },
    temp: {
        card: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                meta: true
            }), immutableRenderDecorator]
        },
        formitem: {
            tempHocs: [schemaFormReact.hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                meta: true
            }), immutableRenderDecorator],
            options: {
                labelCol: {
                    xs: { span: 24 },
                    sm: { span: 8 },
                },
                wrapperCol: {
                    xs: { span: 24 },
                    sm: { span: 16 },
                },
            }
        }
    },
    hoc: {
        array: {
            ArrayComponent: ArrayComponent,
            ArrayItemComponent: ArrayItemComponent
        }
    }
});

export const curAjv: ajv.Ajv = new ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    format: "full",
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
});

ajvErrors(curAjv, {
    keepErrors: false,
    singleError: false
});

curAjv.addKeyword("idExists", {
    async: true,
    type: "string",
    validate: checkIdExists as any
});

function checkIdExists(schema: any, data: any) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data === "nick") {
                return resolve(true);
            }
            reject(new (ajv.ValidationError as any)([{ message: "idExists不是nick" }] as any));
        }, 2000);
    });
}
