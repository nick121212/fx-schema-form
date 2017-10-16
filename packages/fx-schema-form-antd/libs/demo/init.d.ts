/// <reference types="react" />
import Ajv from "ajv";
declare const curAjv: Ajv.Ajv;
declare const schemaFormOptions: {
    ajv: Ajv.Ajv;
};
declare const globalOptions: {
    "ui:temp": string[];
    "boolean": {
        "widget": string;
    };
    "hoc": {
        "array": {
            createItemButtons: (props: any) => JSX.Element;
            createItemChildButtons: (props: any, idx: number, maxLength: number) => JSX.Element;
        };
    };
    "formItem": {
        "hasFeedback": boolean;
        "labelCol": {
            "xs": {
                "span": number;
            };
            "sm": {
                "span": number;
            };
        };
        "wrapperCol": {
            "xs": {
                "span": number;
            };
            "sm": {
                "span": number;
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
    "array": {
        "ui:temp": string[];
    };
};
export { curAjv as ajv, schemaFormOptions, globalOptions };
