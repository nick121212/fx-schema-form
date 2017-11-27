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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import jpp from "json-pointer";
import { connect } from "react-redux";
import { mapFormDataToProps } from "../select";
export default function (hocFactory, settings) {
    if (settings === void 0) { settings = { fields: [] }; }
    return function (Component) {
        var ConditionComponentHoc = (function (_super) {
            __extends(ConditionComponentHoc, _super);
            function ConditionComponentHoc() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.fieldKey = "ui:condition";
                return _this;
            }
            ConditionComponentHoc.prototype.render = function () {
                var _a = this.props, getHocOptions = _a.getHocOptions, formData = _a.formData, formDefaultData = _a.formDefaultData;
                var hocOptions = getHocOptions();
                var conditionHocOptions = hocOptions.condition;
                var fields = conditionHocOptions.fields;
                var isShow = true, jFormData = jpp(Object.assign({}, formDefaultData, formData));
                if (settings.fields && settings.fields.length) {
                    fields = settings.fields;
                }
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
                return <Component {...this.props}/>;
            };
            ConditionComponentHoc = __decorate([
                connect(mapFormDataToProps)
            ], ConditionComponentHoc);
            return ConditionComponentHoc;
        }(React.PureComponent));
        return ConditionComponentHoc;
    };
};
//# sourceMappingURL=condition.jsx.map