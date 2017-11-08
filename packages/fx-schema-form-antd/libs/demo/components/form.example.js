"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("react");
var react_codemirror_1 = require("react-codemirror");
require("codemirror/mode/javascript/javascript");
var antd_1 = require("antd");
var FormExampleCompnent = /** @class */ (function (_super) {
    tslib_1.__extends(FormExampleCompnent, _super);
    function FormExampleCompnent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormExampleCompnent.prototype.updateSchema = function (newCode) {
        this.props.onChange({ schema: JSON.parse(newCode), uiSchema: null });
    };
    FormExampleCompnent.prototype.updateUiSchema = function (newCode) {
        this.props.onChange({ schema: null, uiSchema: JSON.parse(newCode) });
    };
    FormExampleCompnent.prototype.updateData = function (newCode) {
        this.props.onChangeData(JSON.parse(newCode));
    };
    FormExampleCompnent.prototype.render = function () {
        var _a = this.props, schema = _a.schema, uiSchema = _a.uiSchema, data = _a.data, onChange = _a.onChange, onChangeData = _a.onChangeData;
        var options = {
            lineNumbers: true,
            mode: "javascript",
            smartIndent: true,
            indentUnit: 4,
            indentWithTabs: true
        };
        var style = {};
        return (react_1.default.createElement(antd_1.Card, { noHovering: true, bodyStyle: { padding: 0 }, title: "更改更新表单", bordered: false },
            react_1.default.createElement(antd_1.Row, null,
                react_1.default.createElement(antd_1.Col, { style: style },
                    react_1.default.createElement(react_codemirror_1.default, { value: schema, onChange: this.updateSchema.bind(this), options: options })),
                react_1.default.createElement(antd_1.Col, null,
                    react_1.default.createElement(react_codemirror_1.default, { value: uiSchema, onChange: this.updateUiSchema.bind(this), options: options })))));
        // return <ReactCodeMirror value={JSON.stringify(schema, null, 4)} onChange={this.updateCode} options={options} />;
    };
    return FormExampleCompnent;
}(react_1.default.Component));
exports.FormExampleCompnent = FormExampleCompnent;
//# sourceMappingURL=form.example.js.map