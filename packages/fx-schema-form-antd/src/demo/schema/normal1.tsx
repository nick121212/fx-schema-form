export default {
    "$async": true,
    "id": "normal",
    "type": "object",
    "description": "配置文件的字段规则",
    "title": "",
    "required": ["key", "title", "msgFlow"],
    "properties": {
        "key": {
            "type": "string",
            "title": "配置文件标志",
            "minLength": 1,
            "maxLength": 10
        },
        "title": {
            "type": "string",
            "title": "配置文件说明",
            "minLength": 1,
            "maxLength": 20
        },
        "initFlow": {
            "type": "array",
            "title": "初始流配置",
            "items": {
                "$ref": "flow"
            }
        },
        "msgFlow": {
            "type": "array",
            "title": "消息流配置",
            "items": {
                "$ref": "flow"
            }
        }
    }
};
