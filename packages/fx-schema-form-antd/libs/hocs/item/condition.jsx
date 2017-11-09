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
export const ConditionHoc = (hocFactory, Component) => {
    let ConditionComponentHoc = class ConditionComponentHoc extends React.PureComponent {
        constructor() {
            super(...arguments);
            this.fieldKey = "ui:condition";
        }
        render() {
            const { getHocOptions, formData, formDefaultData } = this.props;
            const hocOptions = getHocOptions();
            const { condition: conditionHocOptions } = hocOptions;
            const { fields } = conditionHocOptions;
            let isShow = true, jFormData = jpp(Object.assign({}, formDefaultData, formData));
            if (fields && fields.length) {
                isShow = fields.reduce((prev, { key, val }) => {
                    if (!jFormData.has(key)) {
                        return prev && false;
                    }
                    else {
                        let data = jFormData.get(key);
                        return prev && (data === val);
                    }
                }, isShow);
            }
            if (!isShow) {
                return null;
            }
            return <Component {...this.props}/>;
        }
    };
    ConditionComponentHoc = __decorate([
        connect(mapFormDataToProps)
    ], ConditionComponentHoc);
    return ConditionComponentHoc;
};
//# sourceMappingURL=condition.jsx.map