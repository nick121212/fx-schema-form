# fx-schema-form-core

schemaForm的核心组件。用于解析JsonSchema，为SchemaForm提供支持。

## 依赖项

* ajv
* jsonschema

## 基础使用

> 定义Schema

``` js
const schema: JSONSchema6 = {
    type: "object",
    $id: "design",
    required: ["name", "dsModelIds"],
    properties: {
        name: {
            type: "string",
            title: "面板名称"
        },
        description: {
            type: "string",
            title: "面板详情"
        },
        appType: {
            type: "string",
            title: "应用类型"
        },
        dsModelIds: {
            type: "array",
            items: {
                type: "number"
            }
        },
        dsModelData: {
            type: "object",
            properties: {
                data: {
                    type: "object"
                },
                ids: {
                    type: "object"
                }
            }
        },
        infoOptions: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    label: {
                        type: "string"
                    },
                    data: {
                        type: "object"
                    },
                    infoOptions: {
                        $ref: "design#/properties/infoOptions"
                    }
                }
            }
        }
    }
};
```

> 解析上一步中定义的schema,curAjv是一个ajv的实例。

```js
let b11dfd = new ResolveLib(curAjv, schema);
```

> 最后与定义的uiSchema做合并。

```js
/**
 * 参数说明
 * @param $1 ajv的一个实例
 * @param $2 jsonschema的当前路径
 * @param $3 父亲schema
 * @param $4 uiSchema
 * @return Array类型
 */
let merge = new MergeLib(curAjv, "design", null, ["infoOptions/-"]);
```

返回值：

```json
[{
    "type": "object",
    "properties": {
        "label": {
            "type": "string",
            "keys": ["infoOptions", "-", "label"]
        },
        "data": {
            "type": "object",
            "keys": ["infoOptions", "-", "data"]
        },
        "infoOptions": {
            "$ref": "design#/properties/infoOptions",
            "keys": ["infoOptions", "-", "infoOptions"]
        }
    },
    "keys": ["infoOptions", "-"],
    "schemaPath": "design#/properties/infoOptions/items",
    "key": "design/infoOptions/-"
}]
```

## 命令

* ```npm test``` 测试命令
* ```npm start``` 开发命令
* ```npm run prd``` 打包命令

## License

[MIT](LICENSE.md)