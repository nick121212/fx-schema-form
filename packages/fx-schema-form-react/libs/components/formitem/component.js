var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { PureComponent } from "react";
import { compose } from "redux";
import { hoc } from "./container";
import { isProd } from "../../libs/utils";
let SchemaFormItem = class SchemaFormItem extends PureComponent {
    render() {
        const _a = this.props, { FieldComponent, uiSchema } = _a, extraProps = __rest(_a, ["FieldComponent", "uiSchema"]);
        const options = extraProps.getOptions(this.props, "field", uiSchema.field || uiSchema.type);
        let FieldComponentWithHoc = FieldComponent;
        if (!FieldComponent) {
            if (!isProd()) {
                console.warn(uiSchema, "没有找到匹配的field");
            }
            return null;
        }
        if (options.fieldHocs && options.fieldHocs.length) {
            FieldComponentWithHoc = compose(...(options.fieldHocs || []))(FieldComponent);
        }
        return React.createElement(FieldComponentWithHoc, Object.assign({ key: uiSchema.keys.join("formItem"), uiSchema: uiSchema }, extraProps));
    }
};
SchemaFormItem = __decorate([
    hoc
], SchemaFormItem);
export { SchemaFormItem };
//# sourceMappingURL=component.js.map