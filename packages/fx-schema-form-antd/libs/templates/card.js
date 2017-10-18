import * as tslib_1 from "tslib";
import React from "react";
import { Card } from "antd";
var AntdCardTemp = /** @class */ (function (_super) {
    tslib_1.__extends(AntdCardTemp, _super);
    function AntdCardTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdCardTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, globalOptions = _a.globalOptions, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions, mergeSchema = _a.mergeSchema, arrayItems = _a.arrayItems, meta = _a.meta;
        var tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        var uiSchema = mergeSchema.uiSchema, title = mergeSchema.title;
        var dirty = meta.dirty, isValid = meta.isValid, _b = meta.errorText, errorText = _b === void 0 ? "" : _b;
        return (React.createElement(Card, tslib_1.__assign({}, tempOptions, { title: title || uiSchema.title, extra: arrayItems, bodyStyle: {
                "display": meta.isShow === false ? "none" : "block"
            } }),
            children,
            !isValid ? errorText : ""));
    };
    return AntdCardTemp;
}(React.Component));
export { AntdCardTemp };
//# sourceMappingURL=card.js.map