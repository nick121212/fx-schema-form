var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ArrayField = (function (_super) {
    __extends(ArrayField, _super);
    function ArrayField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayField.prototype.renderItem = function (idx, maxLen) {
        var _this = this;
        var _a = this.props, mergeSchema = _a.mergeSchema, schemaKey = _a.schemaKey, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, getCurrentState = _a.getCurrentState, ItemChildButtons = _a.ItemChildButtons, _b = _a.arrayLevel, arrayLevel = _b === void 0 ? [] : _b, getFieldOptions = _a.getFieldOptions, reducerKeys = _a.reducerKeys;
        var uiSchema = mergeSchema.uiSchema, keys = mergeSchema.keys;
        return (<SchemaForm key={keys.join(".") + idx} schema={mergeSchema} getCurrentState={getCurrentState} arrayIndex={idx} reducerKeys={reducerKeys} arrayLevel={arrayLevel.concat([idx])} ItemButtons={function (props) { return <ItemChildButtons {..._this.props} {...props} arrayIndex={idx}/>; }} parentKeys={mergeSchema.originKeys} RootComponent={getFieldOptions("array").root} schemaKey={schemaKey} uiSchema={uiSchema.items} schemaFormOptions={schemaFormOptions} globalOptions={globalOptions}>
            </SchemaForm>);
    };
    ArrayField.prototype.render = function () {
        var _this = this;
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, WidgetComponent = _a.WidgetComponent, schemaKey = _a.schemaKey, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, formItemData = _a.formItemData, _b = _a.meta, meta = _b === void 0 ? { dirty: false, isValid: true, isShow: true } : _b;
        var uiSchema = mergeSchema.uiSchema, title = mergeSchema.title;
        var child;
        child = formItemData && formItemData.map(function (data, idx) {
            return _this.renderItem(idx, formItemData.length);
        });
        return <div style={{ width: "100%" }}>{child || null}</div>;
    };
    ArrayField = __decorate([
        compose(connect(mapFormItemDataProps), shouldUpdate(function (prev, next) {
            var _a = prev.formItemData, formItemData = _a === void 0 ? [] : _a;
            var _b = next.formItemData, formItemData1 = _b === void 0 ? [] : _b;
            return formItemData.length !== formItemData1.length;
        }))
    ], ArrayField);
    return ArrayField;
}(React.PureComponent));
export { ArrayField };
//# sourceMappingURL=array.jsx.map