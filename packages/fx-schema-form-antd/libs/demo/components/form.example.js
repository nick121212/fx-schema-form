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
import React from "react";
import ReactCodeMirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";
import { Row, Col, Card } from "antd";
var FormExampleCompnent = (function (_super) {
    __extends(FormExampleCompnent, _super);
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
    };
    return FormExampleCompnent;
}(React.Component));
export { FormExampleCompnent };
//# sourceMappingURL=form.example.js.map