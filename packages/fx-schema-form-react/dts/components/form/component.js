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
import React from "react";
import { hoc } from "./container";
import { SchemaFormItem } from "../formitem/index";
let SchemaForm = class SchemaForm extends React.PureComponent {
    render() {
        const _a = this.props, { schemaId, mergeSchemaList, arrayLevel, RootComponent, children } = _a, extraProps = __rest(_a, ["schemaId", "mergeSchemaList", "arrayLevel", "RootComponent", "children"]);
        const formItemList = mergeSchemaList.map((uiScehma, idx) => {
            let arrayLevelCopy = arrayLevel ? arrayLevel.concat([]) : [];
            return React.createElement(SchemaFormItem, Object.assign({ key: idx }, extraProps, { schemaId: schemaId, uiSchema: uiScehma, arrayLevel: arrayLevelCopy }));
        });
        if (RootComponent) {
            return React.createElement(RootComponent, null,
                formItemList,
                children);
        }
        return (React.createElement("div", null,
            formItemList,
            children));
    }
};
SchemaForm = __decorate([
    hoc
], SchemaForm);
export { SchemaForm };
//# sourceMappingURL=component.js.map