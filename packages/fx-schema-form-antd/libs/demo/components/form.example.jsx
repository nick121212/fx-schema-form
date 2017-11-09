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
        return (<Card noHovering bodyStyle={{ padding: 0 }} title="更改更新表单" bordered={false}>
                <Row>
                    
                    <Col style={style}>
                        <ReactCodeMirror value={schema} onChange={this.updateSchema.bind(this)} options={options}/>
                    </Col>
                    <Col>
                        <ReactCodeMirror value={uiSchema} onChange={this.updateUiSchema.bind(this)} options={options}/>
                    </Col>
                </Row>
            </Card>);
    }
}
//# sourceMappingURL=form.example.jsx.map