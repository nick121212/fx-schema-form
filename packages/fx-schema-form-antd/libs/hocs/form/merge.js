import * as tslib_1 from "tslib";
import React from "react";
import { schemaMerge } from "fx-schema-form-core";
import { connect } from "react-redux";
import { compose, onlyUpdateForKeys } from "recompose";
/**
 * 使得actions可以直接调用，绑定到dispatch
 * @param dispatch dispatch
 * @param ownProps 属性
 */
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
/**
 * merge参数中的schema和uiSchema，生成新的对象mergeSchemaList，传入组件的props中
 * @param hocFactory  hoc的工厂方法
 * @param Component   需要包装的组件
 * 加入属性
 * schemaFormOptions  merge只有，返回的options
 * schemaKey          生成的schemaKey
 * mergeSchemaList    合并之后的数据
 */
export var MergeHoc = function (hocFactory, Component) {
    var MergeComponentHoc = /** @class */ (function (_super) {
        tslib_1.__extends(MergeComponentHoc, _super);
        function MergeComponentHoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MergeComponentHoc.prototype.render = function () {
            var _a = this.props, schema = _a.schema, uiSchema = _a.uiSchema, parentKeys = _a.parentKeys, schemaFormOptions = _a.schemaFormOptions, schemaKey = _a.schemaKey, formData = _a.formData, mergeSchemaList;
            var formDefaultData = {};
            console.log("merge render -----");
            if (!schemaKey) {
                schemaKey = (Date.now() + Math.random()).toString();
            }
            // 设置默认值
            schemaFormOptions = schemaFormOptions || {
                avjOptions: {
                    allErrors: true,
                    jsonPointers: true,
                    verbose: true,
                    useDefaults: true,
                    errorDataPath: "property"
                }
            };
            schemaFormOptions.parentKeys = parentKeys || [];
            // 合并schema和uiSchema
            mergeSchemaList = schemaMerge.merge(schemaKey, schema, uiSchema, schemaFormOptions);
            return (React.createElement(Component, tslib_1.__assign({ schemaFormOptions: schemaFormOptions || {}, schemaKey: schemaKey, mergeSchemaList: mergeSchemaList }, this.props)));
        };
        MergeComponentHoc = tslib_1.__decorate([
            compose(onlyUpdateForKeys(["schema"]), connect(null, mapDispatchToProps))
        ], MergeComponentHoc);
        return MergeComponentHoc;
    }(React.PureComponent));
    return MergeComponentHoc;
};
//# sourceMappingURL=merge.js.map