"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var AntdRowTemp = /** @class */ (function (_super) {
    tslib_1.__extends(AntdRowTemp, _super);
    function AntdRowTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdRowTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, globalOptions = _a.globalOptions, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions, mergeSchema = _a.mergeSchema;
        var tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (react_1.default.createElement(antd_1.Row, tslib_1.__assign({}, tempOptions), children));
    };
    return AntdRowTemp;
}(react_1.default.Component));
exports.AntdRowTemp = AntdRowTemp;
//# sourceMappingURL=row.js.map