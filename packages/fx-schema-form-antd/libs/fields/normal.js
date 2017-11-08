"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var NormalField = /** @class */ (function (_super) {
    tslib_1.__extends(NormalField, _super);
    function NormalField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalField.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, WidgetComponent = _a.WidgetComponent;
        return (react_1.default.createElement(WidgetComponent, tslib_1.__assign({ key: mergeSchema.keys.join(".") }, this.props)));
    };
    return NormalField;
}(react_1.default.Component));
exports.NormalField = NormalField;
//# sourceMappingURL=normal.js.map