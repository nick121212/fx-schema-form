
export default {
    "$async": true,
    "id": "flow",
    "type": "object",
    "description": "流的字段规则",
    "title": "流配置",
    "required": ["partten", "title"],
    "properties": {
        "partten": {
            "type": "string",
            "title": "需要调用的模式",
            "minLength": 1,
            "maxLength": 10
        },
        "title": {
            "type": "string",
            "title": "当前流的说明",
            "minLength": 1,
            "maxLength": 20
        },
        "jsonata": {
            "type": "array",
            "title": "需要添加到data的属性",
            "items": {
                "type": "string",
                "title": "需要添加到data的属性",
                "description": "这里使用jsonata的语法。相关链接http://doc.jsonata.org/"
            }
        },
        "result": {
            "$ref": "flow#/properties/jsonata/items",
            "title": "需要添加到result的属性"
        }
    }
};
