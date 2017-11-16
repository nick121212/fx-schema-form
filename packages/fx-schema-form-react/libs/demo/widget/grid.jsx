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
import { Col } from "antd";
var AntdGridWidget = (function (_super) {
    __extends(AntdGridWidget, _super);
    function AntdGridWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdGridWidget.prototype.setDefaultProps = function () {
        var mergeSchema = this.props.mergeSchema;
        var props = {};
        if (typeof this.props.formItemData !== "number") {
        }
        else {
        }
        return props;
    };
    AntdGridWidget.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions, uiSchemaOptions = _a.uiSchemaOptions, validate = _a.validate, updateItemData = _a.updateItemData;
        var _b = (uiSchemaOptions.widget || {}).col, col = _b === void 0 ? {} : _b;
        var _c = (globalOptions.widget || {}).col, colDefault = _c === void 0 ? {} : _c;
        var _d = mergeSchema.uiSchema, uiSchema = _d === void 0 ? {} : _d, keys = mergeSchema.keys;
        var _e = uiSchema.readonly, readonly = _e === void 0 ? false : _e;
        return (<Col {...col} {...colDefault} {...this.setDefaultProps()}>
            </Col>);
    };
    return AntdGridWidget;
}(React.Component));
export { AntdGridWidget };
//# sourceMappingURL=grid.jsx.map