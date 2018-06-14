# react-schema-form

爬虫前端核心组件。

## react-schema-form-extension

这是一个扩展项目，包括许多实用的hoc。

## 目录

- [安装](#安装)
  - [npm](#npm)
- [HOC列表](#HOC列表)
  - [condition](#condition)
  - [changed](#changed)
  - [copytometa](#copytometa)
  - [datatometa](#datatometa)
  - [format](#format)
  - [oneof](#oneof)
  - [resetkey](#resetkey)
  - [show](#show)
  - [wrapper](#wrapper)
  - [temp](#temp)
  - [widget](#widget)
  - [form](#form)
- [启动](#启动)
- [License](#license)

## 安装

### npm

``` nodejs
npm install --save fx-schema-form-extendsion
```

## HOC列表

### condition

条件hoc，可以设置需要使用的数据，一般不单独使用。

配置参数:

- paths: ConditionPath[]; 配置需要的数据路径;
- hoc: ComponentEnhancer<any, any>; 下层hoc;

```typescript
export interface ConditionPath {
    /**
     * 数据的路径，可以是相对路径
     * example: ./height, ../height, /height
     */
    path: string;
    /**
     * 是否从meta中获取数据
     * 如果是从meta中获取数据，额需要配置metaKey
     */
    meta: boolean;
    /**
     * 需要获取的meta的字段
     * 例如 isLoading
     */
    metaKey: string;
}
```

返回属性:

- condition: Immutable.Map<string, any>; 数据，数据的key使用全路径数组join("/")得到。

### changed

数据变更后回调，需要配合[condition](#condition)来使用。

配置参数:

- paths?: string[]; 需要监听变化的数据数组;(已废弃)
- condition: ConditionHocSettings; [condition](#condition)的设置参数;
- onChanged: (props: DefaultProps, data: any) => void; 数据变化时候的回调;

返回属性: null

实例: [demo](https://nick121212.github.io/fx-schema-form/packages/fx-schema-form-extension/dist/index.html#/form/normal)

```ts

// 下面是一个uiSchema的配置
// 监听高度的变化，做一些操作
{
  key: "width",
  hocs: ["utils", "theme", "field", "validate", "changed", "temp"],
  options: Immutable.fromJS({
      hoc: {
          changed: {
            //   paths: ["../height"],
              condition: {
                  paths: [{
                      path: "../height"
                  }]
              },
              onChanged: (props: any, data: any) => {
                  let height = props.getPathKeys(props.uiSchema.keys as any, "../height").join("/");

                  if (data[height] !== undefined) {
                    // do something
                  }
              }
          }
      }
  })
}
```

### copytometa

把数据拷贝到meta中。

配置参数:

- paths: CopyToMetaPath[];需要copy的数据配置。
- condition: ConditionHocSettings; [condition](#condition)的设置参数;

```ts
export interface CopyToMetaPath {
    // 数据的路径
    path: string;
    // 拷贝到的路径
    to: string[];
    // 默认值
    defaultValue?: any;
}
```

返回属性: null

实例: [demo](https://nick121212.github.io/fx-schema-form/packages/fx-schema-form-extension/dist/index.html#/form/normal)

```ts
// 这是一个uiSchema的配置
// 这里当宽度变化的时候，把宽度的值设置到高度的meta中去
// 即宽度是高度的最大值
{
  key: "height",
  hocs: ["utils", "theme", "field", "validate", "copyToMeta", "temp"],
  options: Immutable.fromJS({
      hoc: {
          copyToMeta: {
              condition: {
                  paths: [{ path: "../width" }]
              },
              paths: [{ path: "../width", defaultValue: 0, to: ["options", "widget", "number", "options", "max"] }]
          }
      }
  })
}
```

### datatometa

把data中的数据拷贝到meta。

配置参数: null
返回属性: null

### format

根据schema中设置的format自动选择组件。

配置参数: null
返回属性: null

### oneof

处理oneof关键字对应的表单。

配置参数:

- path: string; 数据字段路径，根据这个的值来改变表单的展现。
- key: anyOf|oneOf; schema中的关键字。
- condition: ConditionHocSettings; [condition](#condition)的设置参数。
- uiSchemas?: UiSchemas; 根据不同的值，来展现不同的uiSchema配置。

```ts
  export class UiSchemas {
    [key: string]: {
        // schemaId
        schemaId: string;
        // uiSchemas配置
        uiSchemas: Array<FxUiSchema | string>;
    };
}
```

返回属性: null

实例: [demo](https://nick121212.github.io/fx-schema-form/packages/fx-schema-form-extension/dist/index.html#/form/oneof)

```ts
// 这里对type的值做检测
// 当type的值变化的时候，value的表单会变化
[{
  key: "type",
  widget: "select",
  options: Immutable.fromJS({
      widget: {
          select: {
              options: {
                  children: [1, 2, 3, 4].map((val: number, index: number) => {
                      return (<SelectOption key={index} value={val}>{val}</SelectOption>) as any;
                  })
              }
          }
      }
  })
}, {
  key: "value",
  hocs: ["utils", "theme", "field", "validate", "oneOf", "array", "temp"],
  options: Immutable.fromJS({
      hoc: {
          oneOf: {
              condition: {
                  paths: [{ path: "../type" }]
              },
              path: "../type",
              key: "oneOf",
              uiSchemas: {
                  1: { schemaId: "dnd-oneof-number", uiSchemas: ["*"] },
                  2: { schemaId: "dnd-oneof-string1", uiSchemas: ["*"] },
                  3: { schemaId: "dnd-oneof-boolean", uiSchemas: ["*"] },
                  4: {
                      schemaId: "dnd-oneof-object", uiSchemas: [{
                          key: "",
                          temps: ["formitem"],
                          children: ["*"]
                      }]
                  }
              }
          }
      }
  })
}]
```

### resetkey

处理下一级hoc的props属性的列表。

配置参数: null

返回属性:

- excludeKeys: string[]; 需要过滤掉的属性名。
- includeKeys: string[]; 不需要过滤掉的属性名。

### show

是否显示下层组件。

配置参数:

- paths?: string[]; 需要验证的数据字段路径。(已废弃)
- renderNothings?:boolean; 如果不显示，是否返回null，否则把display设置成none。
- condition: ConditionHocSettings; [condition](#condition)的设置参数。

返回属性: null

实例: [demo](https://nick121212.github.io/fx-schema-form/packages/fx-schema-form-extension/dist/index.html#/form/normal)

```ts
// 这里户根据isEighteen的值，来决定现不现实textAlign这个字段
{
    key: "textAlign",
    hocs: ["utils", "theme", "field", "validate", "show", "temp"],
    options: Immutable.fromJS({
        hoc: {
            show: {
                condition: {
                    paths: [{ path: "../isEighteen" }]
                },
                // paths: ["../isEighteen"]
            }
        }
    })
}
```

### wrapper

包装组件。

配置参数:

- condition: ConditionHocSettings; [condition](#condition)的设置参数。
- hoc?:any; 下层的hoc。
- hocName?:string; 下层的hoc的name，用于获取hoc的设置参数。

返回属性: null

## 启动

```jsx
  npm start
```

启动[localhost:8004](http://localhost:8004)

## [License](license)

[MIT](LICENSE.md)