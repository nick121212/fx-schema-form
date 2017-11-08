"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var json_pointer_1 = require("json-pointer");
var react_redux_1 = require("react-redux");
var select_1 = require("../select");
/**
 * condition hoc
 * 用于组件的显示隐藏
 *  1. 根据hoc设置中的condition字段来配置显示/隐藏的时机
 *  2. 从formData中获取所需的值，与设置的值做对比，如果都匹配，则显示，否则隐藏
 * @param hocFactory  hoc的工厂方法
 * @param Component 需要包装的组件
 */
exports.ConditionHoc = function (hocFactory, Component) {
    var ConditionComponentHoc = /** @class */ (function (_super) {
        tslib_1.__extends(ConditionComponentHoc, _super);
        function ConditionComponentHoc() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.fieldKey = "ui:condition";
            return _this;
        }
        /**
         * render
         */
        ConditionComponentHoc.prototype.render = function () {
            var _a = this.props, getHocOptions = _a.getHocOptions, formData = _a.formData, formDefaultData = _a.formDefaultData;
            var hocOptions = getHocOptions();
            var conditionHocOptions = hocOptions.condition;
            var fields = conditionHocOptions.fields;
            var isShow = true, jFormData = json_pointer_1.default(Object.assign({}, formDefaultData, formData));
            if (fields && fields.length) {
                isShow = fields.reduce(function (prev, _a) {
                    var key = _a.key, val = _a.val;
                    if (!jFormData.has(key)) {
                        return prev && false;
                    }
                    else {
                        var data = jFormData.get(key);
                        return prev && (data === val);
                    }
                }, isShow);
            }
            if (!isShow) {
                return null;
            }
            return react_1.default.createElement(Component, tslib_1.__assign({}, this.props));
        };
        ConditionComponentHoc = tslib_1.__decorate([
            react_redux_1.connect(select_1.mapFormDataToProps)
        ], ConditionComponentHoc);
        return ConditionComponentHoc;
    }(react_1.default.PureComponent));
    return ConditionComponentHoc;
};
//# sourceMappingURL=condition.js.map