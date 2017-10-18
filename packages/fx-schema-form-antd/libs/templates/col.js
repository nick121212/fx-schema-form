import * as tslib_1 from "tslib";
import React from "react";
import { Col } from "antd";
var AntdColTemp = /** @class */ (function (_super) {
    tslib_1.__extends(AntdColTemp, _super);
    function AntdColTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdColTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, globalOptions = _a.globalOptions, mergeSchema = _a.mergeSchema, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions;
        var tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (React.createElement(Col, tslib_1.__assign({}, tempOptions), children));
    };
    return AntdColTemp;
}(React.Component));
export { AntdColTemp };
//# sourceMappingURL=col.js.map