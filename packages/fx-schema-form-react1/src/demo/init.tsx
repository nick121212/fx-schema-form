import Immutable from "immutable";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import ajv from "ajv";
import React from "react";
import * as ajvErrors from "ajv-errors";

import { defaultTheme, hocFactory, DefaultProps } from "../index";
import { NoneTemp, AntdCardTemp, AntdFormItemTemp } from "./templates";
import { AntdCheckboxWidget, AntdInputWidget } from "./widgets";
import { compose } from "recompose";
import { Button } from "antd";
import { ArrayHocOutProps } from "../hocs/array";
import { UtilsHocOutProps } from "../hocs/utils";
import { ValidateHocOutProps } from "../hocs/validate";

defaultTheme.tempFactory.add("default", NoneTemp as any);
defaultTheme.tempFactory.add("card", AntdCardTemp as any);
defaultTheme.tempFactory.add("formitem", AntdFormItemTemp as any);

defaultTheme.widgetFactory.add("checkbox", AntdCheckboxWidget as any);
defaultTheme.widgetFactory.add("default", AntdInputWidget as any);

@(compose(
    hocFactory.get("validate")(),
    hocFactory.get("array")(),
    hocFactory.get("data")({
        rootReducerKey: ["schemaForm"],
        data: true,
        dataLength: true,
        meta: true
    })
))
export class ArrayComponent extends React.PureComponent<DefaultProps & ArrayHocOutProps & ValidateHocOutProps> {
    private addItem;
    private hideItems;

    constructor(props: DefaultProps & ArrayHocOutProps & ValidateHocOutProps) {
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
    hocFactory.get("validate")(),
    hocFactory.get("array")()
))
export class ArrayItemComponent extends React.PureComponent<DefaultProps & ArrayHocOutProps & UtilsHocOutProps> {
    private removeItem;
    private moveTo;

    constructor(props: DefaultProps & ArrayHocOutProps & UtilsHocOutProps) {
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
            widgetHocs: [hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                data: true
            })]
        },
        array: {
            temps: ["card"],
            fieldHocs: [hocFactory.get("data")({
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
            tempHocs: [hocFactory.get("data")({
                rootReducerKey: ["schemaForm"],
                meta: true
            }), immutableRenderDecorator]
        },
        formitem: {
            tempHocs: [hocFactory.get("data")({
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
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
});

ajvErrors.default(curAjv, {
    keepErrors: false,
    singleError: false
});

curAjv.addKeyword("idExists", {
    async: true,
    type: "string",
    validate: checkIdExists as any
});

function checkIdExists(schema, data) {
    console.log("dfjkladjsklfklakdls");
    return new Promise((resolve, reject) => {
        console.log("object");
        setTimeout(() => {
            if (data === "nick") {
                return resolve(true);
            }
            return reject(new Error("idExists不是nick"));
        }, 2000);
    });
}
