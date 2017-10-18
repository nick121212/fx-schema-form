import * as tslib_1 from "tslib";
import React from "react";
import jpp from "json-pointer";
/**
 * condition hoc
 * 用于组件的显示隐藏
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
export var ConditionHoc = function (hocFactory, Component) {
    var Hoc = /** @class */ (function (_super) {
        tslib_1.__extends(Hoc, _super);
        function Hoc() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.fieldKey = "ui:condition";
            return _this;
        }
        /**
         * render
         */
        Hoc.prototype.render = function () {
            var _a = this.props, getHocOptions = _a.getHocOptions, formData = _a.formData, formDefaultData = _a.formDefaultData;
            var hocOptions = getHocOptions();
            var arrayHocOptions = hocOptions.array;
            var conditionHocOptions = hocOptions.condition;
            var fields = conditionHocOptions.fields;
            var isShow = true, jFormData = jpp(Object.assign({}, formDefaultData, formData));
            if (fields && fields.length) {
                isShow = fields.reduce(function (prev, field) {
                    if (!jFormData.has(field.key)) {
                        return prev && false;
                    }
                    else {
                        var data = jFormData.get(field.key);
                        return prev && (data === field.val);
                    }
                }, isShow);
            }
            if (!isShow) {
                return null;
            }
            return React.createElement(Component, tslib_1.__assign({}, this.props));
        };
        return Hoc;
    }(React.Component));
    return Hoc;
};
//# sourceMappingURL=condition.js.map