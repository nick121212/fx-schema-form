import * as tslib_1 from "tslib";
import React from "react";
var NormalField = /** @class */ (function (_super) {
    tslib_1.__extends(NormalField, _super);
    function NormalField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalField.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, currentTheme = _a.currentTheme, WidgetComponent = _a.WidgetComponent;
        return (React.createElement(WidgetComponent, tslib_1.__assign({ key: mergeSchema.keys.join(".") }, this.props)));
    };
    return NormalField;
}(React.Component));
export { NormalField };
//# sourceMappingURL=normal.js.map