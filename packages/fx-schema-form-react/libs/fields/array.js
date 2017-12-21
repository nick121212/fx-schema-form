var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { connect } from "react-redux";
import { shouldUpdate, compose } from "recompose";
import { SchemaForm, } from "../index";
import { mapFormItemDataProps } from "../hocs/select";
let ArrayField = class ArrayField extends React.PureComponent {
    renderItem(idx, maxLen) {
        const { mergeSchema, schemaKey, globalOptions, schemaFormOptions, getCurrentState, ItemChildButtons, arrayLevel = [], getFieldOptions, reducerKeys } = this.props;
        const { uiSchema, keys } = mergeSchema;
        return (React.createElement(SchemaForm, { key: keys.join(".") + idx, schema: mergeSchema, getCurrentState: getCurrentState, arrayIndex: idx, reducerKeys: reducerKeys, arrayLevel: arrayLevel.concat([idx]), ItemButtons: (props) => React.createElement(ItemChildButtons, Object.assign({}, this.props, props, { arrayIndex: idx })), parentKeys: mergeSchema.originKeys, RootComponent: getFieldOptions("array").root, schemaKey: schemaKey, uiSchema: uiSchema.items, schemaFormOptions: schemaFormOptions, globalOptions: globalOptions }));
    }
    render() {
        const { mergeSchema, currentTheme, WidgetComponent, schemaKey, globalOptions, schemaFormOptions, formItemData, meta = { dirty: false, isValid: true, isShow: true } } = this.props;
        const { uiSchema, title } = mergeSchema;
        let child;
        child = formItemData && formItemData.map((data, idx) => {
            return this.renderItem(idx, formItemData.length);
        });
        return React.createElement("div", { style: { width: "100%" } }, child || null);
    }
};
ArrayField = __decorate([
    compose(connect(mapFormItemDataProps), shouldUpdate((prev, next) => {
        let { formItemData = [] } = prev;
        let { formItemData: formItemData1 = [] } = next;
        return formItemData.length !== formItemData1.length;
    }))
], ArrayField);
export { ArrayField };
//# sourceMappingURL=array.js.map