var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { Col } from "antd";
import { shouldUpdate } from "recompose";
let AntdColTemp = class AntdColTemp extends React.PureComponent {
    render() {
        const { children, globalOptions, mergeSchema, tempKey, uiSchemaOptions } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (React.createElement(Col, Object.assign({}, tempOptions), children));
    }
};
AntdColTemp = __decorate([
    shouldUpdate(() => false)
], AntdColTemp);
export { AntdColTemp };
//# sourceMappingURL=col.js.map