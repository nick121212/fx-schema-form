import * as tslib_1 from "tslib";
import React from "react";
import { Form, Button, Collapse, Row, Col } from "antd";
import { connect } from "react-redux";
import cloneDeep from "lodash.clonedeep";
import ReactCodeMirror from "react-codemirror";
import isEqual from "lodash.isequal";
import { createForms, SchemaForm, SchemaFormCreate } from "../../index";
import { ajv, globalOptions } from "../init";
import { FormExampleReducer } from "../reducer/schema";
import { FormExampleCompnent } from "../components/form.example";
var Panel = Collapse.Panel;
var defaultSchema = {
    "$async": true,
    type: "object",
    required: [],
    properties: {
        array1: {
            $ref: "test#/properties/array1"
        }
    }
};
var settings = new FormExampleReducer({
    schema: cloneDeep(defaultSchema),
    uiSchema: ["*"]
});
var reducer = createForms.createOne("array", {
    array1: [{
            test: "nick", children: [{
                    test: "nick",
                    children: [{
                            test: "nick", children: [{}]
                        }]
                }]
        }]
}, ajv, defaultSchema);
var nextKey = "array";
var ArraySchemaFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ArraySchemaFormComponent, _super);
    function ArraySchemaFormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArraySchemaFormComponent.prototype.doSubmit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var metaData, _a, _b, _c, e_1;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        metaData = SchemaFormCreate.metas.array;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 3, , 4]);
                        reducer.actions.updateMetaState({ isLoading: true, isValid: false });
                        _b = (_a = reducer.actions).updateMetaState;
                        _c = {
                            isLoading: false
                        };
                        return [4 /*yield*/, metaData.validateAll(this.props.data)];
                    case 2:
                        _b.apply(_a, [(_c.meta = _d.sent(),
                                _c)]);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _d.sent();
                        console.log("dfdfdfdf", e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        if (this.props.isValid) {
                            alert("提交表单");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArraySchemaFormComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (!isEqual(this.props.schema, nextProps.schema) || !isEqual(this.props.uiSchema, nextProps.uiSchema)) {
            nextKey = "" + Date.now();
            ajv.removeSchema("array");
        }
        return true;
    };
    ArraySchemaFormComponent.prototype.render = function () {
        var _a = this.props, isLoading = _a.isLoading, schema = _a.schema, uiSchema = _a.uiSchema, data = _a.data, meta = _a.meta;
        var options = {
            lineNumbers: true,
            mode: "javascript",
            smartIndent: true,
            indentUnit: 4,
            indentWithTabs: true,
            readOnly: true
        };
        return (React.createElement(Collapse, { bordered: false, defaultActiveKey: ["1", "2"] },
            React.createElement(Panel, { header: "meta 和 data", key: "2" },
                React.createElement(Row, null,
                    React.createElement(Col, { span: 12 },
                        React.createElement(ReactCodeMirror, { key: Date.now(), value: this.props.meta ? JSON.stringify(this.props.meta || {}, null, 4) : "", options: options })),
                    React.createElement(Col, { span: 12 },
                        React.createElement(ReactCodeMirror, { key: Date.now(), value: data ? JSON.stringify(data || {}, null, 4) : "", options: options })))),
            React.createElement(Panel, { header: "生成的表单", key: "1" },
                React.createElement(Row, null,
                    React.createElement(Col, { span: 16 },
                        React.createElement(SchemaForm, { schemaKey: "array", schemaFormOptions: {
                                ajv: ajv
                            }, key: nextKey, getCurrentState: function (state, props) {
                                return state.get("array");
                            }, schema: schema, uiSchema: uiSchema, RootComponent: Form, globalOptions: globalOptions },
                            React.createElement(Form.Item, { labelCol: { xs: 6, offset: 12 }, wrapperCol: { xs: 6, offset: 12 } },
                                React.createElement(Button, { type: "primary", loading: isLoading, onClick: this.doSubmit.bind(this) }, "\u63D0\u4EA4")))),
                    React.createElement(Col, { span: 8 },
                        React.createElement(FormExampleCompnent, { schema: JSON.stringify(schema, null, 4), data: JSON.stringify(data, null, 4), uiSchema: JSON.stringify(uiSchema, null, 4), onChangeData: reducer.actions.updateData.bind(reducer), onChange: settings.actions.updateData.bind(settings) }))))));
    };
    ArraySchemaFormComponent = tslib_1.__decorate([
        connect(function (state, props) {
            var _a = state.get("array"), meta = _a.meta, data = _a.data;
            var _b = state.get("arraySetting"), schema = _b.schema, uiSchema = _b.uiSchema;
            return {
                isValid: meta.isValid,
                isLoading: meta.isLoading,
                meta: meta,
                data: data,
                schema: schema,
                uiSchema: uiSchema
            };
        }, function (dispatch) {
            if (!settings.actions.updateData.assigned()) {
                settings.actions.updateData.assignTo(dispatch);
            }
            return {};
        })
    ], ArraySchemaFormComponent);
    return ArraySchemaFormComponent;
}(React.Component));
export { ArraySchemaFormComponent };
export { reducer, settings };
//# sourceMappingURL=index.js.map