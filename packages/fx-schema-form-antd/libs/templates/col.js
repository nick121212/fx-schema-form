"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var AntdColTemp = /** @class */ (function (_super) {
    tslib_1.__extends(AntdColTemp, _super);
    function AntdColTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdColTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, globalOptions = _a.globalOptions, mergeSchema = _a.mergeSchema, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions;
        var tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (react_1.default.createElement(antd_1.Col, tslib_1.__assign({}, tempOptions), children));
    };
    return AntdColTemp;
}(react_1.default.Component));
exports.AntdColTemp = AntdColTemp;
//# sourceMappingURL=col.js.map