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
            $ref: "array"
        }
    }
};
var settings = new FormExampleReducer({
    schema: cloneDeep(defaultSchema),
    uiSchema: ["*"]
});
var reducer = createForms.createOne("array", {}, {}, "", ajv, defaultSchema);
var nextKey = "array";
var ArraySchemaFormComponent = (function (_super) {
    __extends(ArraySchemaFormComponent, _super);
    function ArraySchemaFormComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArraySchemaFormComponent.prototype.doSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var metaData, _a, _b, _c, e_1;
            return __generator(this, function (_d) {
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
                        return [4, metaData.validateAll(this.props.data)];
                    case 2:
                        _b.apply(_a, [(_c.meta = _d.sent(),
                                _c)]);
                        return [3, 4];
                    case 3:
                        e_1 = _d.sent();
                        console.log("dfdfdfdf", e_1);
                        return [3, 4];
                    case 4:
                        if (this.props.isValid) {
                            alert("提交表单");
                        }
                        return [2];
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
        var _a = this.props, isLoading = _a.isLoading, schema = _a.schema, uiSchema = _a.uiSchema, data = _a.data, meta = _a.meta, schemaForm = _a.schemaForm;
        var options = {
            lineNumbers: true,
            mode: "javascript",
            smartIndent: true,
            indentUnit: 4,
            indentWithTabs: true,
            readOnly: true
        };
        return (<Collapse bordered={false} defaultActiveKey={["1", "2"]}>
                <Panel header={"meta 和 data"} key="2">
                    <Row>
                        <Col span={12}>
                            <ReactCodeMirror key={Date.now()} value={this.props.meta ? JSON.stringify(this.props.meta || {}, null, 4) : ""} options={options}/>
                        </Col>
                        <Col span={12}>
                            <ReactCodeMirror key={Date.now()} value={data ? JSON.stringify(data || {}, null, 4) : ""} options={options}/>
                        </Col>
                    </Row>
                </Panel>
                <Panel header={"生成的表单"} key="1">
                    <Row>
                        <Col span={16}>
                            <SchemaForm schemaKey={"array"} schemaFormOptions={{
            ajv: ajv
        }} key={"dddd"} getCurrentState={function (state, props) {
            return state.get("array").toJS();
        }} schema={schema} uiSchema={uiSchema} RootComponent={Form} globalOptions={globalOptions}>
                                <Form.Item labelCol={{ xs: 6, offset: 12 }} wrapperCol={{ xs: 6, offset: 12 }}>
                                    <Button type="primary" loading={isLoading} onClick={this.doSubmit.bind(this)}>提交</Button>
                                </Form.Item>
                            </SchemaForm>
                        </Col>
                        <Col span={8}>
                            <FormExampleCompnent schema={JSON.stringify(schema, null, 4)} data={JSON.stringify(data, null, 4)} uiSchema={JSON.stringify(uiSchema, null, 4)} onChangeData={reducer.actions.updateData.bind(reducer)} onChange={settings.actions.updateData.bind(settings)}/>
                        </Col>
                    </Row>
                </Panel>
            </Collapse>);
    };
    ArraySchemaFormComponent = __decorate([
        connect(function (state, props) {
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
}(React.Component));
export { ArraySchemaFormComponent };
export { reducer, settings };
//# sourceMappingURL=index.jsx.map