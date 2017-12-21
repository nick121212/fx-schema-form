var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { connect } from "react-redux";
import { Card } from "antd";
import { shouldUpdate, compose } from "recompose";
import isEqual from "lodash.isequal";
import { mapMetaStateToProps } from "../hocs/select";
let AntdCardTemp = class AntdCardTemp extends React.PureComponent {
    render() {
        const { children, globalOptions, tempKey, uiSchemaOptions, mergeSchema, ItemButtons, meta } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { uiSchema, title } = mergeSchema;
        let { isValid = true, errorText = "", isShow = true } = meta || {};
        console.log("antdCardTemp render");
        return (React.createElement(Card, Object.assign({ title: title || uiSchema.title, extra: ItemButtons ? React.createElement(ItemButtons, null) : "", bodyStyle: {
                "display": isShow === false ? "none" : "block"
            } }, tempOptions),
            children,
            !isValid ? errorText : ""));
    }
};
AntdCardTemp = __decorate([
    compose(shouldUpdate(() => false), connect(mapMetaStateToProps), shouldUpdate((curProps, nextProps) => {
        return !isEqual(curProps.meta, nextProps.meta);
    }))
], AntdCardTemp);
export { AntdCardTemp };
//# sourceMappingURL=card.js.map