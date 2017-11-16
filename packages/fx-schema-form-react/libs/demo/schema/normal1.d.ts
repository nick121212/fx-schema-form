declare const _default: {
    "$async": boolean;
    "id": string;
    "type": string;
    "description": string;
    "title": string;
    "required": string[];
    "properties": {
        "key": {
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
        "initFlow": {
            "type": string;
            "title": string;
            "items": {
                "$ref": string;
            };
        };
        "msgFlow": {
            "type": string;
            "title": string;
            "items": {
                "$ref": string;
            };
        };
    };
};
export default _default;
