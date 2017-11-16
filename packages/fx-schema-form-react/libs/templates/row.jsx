var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
import { Row } from "antd";
var AntdRowTemp = (function (_super) {
    __extends(AntdRowTemp, _super);
    function AntdRowTemp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdRowTemp.prototype.render = function () {
        var _a = this.props, children = _a.children, globalOptions = _a.globalOptions, tempKey = _a.tempKey, uiSchemaOptions = _a.uiSchemaOptions, mergeSchema = _a.mergeSchema;
        var tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (<Row {...tempOptions}>
                {children}
            </Row>);
    };
    return AntdRowTemp;
}(React.Component));
export { AntdRowTemp };
//# sourceMappingURL=row.jsx.map