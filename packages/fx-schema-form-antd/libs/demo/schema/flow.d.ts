declare const _default: {
    "$async": boolean;
    "id": string;
    "type": string;
    "description": string;
    "title": string;
    "required": string[];
    "properties": {
        "partten": {
            "type": string;
            "title": string;
            "minLength": number;
            "maxLength": number;
        };
        "title": {
            "type": string;
            "title": string;
            "minLength": number;
            "maxLength": number;
        };
        "jsonata": {
            "type": string;
            "title": string;
            "items": {
                "type": string;
                "title": string;
                "description": string;
            };
        };
        "result": {
            "$ref": string;
            "title": string;
        };
    };
};
export default _default;
