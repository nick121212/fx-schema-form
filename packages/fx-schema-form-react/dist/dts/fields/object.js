"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var form_1 = require("../components/form");
var ObjectField = (function (_super) {
    tslib_1.__extends(ObjectField, _super);
    function ObjectField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectField.prototype.render = function () {
        var uiSchema = this.props.uiSchema, _a = this.props, arrayIndex = _a.arrayIndex, arrayLevel = _a.arrayLevel, parentKeys = _a.parentKeys, globalOptions = _a.globalOptions, ajv = _a.ajv, schemaId = _a.schemaId;
        if (uiSchema.children === null) {
            return null;
        }
        return (react_1.default.createElement(form_1.SchemaForm, { arrayIndex: arrayIndex, arrayLevel: arrayLevel, schemaId: uiSchema.schemaPath, uiSchemas: uiSchema.children || ["*"], uiSchema: uiSchema, parentKeys: parentKeys, globalOptions: globalOptions, ajv: ajv }));
    };
    return ObjectField;
}(react_1.PureComponent));
exports.ObjectField = ObjectField;
//# sourceMappingURL=object.js.map