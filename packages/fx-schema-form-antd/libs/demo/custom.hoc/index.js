import * as tslib_1 from "tslib";
import React from "react";
import { Form, Button, Collapse } from "antd";
import { connect } from "react-redux";
import { createForms, SchemaForm, SchemaFormCreate } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";
var Panel = Collapse.Panel;
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
var reducer = createForms.createOne("custom.hoc", {}, ajv, schema);
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
                        metaData = SchemaFormCreate.metas["custom.hoc"];
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
        return (React.createElement(Collapse, { bordered: false, defaultActiveKey: ["1", "4"] },
            React.createElement(Panel, { header: "schema", key: "2" }, JSON.stringify(schema)),
            React.createElement(Panel, { header: "uiSchema", key: "5" }, uiSchema ? JSON.stringify(uiSchema || {}) : {}),
            React.createElement(Panel, { header: "data", key: "3" }, this.props.data ? JSON.stringify(this.props.data) : {}),
            React.createElement(Panel, { header: "meta", key: "4" }, this.props.meta ? JSON.stringify(this.props.meta || {}) : {}),
            React.createElement(Panel, { header: "生成的表单", key: "1" },
                React.createElement("div", null, "\u8FD9\u91CC\u7684name\u5B57\u6BB5\uFF0C\u53EA\u6709\u5F53switch\u672A\u5F00\u7684\u65F6\u5019\u624D\u4F1A\u663E\u793A"),
                React.createElement(SchemaForm, { schemaKey: "custom.hoc", schemaFormOptions: schemaFormOptions, schema: schema, getCurrentState: function (state, props) {
                        return state.get("custom.hoc");
                    }, RootComponent: Form, uiSchema: uiSchema, globalOptions: globalOptions },
                    React.createElement(Form.Item, { labelCol: { xs: 6, offset: 12 }, wrapperCol: { xs: 6, offset: 12 } },
                        React.createElement(Button, { type: "primary", loading: isLoading, onClick: this.doSubmit.bind(this) }, "\u63D0\u4EA4"))))));
    };
    CustomHocSchemaFormComponent = tslib_1.__decorate([
        connect(function (state, props) {
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
}(React.Component));
export { CustomHocSchemaFormComponent };
export { reducer };
//# sourceMappingURL=index.js.map