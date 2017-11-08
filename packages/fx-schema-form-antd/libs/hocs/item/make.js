"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var recompose_1 = require("recompose");
/**
 * 包装Field的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 *  1. 加入属性FieldComponent   schema对应的fieldcomponent
 *  2. 加入属性WidgetComponent  schema对应的widgetcomponent
 *  3. HOC默认顺序：ThemeHoc -> FieldHoc -> ValidateHoc -> ArrayHoc -> TempHoc
 */
exports.MakeHoc = function (hocFactory, Component) {
    var MakeComponentHoc = /** @class */ (function (_super) {
        tslib_1.__extends(MakeComponentHoc, _super);
        function MakeComponentHoc() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.fieldKey = "ui:item.hoc";
            return _this;
        }
        MakeComponentHoc.prototype.shouldComponentUpdate = function () {
            return false;
        };
        MakeComponentHoc.prototype.render = function () {
            var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions;
            var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? { options: {} } : _b, keys = mergeSchema.keys, type = mergeSchema.type;
            var typeDefaultOptions = globalOptions[type] || {};
            var hocs = uiSchema[this.fieldKey] ||
                typeDefaultOptions[this.fieldKey] ||
                globalOptions[this.fieldKey] || ["theme", "field", "validate", "array", "temp"];
            var ComponentWithHocs = recompose_1.compose.apply(void 0, hocs.map(function (hoc) { return hocFactory.get(hoc); }))(Component);
            return react_1.default.createElement(ComponentWithHocs, tslib_1.__assign({ getHocOptions: this.getHocOptions.bind(this) }, this.props));
        };
        MakeComponentHoc.prototype.getHocOptions = function () {
            var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions;
            var uiSchema = mergeSchema.uiSchema;
            var uiSchemaOptions = uiSchema.options || {};
            var hocOptions = Object.assign({}, globalOptions.hoc || {}, uiSchemaOptions.hoc || {});
            return hocOptions;
        };
        return MakeComponentHoc;
    }(react_1.default.PureComponent));
    return MakeComponentHoc;
};
//# sourceMappingURL=make.js.map