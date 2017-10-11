# schema-form-antd

通过json-schema和ui-schema自动生成表单组件。

## 启动测试

```nodejs
    node fuse
```

## 依赖项

- JsonSchema
- antd
- redux
- react-redux
- recompose
- react-act
- avj
- json-pointer

## 目录

> **components**
- 1.1 SchemaForm
- 1.2 SchemaFormItem

> **fields**
- 2.1 array
- 2.2 object
- 2.3 normal

> **reducer**

3.1 form

> **templates**
- 4.1 card
- 4.2 col
- 4.3 formItem
- 4.4 row

> **widgets**

- 5.1 checkbox
- 5.2 input
- 5.3 switch

## 组件层级

SchemaForm -> SchemaFormItem

## 1.1 SchemaForm组件

> 属性列表

| 属性名         | 类型      | 必填   | 说明    |
| --------      | -----:   | -----:   |  :----: |
| schemaKey     | string   |   *    |  表单的key值，与redux中key对应       |
| schema        | JsonSchema      |   *    | jsonschema配置 |
| uiSchema      | UiSchema      |       |表单的配置|
| globalOptions | Object |  | 全局参数  |
| RootComponent | Component | | 根元素 |
| parentKeys    | String[] | | 父亲的key |
| arrayIndex    | Number | | 数组索引 |
| arrayItems    | JSX.Element[] | | 数组的操作按钮（new，delete） |

> higher components

- MergeHoc; 用户包装schema和uiSchema，生成mergeSchemaList属性；

| 属性名             | 类型        | 必填   | 说明    |
| --------          | -----:     | -----:   |  :----: |
| mergeSchemaList   | any[]      |       | schema和uiSchema合并的数据       |
| schemaFormOptions | Object     |       | 合并时产生的额外的数据，用于下次合并 |

## 1.2 SchemaFormItem组件

> 属性列表

同SchemaForm属性，以下为额外的属性；

| 属性名         | 类型      | 必填   | 说明    |
| --------      | -----:   | -----:   |  :----: |
| formItemData  | any      |       |  当前表单元素的数据       |
| meta          | any      |       | 当前表单元素的meta数据 |
| formData      | any      |       | 当前表单的值 |

> higher components

## HOC顺序：ThemeHoc -> FieldHoc -> ValidateHoc -> ArrayHoc -> TempHoc

- ThemeHoc; 用于选择当前所使用的主题；

添加到组件的属性：

| 属性名             | 类型        | 必填   | 说明    |
| --------          | -----:     | -----:   |  :----: |
| currentTheme      | any     |       | schema和uiSchema合并的数据       |

- FieldHoc; 用于计算当前shema所对应的字段组件以及显示组件；

添加到组件的属性：

| 属性名             | 类型        | 必填   | 说明    |
| --------          | -----:     | -----:   |  :----: |
| FieldComponent    | Component     |       | 字符类型对应的字段组件  |
| WidgetComponent   | Component     |       | 字段类型对应的显示组件  |

- ValidateHoc; 用于验证的hoc；

添加到组件的属性：

| 属性名             | 类型        | 必填   | 说明    |
| --------          | -----:     | -----:   |  :----: |
| validate          | Function     |       | 用户验证字段合法性的方法，同时也是数据更改时需要触发的方法 |

- ArrayHoc; 用户数组类型字段的hoc；

添加到组件的属性：

| 属性名             | 类型        | 必填   | 说明    |
| --------          | -----:     | -----:   |  :----: |
| arrayItemItems    | JSX.Element[]     |       | 作用与数组单个元素的按钮组  |
| arrayItems        | JSX.Element[]     |       | 作用于数组field的按钮组  |

- TempHoc; 用户包装template的hoc；

添加到组件的属性：无

## 2.1 ArrayField 数组对应的Field组件

显示数组的表单组件。遍历当前元素的数据调用SchemaForm组件。

## 2.2 ObjectField 对象对应的Field组件

显示对象的表单组件。调用SchemaForm组件。

## 2.3 NormaField 普通类型的Field组件

直接生成WidgetComponent。

## 3.1 FormReducer

## 4.1 CatdTemplate；antd中的card组件

## 4.2 ColTemplate；antd中的col组件

## 4.3 RowTemplate；antd中的row组件

## 4.4 FormItemTemplate；antd中的Form.Item组件

## 5.1 CheckboxWidget;antd中的checkbox组件；

## 5.2 InputWidget;antd中的input组件；

## 5.3 SwitchWidget;antd中的switch组件；
