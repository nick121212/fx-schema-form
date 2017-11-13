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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from "react";
import jpp from "json-pointer";
export var ConditionHoc = function (hocFactory, Component) {
    var Hoc = (function (_super) {
        __extends(Hoc, _super);
        function Hoc() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.fieldKey = "ui:condition";
            return _this;
        }
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
            return React.createElement(Component, __assign({}, this.props));
        };
        return Hoc;
    }(React.Component));
    return Hoc;
};
//# sourceMappingURL=condition.js.map