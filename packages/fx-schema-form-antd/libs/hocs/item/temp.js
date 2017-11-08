"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var recompose_1 = require("recompose");
var lodash_isequal_1 = require("lodash.isequal");
var react_redux_1 = require("react-redux");
var select_1 = require("../select");
var metaConnect = recompose_1.compose(react_redux_1.connect(select_1.mapMetaStateToProps), recompose_1.onlyUpdateForKeys(["meta"]), recompose_1.shouldUpdate(function (curProps, nextProps) {
    return !lodash_isequal_1.default(curProps.meta, nextProps.meta);
}));
/**
 * 包装Template的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
exports.TempHoc = function (hocFactory, Component) {
    /**
    * 获取模板的components
    * @param uiSchema 合并后的数据
    */
    var TempComponentHoc = /** @class */ (function (_super) {
        tslib_1.__extends(TempComponentHoc, _super);
        function TempComponentHoc() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tempField = "ui:temp";
            return _this;
        }
        TempComponentHoc.prototype.render = function () {
            var _this = this;
            var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions;
            var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? { options: {} } : _b, keys = mergeSchema.keys;
            var TempComponents = this.getTemplates();
            var uiSchemaOptions = uiSchema.options || {};
            var ComponentWithHoc = recompose_1.compose(react_redux_1.connect(select_1.mapFormItemDataProps))(Component);
            var index = 0;
            return TempComponents.reduce(function (prev, _a) {
                var key = _a.key, Temp = _a.Temp;
                var TempWithHoc = metaConnect(Temp);
                return react_1.default.createElement(TempWithHoc, tslib_1.__assign({ globalOptions: globalOptions, tempKey: key, uiSchemaOptions: uiSchemaOptions, key: keys.join(".") + key + index++ }, _this.props, { children: prev }));
            }, react_1.default.createElement(ComponentWithHoc, tslib_1.__assign({ key: keys.join("."), uiSchemaOptions: uiSchemaOptions }, this.props)));
        };
        /**
        * 获取模板的components
        */
        TempComponentHoc.prototype.getTemplates = function () {
            var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions, currentTheme = _a.currentTheme;
            var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? { options: {} } : _b, keys = mergeSchema.keys, type = mergeSchema.type;
            var typeDefaultOptions = globalOptions[type] || {};
            var template = uiSchema[this.tempField] ||
                typeDefaultOptions[this.tempField] ||
                globalOptions[this.tempField] || "default", TempComponent = [];
            // 获取模板的数据，单个模板
            if (typeof template === "string") {
                TempComponent.push({
                    key: template,
                    Temp: (currentTheme.tempFactory.get(template))
                });
            }
            else {
                // 多个模板
                [].concat(template).reverse().forEach(function (tml, idx) {
                    if (!currentTheme.tempFactory.has(tml || "default")) {
                        console.error("\u4E0D\u5B58\u5728" + tml + "\u7684temp\uFF01");
                    }
                    else {
                        TempComponent.push({
                            key: tml,
                            Temp: currentTheme.tempFactory.get(tml || "default")
                        });
                    }
                });
            }
            return TempComponent;
        };
        TempComponentHoc = tslib_1.__decorate([
            recompose_1.compose(recompose_1.shouldUpdate(function () { return false; }))
        ], TempComponentHoc);
        return TempComponentHoc;
    }(react_1.default.PureComponent));
    return TempComponentHoc;
};
//# sourceMappingURL=temp.js.map