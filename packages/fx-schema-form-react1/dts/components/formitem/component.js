var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
import React from "react";
import { compose } from "redux";
import { hoc } from "./container";
let SchemaFormItem = class SchemaFormItem extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const _a = this.props, { FieldComponent, uiSchema } = _a, extraProps = __rest(_a, ["FieldComponent", "uiSchema"]);
        const options = extraProps.getOptions(this.props, "field", uiSchema.field || uiSchema.type);
        let FieldComponentWithHoc = FieldComponent;
        if (!FieldComponent) {
            console.log(uiSchema, "没有找到匹配的field");
            return null;
        }
        if (options.fieldHocs && options.fieldHocs.length) {
            FieldComponentWithHoc = compose(...(options.fieldHocs || []))(FieldComponent);
        }
        return React.createElement(FieldComponentWithHoc, Object.assign({ key: uiSchema.keys.join("formItem"), uiSchema: uiSchema }, extraProps));
    }
};
SchemaFormItem = __decorate([
    hoc,
    __metadata("design:paramtypes", [Object, Object])
], SchemaFormItem);
export { SchemaFormItem };
//# sourceMappingURL=component.js.map