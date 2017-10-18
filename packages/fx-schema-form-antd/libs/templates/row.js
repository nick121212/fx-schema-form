import * as tslib_1 from "tslib";
import React from "react";
import { Row } from "antd";
var AntdRowTemp = /** @class */ (function (_super) {
    tslib_1.__extends(AntdRowTemp, _super);
    function AntdRowTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdRowTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, globalOptions = _a.globalOptions, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions, mergeSchema = _a.mergeSchema;
        var tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (React.createElement(Row, tslib_1.__assign({}, tempOptions), children));
    };
    return AntdRowTemp;
}(React.Component));
export { AntdRowTemp };
//# sourceMappingURL=row.js.map