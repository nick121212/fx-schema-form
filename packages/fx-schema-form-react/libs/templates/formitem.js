var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { connect } from "react-redux";
import { shouldUpdate, compose } from "recompose";
import isEqual from "lodash.isequal";
import { Form, Row, Col } from "antd";
import { mapMetaStateToProps } from "../hocs/select";
let AntdFormItemTemp = class AntdFormItemTemp extends React.PureComponent {
    render() {
        const { children, arrayIndex, ItemButtons, mergeSchema, globalOptions = {}, tempKey, uiSchemaOptions, meta = { dirty: false, isValid: true, isLoading: false } } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { hasFeedback = false } = tempOptions;
        let props = {};
        let { dirty = false, isValid = true, errorText = "", isLoading = false } = meta || {};
        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }
        if (isLoading) {
            props.validateStatus = "validating";
        }
        return (React.createElement(Form.Item, Object.assign({ key: tempKey + isValid, required: mergeSchema.isRequired, label: mergeSchema.title || [].concat(mergeSchema.keys).pop(), extra: mergeSchema.description, help: isValid ? "" : errorText, hasFeedback: dirty && hasFeedback }, props, tempOptions),
            React.createElement(Row, { type: "flex" },
                React.createElement(Col, { span: 20 }, children),
                React.createElement(Col, { offset: 1, span: 3 }, ItemButtons && React.createElement(ItemButtons, null)))));
    }
};
AntdFormItemTemp = __decorate([
    compose(shouldUpdate(() => false), connect(mapMetaStateToProps), shouldUpdate((curProps, nextProps) => {
        return !isEqual(curProps.meta, nextProps.meta);
    }))
], AntdFormItemTemp);
export { AntdFormItemTemp };
//# sourceMappingURL=formitem.js.map