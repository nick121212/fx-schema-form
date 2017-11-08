"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var AntdGridWidget = /** @class */ (function (_super) {
    tslib_1.__extends(AntdGridWidget, _super);
    function AntdGridWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AntdGridWidget.prototype.setDefaultProps = function () {
        var mergeSchema = this.props.mergeSchema;
        var props = {};
        if (typeof this.props.formItemData !== "number") {
            // props.value = NaN;
        }
        else {
            // props.value = this.props.formItemData;
        }
        return props;
    };
    AntdGridWidget.prototype.render = function () {
        var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions, uiSchemaOptions = _a.uiSchemaOptions, validate = _a.validate, updateItemData = _a.updateItemData;
        var _b = (uiSchemaOptions.widget || {}).col, col = _b === void 0 ? {} : _b;
        var _c = (globalOptions.widget || {}).col, colDefault = _c === void 0 ? {} : _c;
        var _d = mergeSchema.uiSchema, uiSchema = _d === void 0 ? {} : _d, keys = mergeSchema.keys;
        var _e = uiSchema.readonly, readonly = _e === void 0 ? false : _e;
        return (react_1.default.createElement(antd_1.Col, tslib_1.__assign({}, col, colDefault, this.setDefaultProps())));
    };
    return AntdGridWidget;
}(react_1.default.Component));
exports.AntdGridWidget = AntdGridWidget;
//# sourceMappingURL=grid.js.map