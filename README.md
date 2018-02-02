# react-schema-form

爬虫前端核心组件。用于生成静态或者动态表单；

## 一个一直有想法但并没有花时间去实现的功能

<!-- 表单交给后端来渲染生成，想怎么改怎么改。当然不是让后端去拼接html代码。而是通过配置文件，生成出强大的表单； -->

>举个栗子：

有一份数据结构：

```json
{
    "style":{
        "width": 100,
        "height": 100,
    },
    "className": "ba bb-dashed" // 边框样式
}
```

如果用表单来生成数据，只需要3个文本框搞定；
如果数据应用到div上，会呈现出一个带虚线框高度和宽度都是100的div；或者说这个数据应用到任何不是内敛元素的元素上都会给元素添加边框和高宽；
那我是不是可以左边表单，右边div，这样可以查看实时的渲染效果，假设数据是实时变化的话。

那么问题来了：当我渲染的不是div，而是一个复杂的组件，可能有几十个属性，而且随着组件版本的升级，属性也要做相应的变更，有些属性需要使用动态数据（接口回来的数据不能直接用，要经过简单处理）咋玩？咋玩？咋玩？

我的想法：

- 希望表单是动态的，可以让我通过简单的配置来生成，最好有一个动态表单引擎。可以支持复杂的数据结构，数据的联动，包括ajax的数据拉取，条件控制，验证等等功能。
- 希望数据的更改是实时的更新的，应为我可能通过有很多的组件依赖于同一份数据。只要一边发生变化，其他的组件也能发生改变。
- 所见即所得；

基于这样的一些问题，开始组件的选型：

- 好吧，公司使用react。（虽然我是angular阵营）
- redux来实现数据的实时更新。（可以做编辑器了）
- immutable来做不可变数据。（插件系统，数据的层层传递，可不能让中间某个家伙破坏数据）
- ajv来做数据验证。（官网说是性能最强的jsonschema验证组件）
- github上有成千上万的hoc组件。（用hoc来做插件系统）

于是就有了：

![架构图](./images/constructor.png)

## [fx-schema-form-core](./packages/fx-schema-form-core/readme.md)

用于处理JsonSchema和UiSchema的关系。

## [fx-schema-form-react](./packages/fx-schema-form-react/readme.md)

用于生成表单的组件。

## [fx-schema-form-extendsion](./packages/fx-schema-form-extension/readme.md)

fx-schema-form-react的扩展。

## License

[MIT](LICENSE.md)
