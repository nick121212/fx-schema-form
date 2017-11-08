"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var index_1 = require("../index");
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
        var _this = this;
        var _a = this.props, mergeSchema = _a.mergeSchema, schemaKey = _a.schemaKey, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, getCurrentState = _a.getCurrentState, ItemChildButtons = _a.ItemChildButtons, _b = _a.arrayLevel, arrayLevel = _b === void 0 ? [] : _b;
        var uiSchema = mergeSchema.uiSchema, keys = mergeSchema.keys;
        return (react_1.default.createElement(index_1.SchemaForm, { key: keys.join(".") + idx, schema: mergeSchema, getCurrentState: getCurrentState, arrayIndex: idx, arrayLevel: arrayLevel.concat([idx]), ItemButtons: function () { return react_1.default.createElement(ItemChildButtons, tslib_1.__assign({}, _this.props, { index: idx })); }, parentKeys: mergeSchema.originKeys, RootComponent: null, schemaKey: schemaKey, uiSchema: uiSchema.items, schemaFormOptions: schemaFormOptions, globalOptions: globalOptions }));
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
        return react_1.default.createElement("div", { style: { width: "100%" } }, child || null);
    };
    return ArrayField;
}(react_1.default.Component));
exports.ArrayField = ArrayField;
//# sourceMappingURL=array.js.map