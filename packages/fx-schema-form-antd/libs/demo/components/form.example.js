import * as tslib_1 from "tslib";
import React from "react";
import ReactCodeMirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";
import { Row, Col, Card } from "antd";
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
        return (React.createElement(Card, { noHovering: true, bodyStyle: { padding: 0 }, title: "更改更新表单", bordered: false },
            React.createElement(Row, null,
                React.createElement(Col, { style: style },
                    React.createElement(ReactCodeMirror, { value: schema, onChange: this.updateSchema.bind(this), options: options })),
                React.createElement(Col, null,
                    React.createElement(ReactCodeMirror, { value: uiSchema, onChange: this.updateUiSchema.bind(this), options: options })))));
        // return <ReactCodeMirror value={JSON.stringify(schema, null, 4)} onChange={this.updateCode} options={options} />;
    };
    return FormExampleCompnent;
}(React.Component));
export { FormExampleCompnent };
//# sourceMappingURL=form.example.js.map