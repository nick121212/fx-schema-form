import * as tslib_1 from "tslib";
import React from "react";
import { SchemaForm } from "../index";
/**
 * 数组字段的生成规则
 */
var ArrayField = /** @class */ (function (_super) {
    tslib_1.__extends(ArrayField, _super);
    function ArrayField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 遍历数据，生成子表单
     * @param idx 数组的索引
     */
    ArrayField.prototype.renderItem = function (idx, maxLen) {
        var _a = this.props, mergeSchema = _a.mergeSchema, schemaKey = _a.schemaKey, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, arrayItems = _a.arrayItems, createItemChildButtons = _a.createItemChildButtons;
        var uiSchema = mergeSchema.uiSchema, keys = mergeSchema.keys;
        return (React.createElement(SchemaForm, { key: keys.join(".") + idx, schema: mergeSchema, arrayIndex: idx, arrayItems: createItemChildButtons ? createItemChildButtons.bind(null, idx, maxLen) : null, parentKeys: mergeSchema.keys, RootComponent: null, schemaKey: schemaKey, uiSchema: uiSchema.items, schemaFormOptions: schemaFormOptions, globalOptions: globalOptions }));
    };
    /**
     * 渲染页面
     */
    ArrayField.prototype.render = function () {
        var _this = this;
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, WidgetComponent = _a.WidgetComponent, schemaKey = _a.schemaKey, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, formItemData = _a.formItemData, _b = _a.meta, meta = _b === void 0 ? { dirty: false, isValid: true, isShow: true } : _b;
        var uiSchema = mergeSchema.uiSchema, title = mergeSchema.title;
        var child;
        child = formItemData && formItemData.map(function (data, idx) {
            return _this.renderItem(idx, formItemData.length);
        });
        return React.createElement("div", null, child || null);
    };
    return ArrayField;
}(React.Component));
export { ArrayField };
//# sourceMappingURL=array.js.map