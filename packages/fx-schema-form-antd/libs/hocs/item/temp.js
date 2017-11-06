import * as tslib_1 from "tslib";
import React from "react";
import { compose, shouldUpdate, onlyUpdateForKeys } from "recompose";
import isEqual from "lodash.isequal";
import { connect } from "react-redux";
import { mapMetaStateToProps, mapFormItemDataProps } from "../select";
var metaConnect = compose(connect(mapMetaStateToProps), shouldUpdate(function (curProps, nextProps) {
    return !isEqual(curProps.meta, nextProps.meta);
}), onlyUpdateForKeys(["meta"]));
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
            var ComponentWithHoc = compose(connect(mapFormItemDataProps))(Component);
            var index = 0;
            return TempComponents.reduce(function (prev, _a) {
                var key = _a.key, Temp = _a.Temp;
                return React.createElement(Temp, tslib_1.__assign({ globalOptions: globalOptions, tempKey: key, uiSchemaOptions: uiSchemaOptions, key: keys.join(".") + key + index++ }, _this.props), prev);
            }, React.createElement(ComponentWithHoc, tslib_1.__assign({ key: keys.join("."), uiSchemaOptions: uiSchemaOptions }, this.props)));
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
            metaConnect
        ], TempComponentHoc);
        return TempComponentHoc;
    }(React.PureComponent));
    return TempComponentHoc;
};
//# sourceMappingURL=temp.js.map