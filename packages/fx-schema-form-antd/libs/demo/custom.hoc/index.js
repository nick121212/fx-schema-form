var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var CustomHocSchemaFormComponent = (function (_super) {
    __extends(CustomHocSchemaFormComponent, _super);
    function CustomHocSchemaFormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHocSchemaFormComponent.prototype.doSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var metaData, _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        metaData = SchemaFormCreate.metas["custom.hoc"];
                        reducer.actions.updateMetaState({ isLoading: true, isValid: false });
                        _b = (_a = reducer.actions).updateMetaState;
                        _c = {
                            isLoading: false
                        };
                        return [4, metaData.validateAll(this.props.data)];
                    case 1:
                        _b.apply(_a, [(_c.meta = _d.sent(),
                                _c)]);
                        if (this.props.isValid) {
                            alert("提交表单");
                        }
                        return [2];
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
    CustomHocSchemaFormComponent = __decorate([
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