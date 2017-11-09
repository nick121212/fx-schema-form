var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { schemaMerge } from "fx-schema-form-core";
import { connect } from "react-redux";
import { compose, onlyUpdateForKeys } from "recompose";
const mapDispatchToProps = (dispatch, ownProps) => {
    const { actions } = ownProps;
    for (const key in actions) {
        if (actions.hasOwnProperty(key)) {
            const element = actions[key];
            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }
    return { actions };
};
export const MergeHoc = (hocFactory, Component) => {
    let MergeComponentHoc = class MergeComponentHoc extends React.PureComponent {
        render() {
            let { schema, uiSchema, parentKeys, schemaFormOptions, schemaKey } = this.props, mergeSchemaList;
            let formDefaultData = {}, mergeSchema = schema;
            if (!schemaKey) {
                schemaKey = (Date.now() + Math.random()).toString();
            }
            schemaFormOptions = schemaFormOptions || {
                avjOptions: {}
            };
            if (parentKeys && !parentKeys.length) {
                schemaFormOptions.parentKeys = schemaFormOptions.parentKeys || [];
                if (schemaFormOptions.map.has(schemaFormOptions.parentKeys.join("/"))) {
                    mergeSchema = schemaFormOptions.map.get(schemaFormOptions.parentKeys.join("/"));
                }
            }
            else {
                schemaFormOptions.parentKeys = parentKeys || [];
            }
            mergeSchemaList = schemaMerge.merge(schemaKey, mergeSchema, uiSchema, schemaFormOptions);
            return (<Component schemaFormOptions={schemaFormOptions || {}} schemaKey={schemaKey} mergeSchemaList={mergeSchemaList} {...this.props}>
                </Component>);
        }
    };
    MergeComponentHoc = __decorate([
        compose(onlyUpdateForKeys(["schema"]), connect(null, mapDispatchToProps))
    ], MergeComponentHoc);
    return MergeComponentHoc;
};
//# sourceMappingURL=merge.jsx.map