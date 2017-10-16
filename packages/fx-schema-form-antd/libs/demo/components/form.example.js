import React from "react";
import ReactCodeMirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";
import { Row, Col, Card } from "antd";
export class FormExampleCompnent extends React.Component {
    updateSchema(newCode) {
        this.props.onChange({ schema: JSON.parse(newCode), uiSchema: null });
    }
    updateUiSchema(newCode) {
        this.props.onChange({ schema: null, uiSchema: JSON.parse(newCode) });
    }
    updateData(newCode) {
        this.props.onChangeData(JSON.parse(newCode));
    }
    render() {
        const { schema, uiSchema, data, onChange, onChangeData } = this.props;
        const options = {
            lineNumbers: true,
            mode: "javascript",
            smartIndent: true,
            indentUnit: 4,
            indentWithTabs: true
        };
        let style = {};
        return (React.createElement(Card, { noHovering: true, bodyStyle: { padding: 0 }, title: "更改更新表单", bordered: false },
            React.createElement(Row, null,
                React.createElement(Col, { style: style },
                    React.createElement(ReactCodeMirror, { value: schema, onChange: this.updateSchema.bind(this), options: options })),
                React.createElement(Col, null,
                    React.createElement(ReactCodeMirror, { value: uiSchema, onChange: this.updateUiSchema.bind(this), options: options })))));
        // return <ReactCodeMirror value={JSON.stringify(schema, null, 4)} onChange={this.updateCode} options={options} />;
    }
}
//# sourceMappingURL=form.example.js.map