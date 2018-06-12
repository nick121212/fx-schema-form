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

条件hoc，可以设置需要使用的数据。

### changed

数据变更后回调，需要配合condition来使用。

### copytometa

把数据拷贝到meta中。

### datatometa

把data中的数据拷贝到meta。

### format

根据schema中设置的format自动选择组件。

### oneof

处理oneof关键字对应的表单。

### resetkey

处理下一级hoc的props属性的列表。

### show

是否显示下层组件。

### wrapper

包装组件。

### temp

自定义模板。

### widget

自定义组件。

### form

自定义表单。

## 启动

```jsx
  npm start
```

启动[localhost:8004](http://localhost:8004)

## [License](license)

[MIT](LICENSE.md)