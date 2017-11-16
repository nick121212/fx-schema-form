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
import React from "react";
import { SchemaForm } from "../index";
var ObjectField = (function (_super) {
    __extends(ObjectField, _super);
    function ObjectField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectField.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, WidgetComponent = _a.WidgetComponent, arrayIndex = _a.arrayIndex, ItemButtons = _a.ItemButtons, arrayLevel = _a.arrayLevel, getCurrentState = _a.getCurrentState, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, schemaKey = _a.schemaKey, getFieldOptions = _a.getFieldOptions;
        var uiSchema = mergeSchema.uiSchema;
        return (<SchemaForm arrayIndex={arrayIndex} schemaFormOptions={schemaFormOptions} getCurrentState={getCurrentState} schemaKey={schemaKey} arrayLevel={arrayLevel} schema={mergeSchema} parentKeys={mergeSchema.originKeys} RootComponent={getFieldOptions("object").root} uiSchema={uiSchema.items || ["*"]} globalOptions={globalOptions}>
            </SchemaForm>);
    };
    return ObjectField;
}(React.Component));
export { ObjectField };
//# sourceMappingURL=object.jsx.map