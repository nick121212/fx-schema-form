"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var form_1 = require("../components/form");
var arrayFieldStyle = {
    width: "100%",
    height: "100%"
};
var ArrayField = (function (_super) {
    tslib_1.__extends(ArrayField, _super);
    function ArrayField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArrayField.prototype.renderItem = function (idx) {
        var _a = this.props, parentKeys = _a.parentKeys, globalOptions = _a.globalOptions, _b = _a.arrayLevel, arrayLevel = _b === void 0 ? [] : _b, ajv = _a.ajv, ArrayItemComponent = _a.ArrayItemComponent, uiSchema = this.props.uiSchema;
        if (uiSchema.children === null) {
            return null;
        }
        return (react_1.default.createElement(form_1.SchemaForm, { key: idx, arrayIndex: idx, uiSchema: uiSchema, ArrayItemComponent: ArrayItemComponent, arrayLevel: arrayLevel.concat([idx]), schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["-"], parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv }));
    };
    ArrayField.prototype.render = function () {
        var _a = this.props, uiSchema = _a.uiSchema, formItemData = _a.formItemData, child = [];
        for (var i = 0; i < +formItemData; i++) {
            child.push(this.renderItem(i));
        }
        return react_1.default.createElement("div", { style: arrayFieldStyle }, child || null);
    };
    return ArrayField;
}(react_1.PureComponent));
exports.ArrayField = ArrayField;
//# sourceMappingURL=array.js.map