/// <reference types="react" />
import React from "react";
import "codemirror/mode/javascript/javascript";
export interface FormExampleCompnentProps {
    data: string;
    schema: string;
    uiSchema: string;
    onChange: (data: any) => {};
    onChangeData: (data: any) => {};
}
export declare class FormExampleCompnent extends React.Component<FormExampleCompnentProps> {
    private updateSchema(newCode);
    private updateUiSchema(newCode);
    private updateData(newCode);
    render(): JSX.Element;
}
