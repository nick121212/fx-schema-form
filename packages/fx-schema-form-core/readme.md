# fx-schema-form-core

schemaForm的核心组件。用于解析JsonSchema，为SchemaForm提供支持。

## 依赖项

* ajv
* jsonschema

## 重要的概念

jsonschema；用于描述json的结构。
uischema；用于描述界面的表现形式，是jsonschema的增强属性。

## API

### schemaKeysFactory

> 存储了所有key与schemaKey的对应关系

### schemaFieldFactory

> 存储了schemaKey对应的schema

### schemaKeyWordFactory

> 所有的keyword处理方式。目前有ref和oneOf；

* ref；处理schema中的$ref关键字
* oneOf；处理schema中的oneOf关键字

### schemaTypeFactory

> schema类型的处理方式

* array     schema中数组类型
* object    schema中的对象类型
* undefined schema中的其他简单类型

### ResolveLib

> 解析schema中的所有字段，存储到【schemaFieldFactory】中

``` typescript
/**
 * 构造函数
 * @param ajv      Ajv的一个实例
 * @param schema   jsonschema
 * @param $id      schema的$id字段，用于找到schema
 */
constructor(private ajv: Ajv, schema: JSONSchema6, public readonly $id = "")
```

### MergeLib

> 解析uiSchama，与对应的schema合并

``` typescript
/**
 * 构造函数
 * @param ajv        Ajv的一个实例
 * @param schema     schemaPath
 * @param parent     父亲schema
 * @param uiSchemas  uiSchemas
 */
constructor(ajv: Ajv, private schemaPath: string, public parent: UiSchema | null = null, private uiSchemas: Array<UiSchema | string> = ["*"]) {
```

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

> 解析上一步中定义的schema,curAjv是一个ajv的实例。

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
* ```npm run build``` 打包命令

## License

[MIT](LICENSE.md)
