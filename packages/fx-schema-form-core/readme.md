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

## 如何使用ajv的功能动态获取jsonschema

```json
{
    "type": "object",
    "$id": "echart",
    "title": "echarts参数设置",
    "default": {},
    "properties": {
        "title": {
            "$ref": "echart-title#"
        },
        "toolbox": {
            "$ref": "echart-toolbox#"
        },
        "tooltip": {
            "$ref": "echart-tooltip#"
        },
        "legend": {
            "$ref": "echart-legend#"
        },
        "series": {
            "$ref": "echart-series#"
        },
        "xAxis": {
            "$ref": "echart-axis#"
        },
        "yAxis": {
            "$ref": "echart-axis#"
        }
    }
}
```

在做echart的配置界面的时候，由于参数众多，而且很多参数都重复，不得不把echart的jsonschema拆分成若干个json文件来复用。上面的json文件使用$ref来连接其他的schema，使得schema的依赖过于繁琐。如果我们要使用这个schema，就必须先解析其依赖的schema，这样就有问题了。我们能不能不关系依赖呢？

解决方案：

1. 这个方法用于加载我们需要的schema文件。

```jsx
    /**
     * 动态加载schema方法
     * 可以在组件中去使用
    */
    const initSchema = (schemaId: string) => {
        // getSchema是一个接口方法，用来获取json的数据
        return getSchema.get(null, {
            params: {
                id: schemaId + ".json"
            }
        }).then((schema: JSONSchema6) => {
            // 这里使用compileAsync来获取schema的验证信息
            // 这个方法可以解析依赖关系，然后使用ajv中的loadSchema来加载依赖的jsonschema
            curAjv.compileAsync(schema).then(() => {
                // 解析获取的schema，这里已经解析完了所有的依赖
                let resolve = new ResolveLib(curAjv, schema);
            });
        }).catch(() => {
            console.error("fetch schema [" + uri + "] error!");
        });
    }
```

2. 配置ajv中的loadSchema方法，用于加载$ref中使用的schema文件。

```jsx
// 初始化ajv实例
export const curAjv: ajv.Ajv = ajvErrors(new ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    format: "full",
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
    // 关键参数
    loadSchema: initSchema
}));
```

3. react示例

```jsx
    import { ResolveLib, schemaKeysFactory } from "fx-schema-form-core";

    class ComponentHoc extends React.PureComponent<any, any> {

        /**
         * 加载完毕后，update当前组件
         */
        private initSchema(schemaId: string){
            initSchema(schemaId).then(this.forceUpdate);
        }

        /**
        * 如果当前的schema不存在，则远程拉取
        */
        public render(): JSX.Element | null {
            const { schemaId, ...extraProps } = this.props;

            if (!schemaKeysFactory.has(schemaId)) {
                this.initSchema(schemaId);
                return null;
            }

            return <span>schema已经解析好了</span>;
        }
    }
```

## 命令

* ```npm test``` 测试命令
* ```npm run build``` 打包命令

## License

[MIT](LICENSE.md)
