"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var react_redux_1 = require("react-redux");
var index_1 = require("../../index");
var init_1 = require("../init");
var Panel = antd_1.Collapse.Panel;
var schema = init_1.ajv.getSchema("normal").schema;
var uiSchema = ["*"];
var reducer = index_1.createForms.createOne("normal", {}, init_1.ajv, schema);
exports.reducer = reducer;
var NormalSchemaFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NormalSchemaFormComponent, _super);
    function NormalSchemaFormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NormalSchemaFormComponent.prototype.doSubmit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var metaData, _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        metaData = index_1.SchemaFormCreate.metas.normal;
                        reducer.actions.updateMetaState({ isLoading: true, isValid: false });
                        _b = (_a = reducer.actions).updateMetaState;
                        _c = {
                            isLoading: false
                        };
                        return [4 /*yield*/, metaData.validateAll(this.props.data)];
                    case 1:
                        _b.apply(_a, [(_c.meta = _d.sent(),
                                _c)]);
                        if (this.props.isValid) {
                            alert("提交表单");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    NormalSchemaFormComponent.prototype.render = function () {
        var isLoading = this.props.isLoading;
        return (react_1.default.createElement(antd_1.Collapse, { bordered: false, defaultActiveKey: ["1", "4"] },
            react_1.default.createElement(Panel, { header: "schema", key: "2" }, JSON.stringify(schema)),
            react_1.default.createElement(Panel, { header: "uiSchema", key: "5" }, uiSchema ? JSON.stringify(uiSchema || {}) : {}),
            react_1.default.createElement(Panel, { header: "data", key: "3" }, this.props.data ? JSON.stringify(this.props.data) : {}),
            react_1.default.createElement(Panel, { header: "meta", key: "4" }, this.props.meta ? JSON.stringify(this.props.meta || {}) : {}),
            react_1.default.createElement(Panel, { header: "生成的表单", key: "1" },
                react_1.default.createElement(index_1.SchemaForm, { schemaKey: "normal", schemaFormOptions: init_1.schemaFormOptions, schema: schema, getCurrentState: function (state, props) {
                        return state.get("normal");
                    }, RootComponent: antd_1.Form, uiSchema: uiSchema, globalOptions: init_1.globalOptions },
                    react_1.default.createElement(antd_1.Form.Item, { labelCol: { xs: 6, offset: 12 }, wrapperCol: { xs: 6, offset: 12 } },
                        react_1.default.createElement(antd_1.Button, { type: "primary", loading: isLoading, onClick: this.doSubmit.bind(this) }, "\u63D0\u4EA4"))))));
    };
    NormalSchemaFormComponent = tslib_1.__decorate([
        react_redux_1.connect(function (state, props) {
            var _a = state.get("normal"), meta = _a.meta, data = _a.data;
            return {
                isValid: meta.isValid,
                isLoading: meta.isLoading,
                meta: meta,
                data: data
            };
        })
    ], NormalSchemaFormComponent);
    return NormalSchemaFormComponent;
}(react_1.default.Component));
exports.NormalSchemaFormComponent = NormalSchemaFormComponent;
//# sourceMappingURL=index.js.map