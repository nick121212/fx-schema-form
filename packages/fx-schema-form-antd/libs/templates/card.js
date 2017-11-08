"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var AntdCardTemp = /** @class */ (function (_super) {
    tslib_1.__extends(AntdCardTemp, _super);
    function AntdCardTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdCardTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, globalOptions = _a.globalOptions, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions, mergeSchema = _a.mergeSchema, ItemButtons = _a.ItemButtons, meta = _a.meta;
        var tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        var uiSchema = mergeSchema.uiSchema, title = mergeSchema.title;
        var dirty = meta.dirty, isValid = meta.isValid, _b = meta.errorText, errorText = _b === void 0 ? "" : _b;
        return (react_1.default.createElement(antd_1.Card, tslib_1.__assign({ title: title || uiSchema.title, extra: ItemButtons ? react_1.default.createElement(ItemButtons, null) : "", bodyStyle: {
                "display": meta.isShow === false ? "none" : "block"
            } }, tempOptions),
            children,
            !isValid ? errorText : ""));
    };
    return AntdCardTemp;
}(react_1.default.Component));
exports.AntdCardTemp = AntdCardTemp;
//# sourceMappingURL=card.js.map