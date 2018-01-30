var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Immutable from "immutable";
import { immutableRenderDecorator } from "react-immutable-render-mixin";
import ajv from "ajv";
import React from "react";
import * as ajvErrors from "ajv-errors";
import { defaultTheme, hocFactory } from "../index";
import { NoneTemp, AntdCardTemp, AntdFormItemTemp } from "./templates";
import { AntdCheckboxWidget, AntdInputWidget } from "./widgets";
import { compose } from "recompose";
import { Button } from "antd";
defaultTheme.tempFactory.add("default", NoneTemp);
defaultTheme.tempFactory.add("card", AntdCardTemp);
defaultTheme.tempFactory.add("formitem", AntdFormItemTemp);
defaultTheme.widgetFactory.add("checkbox", AntdCheckboxWidget);
defaultTheme.widgetFactory.add("default", AntdInputWidget);
let ArrayComponent = class ArrayComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.addItem = () => {
            props.addItem(this.props);
        };
        this.hideItems = (collapsing) => {
            props.updateItemMeta(props, null, {
                collapsing
            });
        };
    }
    render() {
        const { uiSchema, formItemData, formItemMeta } = this.props;
        const { maxItems } = uiSchema;
        const { collapsing = false } = formItemMeta ? formItemMeta.toJS() : {};
        let canAdd = true;
        if (Number.isInteger(maxItems) && Number.isInteger(formItemData)) {
            canAdd = formItemData < maxItems;
        }
        return (React.createElement(Button.Group, { key: "opt" },
            React.createElement(Button, { key: "add" + canAdd, type: "primary", icon: "plus", disabled: !canAdd, onClick: this.addItem }),
            React.createElement(Button, { key: "collapsing" + collapsing, type: "primary", icon: collapsing ? "arrow-up" : "arrow-down", onClick: () => {
                    this.hideItems(!collapsing);
                } })));
    }
};
ArrayComponent = __decorate([
    (compose(hocFactory.get("validate")(), hocFactory.get("array")(), hocFactory.get("data")({
        rootReducerKey: ["schemaForm"],
        data: true,
        dataLength: true,
        meta: true
    }))),
    __metadata("design:paramtypes", [Object])
], ArrayComponent);
export { ArrayComponent };
let ArrayItemComponent = class ArrayItemComponent extends React.PureComponent {
    constructor(props) {
        super(props);
        this.removeItem = () => {
            props.removeItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex);
        };
        this.moveTo = () => {
            props.moveItem(this.props.parentKeys, this.props.getPathKeys(this.props.uiSchema.keys, "../"), this.props.arrayIndex, 0);
        };
    }
    render() {
        const { addItem } = this.props;
        return React.createElement(Button.Group, { key: "opt" },
            React.createElement(Button, { key: "remove", type: "primary", icon: "minus", onClick: this.removeItem }),
            React.createElement(Button, { key: "moveTo", type: "primary", icon: "swap-right", onClick: this.moveTo }));
    }
};
ArrayItemComponent = __decorate([
    (compose(hocFactory.get("validate")(), hocFactory.get("array")())),
    __metadata("design:paramtypes", [Object])
], ArrayItemComponent);
export { ArrayItemComponent };
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
        normal: {},
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
export const curAjv = new ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    format: "full",
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
    validate: checkIdExists
});
function checkIdExists(schema, data) {
    console.log("dfjkladjsklfklakdls");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data === "nick") {
                return resolve(true);
            }
            reject(new ajv.ValidationError([new Error("idExists不是nick")]));
        }, 2000);
    });
}
//# sourceMappingURL=init.js.map