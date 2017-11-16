import React from "react";
import ReactCodeMirror from "react-codemirror";

import "codemirror/mode/javascript/javascript";
import { Row, Col, Card, Button } from "antd";

export interface FormExampleCompnentProps {
    data: string;
    schema: string;
    uiSchema: string;
    onChange: (data: any) => {};
    onChangeData: (data: any) => {};
}

export class FormExampleCompnent extends React.Component<FormExampleCompnentProps> {

    private updateSchema(newCode) {
        this.props.onChange({ schema: JSON.parse(newCode), uiSchema: null });
    }

    private updateUiSchema(newCode) {
        this.props.onChange({ schema: null, uiSchema: JSON.parse(newCode) });
    }

    private updateData(newCode) {
        this.props.onChangeData(JSON.parse(newCode));
    }

    public render() {
        const { schema, uiSchema, data, onChange, onChangeData } = this.props;
        const options = {
            lineNumbers: true,
            mode: "javascript",
            smartIndent: true,
            indentUnit: 4,
            indentWithTabs: true
        };
        let style = {
            // borderRight: "1px solid"
        };

        return (
            <Card noHovering bodyStyle={{ padding: 0 }} title="更改更新表单" bordered={false}>
                <Row>
                    {/* <Col style={style}>
                        <ReactCodeMirror value={data} onChange={this.updateData.bind(this)} options={options} />
                    </Col> */}
                    <Col style={style}>
                        <ReactCodeMirror
                            value={schema} onChange={this.updateSchema.bind(this)} options={options} />
                    </Col>
                    <Col >
                        <ReactCodeMirror
                            value={uiSchema} onChange={this.updateUiSchema.bind(this)} options={options} />
                    </Col>
                </Row>
            </Card>
        );

        // return <ReactCodeMirror value={JSON.stringify(schema, null, 4)} onChange={this.updateCode} options={options} />;
    }
}
