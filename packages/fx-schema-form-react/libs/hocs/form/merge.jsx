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
import { schemaMerge } from "fx-schema-form-core";
import { connect } from "react-redux";
import { compose, onlyUpdateForKeys } from "recompose";
var mapDispatchToProps = function (dispatch, ownProps) {
    var actions = ownProps.actions;
    for (var key in actions) {
        if (actions.hasOwnProperty(key)) {
            var element = actions[key];
            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }
    return { actions: actions };
};
export var MergeHoc = function (hocFactory, Component) {
    var MergeComponentHoc = (function (_super) {
        __extends(MergeComponentHoc, _super);
        function MergeComponentHoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MergeComponentHoc.prototype.render = function () {
            var _a = this.props, schema = _a.schema, uiSchema = _a.uiSchema, parentKeys = _a.parentKeys, schemaFormOptions = _a.schemaFormOptions, schemaKey = _a.schemaKey, mergeSchemaList;
            var formDefaultData = {}, mergeSchema = schema;
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
        };
        MergeComponentHoc = __decorate([
            compose(onlyUpdateForKeys(["schema"]), connect(null, mapDispatchToProps))
        ], MergeComponentHoc);
        return MergeComponentHoc;
    }(React.PureComponent));
    return MergeComponentHoc;
};
//# sourceMappingURL=merge.jsx.map