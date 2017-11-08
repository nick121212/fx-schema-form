"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var react_redux_1 = require("react-redux");
var lodash_clonedeep_1 = require("lodash.clonedeep");
var react_codemirror_1 = require("react-codemirror");
var lodash_isequal_1 = require("lodash.isequal");
var immutable_1 = require("immutable");
var index_1 = require("../../index");
var init_1 = require("../init");
var schema_1 = require("../reducer/schema");
var form_example_1 = require("../components/form.example");
var Panel = antd_1.Collapse.Panel;
var defaultSchema = {
    "$async": true,
    type: "object",
    required: [],
    properties: {
        array1: {
            $ref: "array"
        }
    }
};
var settings = new schema_1.FormExampleReducer({
    schema: lodash_clonedeep_1.default(defaultSchema),
    uiSchema: ["*"]
});
exports.settings = settings;
var reducer = index_1.createForms.createOne("array", {}, init_1.ajv, defaultSchema, function (state) {
    return {
        originMeta: state.get("meta").toJS(),
        originData: state.get("data").toJS()
    };
}, function (state, data) {
    if (immutable_1.default.Map.isMap(state)) {
        return state.merge(data);
    }
    return immutable_1.default.fromJS(data);
});
exports.reducer = reducer;
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
                        metaData = index_1.SchemaFormCreate.metas.array;
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
        if (!lodash_isequal_1.default(this.props.schema, nextProps.schema) || !lodash_isequal_1.default(this.props.uiSchema, nextProps.uiSchema)) {
            nextKey = "" + Date.now();
            init_1.ajv.removeSchema("array");
        }
        return true;
    };
    ArraySchemaFormComponent.prototype.render = function () {
        var _a = this.props, isLoading = _a.isLoading, schema = _a.schema, uiSchema = _a.uiSchema, data = _a.data, meta = _a.meta, schemaForm = _a.schemaForm;
        var options = {
            lineNumbers: true,
            mode: "javascript",
            smartIndent: true,
            indentUnit: 4,
            indentWithTabs: true,
            readOnly: true
        };
        return (react_1.default.createElement(antd_1.Collapse, { bordered: false, defaultActiveKey: ["1", "2"] },
            react_1.default.createElement(Panel, { header: "meta 和 data", key: "2" },
                react_1.default.createElement(antd_1.Row, null,
                    react_1.default.createElement(antd_1.Col, { span: 12 },
                        react_1.default.createElement(react_codemirror_1.default, { key: Date.now(), value: this.props.meta ? JSON.stringify(this.props.meta || {}, null, 4) : "", options: options })),
                    react_1.default.createElement(antd_1.Col, { span: 12 },
                        react_1.default.createElement(react_codemirror_1.default, { key: Date.now(), value: data ? JSON.stringify(data || {}, null, 4) : "", options: options })))),
            react_1.default.createElement(Panel, { header: "生成的表单", key: "1" },
                react_1.default.createElement(antd_1.Row, null,
                    react_1.default.createElement(antd_1.Col, { span: 16 },
                        react_1.default.createElement(index_1.SchemaForm, { schemaKey: "array", schemaFormOptions: {
                                ajv: init_1.ajv
                            }, key: "dddd", getCurrentState: function (state, props) {
                                return state.get("array").toJS();
                            }, schema: schema, uiSchema: uiSchema, RootComponent: antd_1.Form, globalOptions: init_1.globalOptions },
                            react_1.default.createElement(antd_1.Form.Item, { labelCol: { xs: 6, offset: 12 }, wrapperCol: { xs: 6, offset: 12 } },
                                react_1.default.createElement(antd_1.Button, { type: "primary", loading: isLoading, onClick: this.doSubmit.bind(this) }, "\u63D0\u4EA4")))),
                    react_1.default.createElement(antd_1.Col, { span: 8 },
                        react_1.default.createElement(form_example_1.FormExampleCompnent, { schema: JSON.stringify(schema, null, 4), data: JSON.stringify(data, null, 4), uiSchema: JSON.stringify(uiSchema, null, 4), onChangeData: reducer.actions.updateData.bind(reducer), onChange: settings.actions.updateData.bind(settings) }))))));
    };
    ArraySchemaFormComponent = tslib_1.__decorate([
        react_redux_1.connect(function (state, props) {
            var schemaForm = state.get("array").toJS();
            var _a = state.get("arraySetting"), schema = _a.schema, uiSchema = _a.uiSchema;
            return {
                isValid: schemaForm.meta.isValid,
                isLoading: schemaForm.meta.isLoading,
                meta: schemaForm.meta,
                data: schemaForm.data,
                schemaForm: schemaForm,
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
}(react_1.default.Component));
exports.ArraySchemaFormComponent = ArraySchemaFormComponent;
//# sourceMappingURL=index.js.map