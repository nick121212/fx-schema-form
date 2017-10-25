import * as tslib_1 from "tslib";
import React from "react";
import { Form, Button, Collapse } from "antd";
import { connect } from "react-redux";
import { createForms, SchemaForm, SchemaFormCreate } from "../../index";
import { ajv, schemaFormOptions, globalOptions } from "../init";
var Panel = Collapse.Panel;
var schema = ajv.getSchema("normal").schema;
var uiSchema = ["*"];
var reducer = createForms.createOne("normal", {}, ajv, schema);
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
                        metaData = SchemaFormCreate.metas.normal;
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
        return (React.createElement(Collapse, { bordered: false, defaultActiveKey: ["1", "4"] },
            React.createElement(Panel, { header: "schema", key: "2" }, JSON.stringify(schema)),
            React.createElement(Panel, { header: "uiSchema", key: "5" }, uiSchema ? JSON.stringify(uiSchema || {}) : {}),
            React.createElement(Panel, { header: "data", key: "3" }, this.props.data ? JSON.stringify(this.props.data) : {}),
            React.createElement(Panel, { header: "meta", key: "4" }, this.props.meta ? JSON.stringify(this.props.meta || {}) : {}),
            React.createElement(Panel, { header: "生成的表单", key: "1" },
                React.createElement(SchemaForm, { schemaKey: "normal", schemaFormOptions: schemaFormOptions, schema: schema, getCurrentState: function (state, props) {
                        return state.get("normal");
                    }, RootComponent: Form, uiSchema: uiSchema, globalOptions: globalOptions },
                    React.createElement(Form.Item, { labelCol: { xs: 6, offset: 12 }, wrapperCol: { xs: 6, offset: 12 } },
                        React.createElement(Button, { type: "primary", loading: isLoading, onClick: this.doSubmit.bind(this) }, "\u63D0\u4EA4"))))));
    };
    NormalSchemaFormComponent = tslib_1.__decorate([
        connect(function (state, props) {
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
}(React.Component));
export { NormalSchemaFormComponent };
export { reducer };
//# sourceMappingURL=index.js.map