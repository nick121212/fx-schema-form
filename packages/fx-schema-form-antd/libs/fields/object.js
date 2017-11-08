"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var index_1 = require("../index");
var ObjectField = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectField, _super);
    function ObjectField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectField.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, WidgetComponent = _a.WidgetComponent, arrayIndex = _a.arrayIndex, ItemButtons = _a.ItemButtons, arrayLevel = _a.arrayLevel, getCurrentState = _a.getCurrentState, globalOptions = _a.globalOptions, schemaFormOptions = _a.schemaFormOptions, schemaKey = _a.schemaKey;
        var uiSchema = mergeSchema.uiSchema;
        return (react_1.default.createElement(index_1.SchemaForm, { arrayIndex: arrayIndex, schemaFormOptions: schemaFormOptions, getCurrentState: getCurrentState, schemaKey: schemaKey, arrayLevel: arrayLevel, schema: mergeSchema, parentKeys: mergeSchema.originKeys, RootComponent: uiSchema.root, uiSchema: uiSchema.items || ["*"], globalOptions: globalOptions }));
    };
    return ObjectField;
}(react_1.default.Component));
exports.ObjectField = ObjectField;
//# sourceMappingURL=object.js.map