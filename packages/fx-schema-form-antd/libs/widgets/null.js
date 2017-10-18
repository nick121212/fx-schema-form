import * as tslib_1 from "tslib";
import React from "react";
var NullWidget = /** @class */ (function (_super) {
    tslib_1.__extends(NullWidget, _super);
    function NullWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NullWidget.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, arrayIndex = _a.arrayIndex, globalOptions = _a.globalOptions, uiSchemaOptions = _a.uiSchemaOptions, meta = _a.meta, validate = _a.validate, updateItemData = _a.updateItemData;
        var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? {} : _b, keys = mergeSchema.keys;
        var _c = uiSchema.readonly, readonly = _c === void 0 ? false : _c;
        return (React.createElement("span", null, "\u6B64\u503C\u4E3ANull\u503C\uFF0C\u8FD9\u4E2A\u6709\u5565\u610F\u601D\u4E48"));
    };
    return NullWidget;
}(React.Component));
export { NullWidget };
//# sourceMappingURL=null.js.map