var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { Input } from "antd";
import { onlyUpdateForKeys } from "recompose";
let AntdInputWidget = class AntdInputWidget extends React.Component {
    setDefaultProps() {
        const { mergeSchema } = this.props;
        const props = {};
        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        }
        else {
            props.value = "";
        }
        return props;
    }
    render() {
        const { mergeSchema, globalOptions, uiSchemaOptions, updateItemData, updateItemMeta, formItemData, getWidgetOptions } = this.props;
        const { input = {} } = uiSchemaOptions.widget || {};
        const { input: inputDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (React.createElement(Input, Object.assign({ onBlur: (e) => {
                updateItemMeta(formItemData);
            }, onChange: (e) => {
                updateItemData(e.currentTarget.value);
            }, disabled: readonly, placeholder: mergeSchema.title }, getWidgetOptions(this.props, "input"), this.setDefaultProps())));
    }
};
AntdInputWidget = __decorate([
    onlyUpdateForKeys(["formItemData"])
], AntdInputWidget);
export { AntdInputWidget };
//# sourceMappingURL=input.js.map