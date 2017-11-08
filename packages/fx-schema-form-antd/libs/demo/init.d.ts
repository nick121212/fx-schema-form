/// <reference types="react" />
import React from "react";
import Ajv from "ajv";
declare const curAjv: Ajv.Ajv;
declare const schemaFormOptions: {
    ajv: Ajv.Ajv;
};
export declare class ItemButtons extends React.PureComponent<any, any> {
    render(): JSX.Element;
}
export declare class ItemChildButtons extends React.PureComponent<any, any> {
    render(): JSX.Element;
}
declare const globalOptions: {
    "ui:temp": string[];
    "boolean": {
        "widget": string;
    };
    "hoc": {
        "array": {
            ItemChildButtons: typeof ItemChildButtons;
            ItemButtons: typeof ItemButtons;
        };
    };
    "formItem": {
        "hasFeedback": boolean;
        labelCol: {
            xs: {
                span: number;
            };
            sm: {
                span: number;
            };
        };
        wrapperCol: {
            xs: {
                span: number;
            };
            sm: {
                span: number;
            };
        };
    };
    "row": {
        "type": string;
    };
    "col": {
        "xs": {
            "span": number;
            "offset": number;
        };
        "sm": {
            "span": number;
            "offset": number;
        };
    };
    "card": {
        "noHovering": boolean;
        "bordered": boolean;
    };
    "object": {
        "ui:temp": string[];
    };
    "array": {
        "ui:temp": string[];
    };
};
export { curAjv as ajv, schemaFormOptions, globalOptions };
