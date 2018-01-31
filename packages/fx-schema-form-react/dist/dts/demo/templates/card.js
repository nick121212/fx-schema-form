"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var AntdCardTemp = (function (_super) {
    tslib_1.__extends(AntdCardTemp, _super);
    function AntdCardTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdCardTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, tempKey = _a.tempKey, getOptions = _a.getOptions, getTitle = _a.getTitle, initArrayComponent = _a.initArrayComponent, formItemMeta = _a.formItemMeta, uiSchema = _a.uiSchema, arrayLevel = _a.arrayLevel;
        var tempOptions = getOptions(this.props, "temp", tempKey);
        var _b = formItemMeta ? formItemMeta.toJS() : {}, _c = _b.isValid, isValid = _c === void 0 ? true : _c, _d = _b.errorText, errorText = _d === void 0 ? "" : _d, _e = _b.collapsing, collapsing = _e === void 0 ? false : _e;
        return (react_1.default.createElement(antd_1.Card, tslib_1.__assign({ title: getTitle(this.props).toString() }, tempOptions.options, { extra: initArrayComponent ? initArrayComponent(this.props) : null }),
            collapsing ? react_1.default.createElement("span", null, "\u6298\u53E0\u4E2D") : children,
            isValid ? null : errorText));
    };
    return AntdCardTemp;
}(react_1.PureComponent));
exports.AntdCardTemp = AntdCardTemp;
//# sourceMappingURL=card.js.map