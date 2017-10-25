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
            $ref: "test#/properties/object"
        },
        name: {
            $ref: "test#/properties/name"
        }
    }
};
var uiSchema = [
    {
        field: "object",
        "ui:item.hoc": ["theme", "field", "array", "temp"],
        items: ["object/settings", {
                "key": "name"
            }],
    },
    "name",
    "object",
    "object/settings"
];
var reducer = createForms.createOne("object", {}, ajv, schema);
var ObjectSchemaFormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectSchemaFormComponent, _super);
    function ObjectSchemaFormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObjectSchemaFormComponent.prototype.doSubmit = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var metaData, _a, _b, _c;
            return tslib_1.__generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        metaData = SchemaFormCreate.metas.object;
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
    ObjectSchemaFormComponent.prototype.render = function () {
        var isLoading = this.props.isLoading;
        return (React.createElement(Collapse, { bordered: false, defaultActiveKey: ["1", "4"] },
            React.createElement(Panel, { header: "schema", key: "2" }, JSON.stringify(schema)),
            React.createElement(Panel, { header: "data", key: "3" }, this.props.data ? JSON.stringify(this.props.data) : {}),
            React.createElement(Panel, { header: "meta", key: "4" }, this.props.meta ? JSON.stringify(this.props.meta || {}) : {}),
            React.createElement(Panel, { header: "生成的表单", key: "1" },
                React.createElement("div", null, "\u8FD9\u91CC\u67092\u4E2Aswitch\u7EC4\u4EF6\uFF0C2\u4E2A\u662F\u540C\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u4F46\u662F\u5B57\u6BB5\u7684\u8DEF\u5F84\u4E0D\u540C\u3002UiSchema\uFF1A[\"object\", \"object/settings\"]"),
                React.createElement(SchemaForm, { schemaKey: "object", schemaFormOptions: schemaFormOptions, schema: schema, getCurrentState: function (state, props) {
                        return state.get("object");
                    }, RootComponent: Form, uiSchema: uiSchema, globalOptions: globalOptions },
                    React.createElement(Form.Item, { labelCol: { xs: 6, offset: 12 }, wrapperCol: { xs: 6, offset: 12 } },
                        React.createElement(Button, { type: "primary", loading: isLoading, onClick: this.doSubmit.bind(this) }, "\u63D0\u4EA4"))))));
    };
    ObjectSchemaFormComponent = tslib_1.__decorate([
        connect(function (state, props) {
            var _a = state.get("object"), meta = _a.meta, data = _a.data;
            return {
                isValid: meta.isValid,
                isLoading: meta.isLoading,
                meta: meta,
                data: data
            };
        })
    ], ObjectSchemaFormComponent);
    return ObjectSchemaFormComponent;
}(React.Component));
export { ObjectSchemaFormComponent };
export { reducer };
//# sourceMappingURL=index.js.map