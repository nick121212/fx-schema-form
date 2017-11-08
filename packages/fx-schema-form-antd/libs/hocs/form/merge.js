"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var fx_schema_form_core_1 = require("fx-schema-form-core");
var react_redux_1 = require("react-redux");
var recompose_1 = require("recompose");
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
exports.MergeHoc = function (hocFactory, Component) {
    var MergeComponentHoc = /** @class */ (function (_super) {
        tslib_1.__extends(MergeComponentHoc, _super);
        function MergeComponentHoc() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MergeComponentHoc.prototype.render = function () {
            var _a = this.props, schema = _a.schema, uiSchema = _a.uiSchema, parentKeys = _a.parentKeys, schemaFormOptions = _a.schemaFormOptions, schemaKey = _a.schemaKey, mergeSchemaList;
            var formDefaultData = {}, mergeSchema = schema;
            if (!schemaKey) {
                schemaKey = (Date.now() + Math.random()).toString();
            }
            // 设置默认值
            schemaFormOptions = schemaFormOptions || {
                avjOptions: {}
            };
            // 判断schema的keys是否有值，为空则标志，这只是一个容器组件
            if (parentKeys && !parentKeys.length) {
                schemaFormOptions.parentKeys = schemaFormOptions.parentKeys || [];
                if (schemaFormOptions.map.has(schemaFormOptions.parentKeys.join("/"))) {
                    mergeSchema = schemaFormOptions.map.get(schemaFormOptions.parentKeys.join("/"));
                }
            }
            else {
                schemaFormOptions.parentKeys = parentKeys;
            }
            // 合并schema和uiSchema
            mergeSchemaList = fx_schema_form_core_1.schemaMerge.merge(schemaKey, mergeSchema, uiSchema, schemaFormOptions);
            return (react_1.default.createElement(Component, tslib_1.__assign({ schemaFormOptions: schemaFormOptions || {}, schemaKey: schemaKey, mergeSchemaList: mergeSchemaList }, this.props)));
        };
        MergeComponentHoc = tslib_1.__decorate([
            recompose_1.compose(recompose_1.onlyUpdateForKeys(["schema"]), react_redux_1.connect(null, mapDispatchToProps))
        ], MergeComponentHoc);
        return MergeComponentHoc;
    }(react_1.default.PureComponent));
    return MergeComponentHoc;
};
//# sourceMappingURL=merge.js.map