import * as tslib_1 from "tslib";
import React from "react";
import { compose, lifecycle } from "recompose";
import pick from "recompose/utils/pick";
import isEqual from "lodash.isequal";
var metaConnect = compose(lifecycle({
    shouldComponentUpdate: function (nextProps) {
        // let { otherEqualKeys } = this.props;
        var opts = this.props.getHocOptions();
        var metaKeys = ["isShow", "isValid", "errorText", "isLoading"];
        var formItemDataEqual = isEqual(nextProps.formItemData, this.props.formItemData);
        var metaEqual = isEqual(pick(nextProps.meta, metaKeys), pick(this.props.meta, metaKeys));
        var rtn = !formItemDataEqual || !metaEqual;
        var tempOpts = opts.temp || {};
        if (tempOpts.equalKeys && !rtn) {
            var _a = nextProps.formData, formData_1 = _a === void 0 ? {} : _a;
            var _b = this.props.formData, formData1 = _b === void 0 ? {} : _b;
            rtn = tempOpts.equalKeys.reduce(function (prev, next) {
                return prev && isEqual(formData_1[next], formData_1[next]);
            }, rtn);
        }
        if (!__PROD__) {
            console.groupCollapsed(nextProps.mergeSchema.keys + "---temp中比较formItemData和Meta的值得变化;" + rtn);
            console.log("formItemData", formItemDataEqual, nextProps.formItemData, this.props.formItemData);
            console.log("meta", metaEqual, pick(nextProps.meta, metaKeys), pick(this.props.meta, metaKeys));
            console.log("shouldUpdate", formItemDataEqual, metaEqual);
            console.groupEnd();
        }
        return rtn;
    }
}));
/**
 * 包装Template的组件HOC
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export var TempHoc = function (hocFactory, Component) {
    /**
    * 获取模板的components
    * @param uiSchema 合并后的数据
    */
    var Hoc = /** @class */ (function (_super) {
        tslib_1.__extends(Hoc, _super);
        function Hoc() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tempField = "ui:temp";
            return _this;
        }
        Hoc.prototype.render = function () {
            var _this = this;
            var _a = this.props, mergeSchema = _a.mergeSchema, globalOptions = _a.globalOptions;
            var _b = mergeSchema.uiSchema, uiSchema = _b === void 0 ? { options: {} } : _b, keys = mergeSchema.keys;
            var TempComponents = this.getTemplates();
            var uiSchemaOptions = uiSchema.options || {};
            var index = 0;
            return TempComponents.reduce(function (prev, _a) {
                var key = _a.key, Temp = _a.Temp;
                return React.createElement(Temp, tslib_1.__assign({ globalOptions: globalOptions, tempKey: key, uiSchemaOptions: uiSchemaOptions, key: keys.join(".") + key + index++ }, _this.props), prev);
            }, React.createElement(Component, tslib_1.__assign({ key: keys.join("."), uiSchemaOptions: uiSchemaOptions }, this.props)));
        };
        /**
        * 获取模板的components
        */
        Hoc.prototype.getTemplates = function () {
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
        Hoc = tslib_1.__decorate([
            metaConnect
        ], Hoc);
        return Hoc;
    }(React.Component));
    return Hoc;
};
//# sourceMappingURL=temp.js.map