var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from "react";
import { schemaMerge } from "fx-schema-form-core";
// import { schemaMerge } from "../../../../../fx-schema-form-core/src";
import { connect } from "react-redux";
import { compose, onlyUpdateForKeys } from "recompose";
import { mapActionsStateToProps } from "../../select";
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
/**
 * merge参数中的schema和uiSchema，生成新的对象mergeSchemaList，传入组件的props中
 * @param Component 需要包装的组件
 * 加入属性
 * schemaFormOptions  merge只有，返回的options
 * schemaKey          生成的schemaKey
 * mergeSchemaList    合并之后的数据
 */
export const MergeHoc = (Component) => {
    let Hoc = class Hoc extends React.Component {
        render() {
            let { schema, uiSchema, parentKeys, schemaFormOptions, schemaKey, actions } = this.props, mergeSchemaList;
            if (!schemaKey) {
                schemaKey = (Date.now() + Math.random()).toString();
            }
            // 设置默认值
            schemaFormOptions = schemaFormOptions || {
                avjOptions: {
                    allErrors: true,
                    jsonPointers: true,
                    verbose: true,
                    errorDataPath: "property"
                }
            };
            schemaFormOptions.parentKeys = parentKeys || [];
            // 合并schema和uiSchema
            mergeSchemaList = schemaMerge.merge(schemaKey, schema, uiSchema, schemaFormOptions);
            return (React.createElement(Component, Object.assign({ schemaFormOptions: schemaFormOptions || {}, schemaKey: schemaKey, mergeSchemaList: mergeSchemaList }, this.props)));
        }
    };
    Hoc = __decorate([
        compose(connect(mapActionsStateToProps), connect(null, mapDispatchToProps), onlyUpdateForKeys(["schema", "uiSchema"]))
    ], Hoc);
    return Hoc;
};
//# sourceMappingURL=merge.js.map