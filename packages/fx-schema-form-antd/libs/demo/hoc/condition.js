"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var json_pointer_1 = require("json-pointer");
/**
 * condition hoc
 * 用于组件的显示隐藏
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
exports.ConditionHoc = function (hocFactory, Component) {
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
            var isShow = true, jFormData = json_pointer_1.default(Object.assign({}, formDefaultData, formData));
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
            return react_1.default.createElement(Component, tslib_1.__assign({}, this.props));
        };
        return Hoc;
    }(react_1.default.Component));
    return Hoc;
};
//# sourceMappingURL=condition.js.map