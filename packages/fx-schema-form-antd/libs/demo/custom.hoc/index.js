"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var antd_1 = require("antd");
var react_redux_1 = require("react-redux");
var index_1 = require("../../index");
var init_1 = require("../init");
var Panel = antd_1.Collapse.Panel;
var schema = {
    "$async": true,
    type: "object",
    required: ["name"],
    properties: {
        object: {
            default: {},
            $ref: "test#/properties/object"
        },
        name: {
            $ref: "test#/properties/name"
        }
    }
};
var uiSchema = [{
        "key": "name",
        "ui:item.hoc": ["theme", "field", "validate", "array", "condition", "temp"],
        "options": {
            "hoc": {
                "condition": {
                    "fields": [{ "key": "/object/settings", "val": true }]
                }
            }
        }
    }, "object/settings"];
var reducer = index_1.createForms.createOne("custom.hoc", {}, init_1.ajv, schema);
exports.reducer = reducer;
var CustomHocSchemaFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CustomHocSchemaFormComponent, _super);
    function CustomHocSchemaFormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHocSchemaFormComponent.prototype.doSubmit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var metaData, _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        metaData = index_1.SchemaFormCreate.metas["custom.hoc"];
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
    CustomHocSchemaFormComponent.prototype.render = function () {
        var isLoading = this.props.isLoading;
        return (react_1.default.createElement(antd_1.Collapse, { bordered: false, defaultActiveKey: ["1", "4"] },
            react_1.default.createElement(Panel, { header: "schema", key: "2" }, JSON.stringify(schema)),
            react_1.default.createElement(Panel, { header: "uiSchema", key: "5" }, uiSchema ? JSON.stringify(uiSchema || {}) : {}),
            react_1.default.createElement(Panel, { header: "data", key: "3" }, this.props.data ? JSON.stringify(this.props.data) : {}),
            react_1.default.createElement(Panel, { header: "meta", key: "4" }, this.props.meta ? JSON.stringify(this.props.meta || {}) : {}),
            react_1.default.createElement(Panel, { header: "生成的表单", key: "1" },
                react_1.default.createElement("div", null, "\u8FD9\u91CC\u7684name\u5B57\u6BB5\uFF0C\u53EA\u6709\u5F53switch\u672A\u5F00\u7684\u65F6\u5019\u624D\u4F1A\u663E\u793A"),
                react_1.default.createElement(index_1.SchemaForm, { schemaKey: "custom.hoc", schemaFormOptions: init_1.schemaFormOptions, schema: schema, getCurrentState: function (state, props) {
                        return state.get("custom.hoc");
                    }, RootComponent: antd_1.Form, uiSchema: uiSchema, globalOptions: init_1.globalOptions },
                    react_1.default.createElement(antd_1.Form.Item, { labelCol: { xs: 6, offset: 12 }, wrapperCol: { xs: 6, offset: 12 } },
                        react_1.default.createElement(antd_1.Button, { type: "primary", loading: isLoading, onClick: this.doSubmit.bind(this) }, "\u63D0\u4EA4"))))));
    };
    CustomHocSchemaFormComponent = tslib_1.__decorate([
        react_redux_1.connect(function (state, props) {
            var _a = state.get("custom.hoc"), meta = _a.meta, data = _a.data;
            return {
                isValid: meta.isValid,
                isLoading: meta.isLoading,
                meta: meta,
                data: data
            };
        })
    ], CustomHocSchemaFormComponent);
    return CustomHocSchemaFormComponent;
}(react_1.default.Component));
exports.CustomHocSchemaFormComponent = CustomHocSchemaFormComponent;
//# sourceMappingURL=index.js.map