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
        var showButtons = tempOptions.showButtons, extra = tslib_1.__rest(tempOptions, ["showButtons"]);
        return (react_1.default.createElement(antd_1.Card, tslib_1.__assign({}, extra, { extra: showButtons ? react_1.default.createElement(antd_1.Col, null, ItemButtons ? react_1.default.createElement(ItemButtons, null) : null) : null }),
            react_1.default.createElement(antd_1.Row, { type: "flex" }, children)));
    };
    return AntdCardTemp;
}(react_1.default.Component));
exports.AntdCardTemp = AntdCardTemp;
//# sourceMappingURL=gridcard.js.map