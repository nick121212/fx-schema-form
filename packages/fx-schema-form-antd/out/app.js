(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("demo.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const antd_1 = require("antd");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const index_1 = require("./index");
const schema = {
    type: "object",
    title: "测试SCHEMA",
    required: ["array", "name"],
    properties: {
        name: { type: "string", "title": "昵称", "default": "nora", description: "昵称，必填" },
        number: { type: "number", "title": "测试number类型" },
        integer: { type: "integer", "title": "测试integer类型" },
        boolean: { type: "boolean", "title": "测试boolean类型", default: true },
        array: { type: "array", items: { type: "string", "title": "测试array类型ITEM", minLength: 3 }, "title": "测试array类型" },
        object: {
            type: "object",
            properties: {
                settings: { type: "boolean", default: true }
            }
        },
        array1: {
            type: "array",
            title: "测试无限极数组类型",
            items: {
                type: "object",
                properties: {
                    test: { type: "string", title: "无限极测试数据" },
                    children: { $ref: "test#/properties/array1" }
                }
            }
        },
        null: { type: "null", "title": "测试null类型" },
        muti: { type: ["string", "integer", "number"], "title": "测试多类型" }
    }
};
const uiSchema = [{
        "key": "array",
        "items": [{
                "key": "array/-",
            }]
    }, {
        "key": "array1"
    }];
const globalOptions = {
    "ui:temp": ["formItem"],
    "formItem": {
        "labelCol": {
            "xs": { "span": 24 },
            "sm": { "span": 6 },
        },
        "wrapperCol": {
            "xs": { "span": 24 },
            "sm": { "span": 14 },
        },
    },
    "row": {
        "type": "flex"
    },
    "col": {
        "xs": { "span": 24, "offset": 24 },
        "sm": { "span": 24, "offset": 0 },
    },
    "array": {
        "ui:temp": ["row", "col", "card"]
    }
};
let store = redux_1.createStore(redux_1.combineReducers(index_1.createForms({
    "test": { name: "nick" }
})));
store.subscribe(() => {
    console.log(store.getState());
});
react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
    react_1.default.createElement(index_1.SchemaForm, { schemaKey: "test", schema: schema, RootComponent: antd_1.Form, uiSchema: uiSchema, globalOptions: globalOptions },
        react_1.default.createElement(antd_1.Button, null, "dfadf"))), document.getElementById("root"), console.log);
//# sourceMappingURL=demo.js.map
});
___scope___.file("index.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fx_schema_form_core_1 = require("fx-schema-form-core");
const form_1 = require("./components/form");
exports.SchemaForm = form_1.SchemaForm;
const formitem_1 = require("./components/formitem");
exports.SchemaFormItem = formitem_1.SchemaFormItem;
const ns_factory_1 = require("./libs/ns.factory");
exports.nsFactory = ns_factory_1.nsFactory;
const hocs_1 = require("./hocs");
const fields_1 = require("./fields");
const templates_1 = require("./templates");
const widgets_1 = require("./widgets");
const defaultTheme = {
    tempFactory: new fx_schema_form_core_1.BaseFactory(),
    fieldFactory: new fx_schema_form_core_1.BaseFactory(),
    widgetFactory: new fx_schema_form_core_1.BaseFactory(),
    hocFactory: new fx_schema_form_core_1.BaseFactory(),
};
exports.defaultTheme = defaultTheme;
ns_factory_1.nsFactory.add("default", defaultTheme);
for (let key in fields_1.default) {
    if (fields_1.default.hasOwnProperty(key)) {
        let field = fields_1.default[key];
        defaultTheme.fieldFactory.add(key, field);
        defaultTheme.fieldFactory.lock(key);
    }
}
for (let key in widgets_1.default) {
    if (widgets_1.default.hasOwnProperty(key)) {
        let widget = widgets_1.default[key];
        defaultTheme.widgetFactory.add(key, widget);
    }
}
for (let key in hocs_1.default) {
    if (hocs_1.default.hasOwnProperty(key)) {
        let hoc = hocs_1.default[key];
        defaultTheme.hocFactory.add(key, hoc);
        defaultTheme.hocFactory.lock(key);
    }
}
for (let key in templates_1.default) {
    if (templates_1.default.hasOwnProperty(key)) {
        let template = templates_1.default[key];
        defaultTheme.tempFactory.add(key, template);
        defaultTheme.tempFactory.lock(key);
    }
}
var create_1 = require("./libs/create");
exports.createForms = create_1.default;
//# sourceMappingURL=index.js.map
});
___scope___.file("components/form/index.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const container_1 = require("./container");
const index_1 = require("../../index");
class SchemaFormBlock extends react_1.default.Component {
    render() {
        return react_1.default.createElement("div", null, this.props.children);
    }
}
/**
 * SchemaForm组件
 * 通过schema和uiSchea生成表单元素
 */
class SchemaFormComponent extends react_1.default.Component {
    render() {
        const { children, mergeSchemaList, schemaKey, formData, arrayItems, arrayIndex, globalOptions, RootComponent, schemaFormOptions } = this.props;
        let RootComponentHock = RootComponent;
        // 计算顶部容器，如果有RootComponent，则使用，否则使用默认的容器组件
        if (!RootComponentHock) {
            RootComponentHock = SchemaFormBlock;
        }
        schemaFormOptions.ajv.validate(schemaKey, formData);
        return (react_1.default.createElement(RootComponentHock, null,
            mergeSchemaList.map((mergeSchema, idx) => {
                let find = false;
                if (typeof arrayIndex === "number") {
                    mergeSchema.keys = mergeSchema.keys.map((key) => {
                        if (find) {
                            return key;
                        }
                        if (key === "-") {
                            return arrayIndex;
                        }
                        return key;
                    });
                }
                return react_1.default.createElement(index_1.SchemaFormItem, { key: `${schemaKey}-${idx.toString()}`, schemaKey: schemaKey, arrayIndex: arrayIndex, arrayItems: arrayItems, mergeSchemaList: mergeSchemaList, mergeSchema: mergeSchema, schemaFormOptions: schemaFormOptions, globalOptions: globalOptions });
            }),
            children));
    }
}
exports.SchemaForm = container_1.hoc(SchemaFormComponent);
//# sourceMappingURL=index.js.map
});
___scope___.file("components/form/container.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recompose_1 = require("recompose");
const merge_1 = require("./hocs/merge");
exports.mapStateToProps = (state, ownProps) => {
    return {
        formData: state[ownProps.schemaKey]
    };
};
exports.hoc = recompose_1.compose(merge_1.MergeHoc);
//# sourceMappingURL=container.js.map
});
___scope___.file("components/form/hocs/merge.jsx", function(exports, require, module, __filename, __dirname){
var __decorate = __fsbx_decorate(arguments)
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const fx_schema_form_core_1 = require("fx-schema-form-core");
const react_redux_1 = require("react-redux");
const recompose_1 = require("recompose");
const meta_1 = require("../../meta");
const mapDispatchToProps = (dispatch, ownProps) => {
    const { actions, schemaFormOptions } = ownProps;
    for (const key in actions) {
        if (actions.hasOwnProperty(key)) {
            const element = actions[key];
            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }
    return { actions };
};
/**
 * merge参数中的schema和uiSchema，生成新的对象mergeSchemaList，传入组件的props中
 * @param Component 需要包装的组件
 * 加入属性
 * schemaFormOptions  merge只有，返回的options
 * schemaKey          生成的schemaKey
 * mergeSchemaList    合并之后的数据
 */
exports.MergeHoc = (Component) => {
    let Hoc = class Hoc extends react_1.default.Component {
        render() {
            let { schema, uiSchema, globalOptions, parentKeys, schemaFormOptions, schemaKey, actions } = this.props, mergeSchemaList;
            if (!schemaKey) {
                schemaKey = (Date.now() + Math.random()).toString();
            }
            schemaFormOptions = schemaFormOptions || {};
            schemaFormOptions.parentKeys = parentKeys || [];
            mergeSchemaList = fx_schema_form_core_1.merge(schemaKey, schema, uiSchema, schemaFormOptions);
            return (react_1.default.createElement(Component, Object.assign({ schemaFormOptions: schemaFormOptions || {}, schemaKey: schemaKey, mergeSchemaList: mergeSchemaList }, this.props)));
        }
    };
    Hoc = __decorate([
        recompose_1.compose(react_redux_1.connect(meta_1.mapActionsStateToProps), react_redux_1.connect(null, mapDispatchToProps))
    ], Hoc);
    return Hoc;
};
//# sourceMappingURL=merge.js.map
});
___scope___.file("components/meta.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jpp = require("json-pointer");
const reselect_1 = require("reselect");
exports.getAllData = (state, props) => {
    let { data = {} } = state[props.schemaKey];
    return data;
};
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
exports.getData = (state, props) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { data = {} } = state[props.schemaKey];
    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};
/**
 * 获取state中的meta数据
 * @param state 全局state
 * @param props 当前component的props
 */
exports.getMetaData = (state, props) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { meta = {} } = state[props.schemaKey];
    return jpp.has(meta, jpp.compile(keys)) ? jpp.get(meta, jpp.compile(keys)) : { dirty: false };
};
/**
 * 获取state中的meta数据中的actions
 * @param state 全局state
 * @param props 当前component的props
 */
exports.getActions = (state, props) => {
    const { schemaKey } = props;
    const { data = {}, meta = { actions: {} } } = state[schemaKey];
    return meta.actions;
};
exports.mapMetaStateToProps = reselect_1.createSelector([exports.getMetaData, exports.getData, exports.getAllData], (meta, formItemData, formData) => {
    return { meta, formData, formItemData };
});
exports.mapActionsStateToProps = reselect_1.createSelector([exports.getActions], (actions) => {
    return { actions };
});
//# sourceMappingURL=meta.js.map
});
___scope___.file("components/formitem/index.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const container_1 = require("./container");
/**
 * SchemaFormItem组件
 * 找到对应的field组件，渲染
 */
class SchemaFormItemComponent extends react_1.default.Component {
    render() {
        const { FieldComponent, mergeSchema } = this.props;
        const { uiSchema = {} } = mergeSchema;
        if (!FieldComponent) {
            console.log(mergeSchema, "没有找到匹配的field");
            return null;
        }
        return react_1.default.createElement(FieldComponent, Object.assign({}, this.props));
    }
}
exports.SchemaFormItem = container_1.hoc(SchemaFormItemComponent);
//# sourceMappingURL=index.js.map
});
___scope___.file("components/formitem/container.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recompose_1 = require("recompose");
const pick_1 = require("recompose/utils/pick");
const temp_1 = require("./hocs/temp");
const field_1 = require("./hocs/field");
const theme_1 = require("./hocs/theme");
const validate_1 = require("./hocs/validate");
const array_1 = require("./hocs/array");
exports.hoc = recompose_1.compose(recompose_1.onlyUpdateForKeys(["formData", "meta"]), theme_1.ThemeHoc, field_1.FieldHoc, validate_1.ValidateHoc, array_1.ArrayHoc, temp_1.TempHoc, recompose_1.shouldUpdate((prevProps, nextProps) => {
    return !recompose_1.shallowEqual(pick_1.default(prevProps, ["formData"]).formData, pick_1.default(nextProps, ["formData"]).formData) ||
        !recompose_1.shallowEqual(pick_1.default(prevProps, ["meta"]).meta, pick_1.default(nextProps, ["meta"]).meta);
}));
//# sourceMappingURL=container.js.map
});
___scope___.file("components/formitem/hocs/temp.jsx", function(exports, require, module, __filename, __dirname){
var __decorate = __fsbx_decorate(arguments)
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const recompose_1 = require("recompose");
const pick_1 = require("recompose/utils/pick");
const metaConnect = recompose_1.compose(recompose_1.lifecycle({
    shouldComponentUpdate: function (nextProps, nextState) {
        console.group(nextProps.mergeSchema.keys + "---temp中比较formItemData和Meta的值得变化");
        console.log("formItemData", pick_1.default(nextProps, ["formItemData"]), pick_1.default(this.props, ["formItemData"]));
        console.log("meta", pick_1.default(nextProps, ["meta"]), pick_1.default(this.props, ["meta"]));
        console.groupEnd();
        return !recompose_1.shallowEqual(pick_1.default(nextProps, ["formItemData"]).formItemData, pick_1.default(this.props, ["formItemData"]).formItemData) ||
            !recompose_1.shallowEqual(pick_1.default(nextProps, ["meta"]).meta, pick_1.default(this.props, ["meta"]).meta);
    }
}));
/**
 * 包装Template的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 */
exports.TempHoc = (Component) => {
    /**
    * 获取模板的components
    * @param uiSchema 合并后的数据
    */
    let Hoc = class Hoc extends react_1.default.Component {
        /**
        * 获取模板的components
        * @param uiSchema 合并后的数据
        */
        constructor() {
            super(...arguments);
            this.tempField = "ui:temp";
        }
        componentDidMount() {
            console.log("temp mounted!");
        }
        render() {
            const { mergeSchema, globalOptions } = this.props;
            const { uiSchema = { options: {} }, keys } = mergeSchema;
            const TempComponents = this.getTemplates();
            const uiSchemaOptions = uiSchema.options || {};
            let index = 0;
            return TempComponents.reduce((prev, { key, Temp }) => {
                return react_1.default.createElement(Temp, Object.assign({ globalOptions: globalOptions, tempKey: key, uiSchemaOptions: uiSchemaOptions, key: keys.join(".") + key + index++ }, this.props), prev);
            }, react_1.default.createElement(Component, Object.assign({ key: keys.join("."), uiSchemaOptions: uiSchemaOptions }, this.props)));
        }
        /**
        * 获取模板的components
        */
        getTemplates() {
            const { mergeSchema, globalOptions, currentTheme } = this.props;
            const { uiSchema = { options: {} }, keys, type } = mergeSchema;
            const typeDefaultOptions = globalOptions[type] || {};
            const template = uiSchema[this.tempField] ||
                typeDefaultOptions[this.tempField] ||
                globalOptions[this.tempField] || "default", TempComponent = [];
            // 获取模板的数据，单个模板
            if (typeof template === "string") {
                TempComponent.push({
                    key: template,
                    Temp: (currentTheme.tempFactory.get(template))
                });
            }
            else {
                // 多个模板
                [].concat(template).reverse().forEach((tml, idx) => {
                    if (!currentTheme.tempFactory.has(tml || "default")) {
                        console.error(`不存在${tml}的temp！`);
                    }
                    else {
                        TempComponent.push({
                            key: tml,
                            Temp: currentTheme.tempFactory.get(tml || "default")
                        });
                    }
                });
            }
            return TempComponent;
        }
    };
    Hoc = __decorate([
        metaConnect
    ], Hoc);
    return Hoc;
};
//# sourceMappingURL=temp.js.map
});
___scope___.file("components/formitem/hocs/field.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * 包装Field的组件HOC
 * @param Component 需要包装的组件
 * 加入属性FieldComponent   schema对应的fieldcomponent
 * 加入属性WidgetComponent  schema对应的widgetcomponent
 */
exports.FieldHoc = (Component) => {
    class Hoc extends react_1.default.Component {
        shouldComponentUpdate() {
            return false;
        }
        render() {
            const { mergeSchema, currentTheme } = this.props;
            const { uiSchema = { theme: "", field: "", widget: "" } } = mergeSchema;
            let FieldComponent, WidgetComponent;
            if (currentTheme.fieldFactory.has(uiSchema.field || mergeSchema.type)) {
                FieldComponent = currentTheme.fieldFactory.get(uiSchema.field || mergeSchema.type);
            }
            if (currentTheme.widgetFactory.has(uiSchema.widget || mergeSchema.type)) {
                WidgetComponent = currentTheme.widgetFactory.get(uiSchema.widget || mergeSchema.type);
            }
            return react_1.default.createElement(Component, Object.assign({}, this.props, { FieldComponent: (FieldComponent), WidgetComponent: WidgetComponent }));
        }
    }
    return Hoc;
};
//# sourceMappingURL=field.js.map
});
___scope___.file("components/formitem/hocs/theme.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const index_1 = require("../../../index");
/**
 * 包装theme的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * currentTheme 当前的命名空间
 */
exports.ThemeHoc = (Component) => {
    class Hoc extends react_1.default.Component {
        render() {
            const { mergeSchema } = this.props;
            const { uiSchema = { theme: "", field: "" } } = mergeSchema;
            let theme;
            if (index_1.nsFactory.has(uiSchema.theme || "default")) {
                theme = index_1.nsFactory.get(uiSchema.theme || "default");
            }
            else {
                throw new Error(`没有找到￥{uiSchema.theme || "default"}的样式！`);
            }
            return react_1.default.createElement(Component, Object.assign({ currentTheme: theme }, this.props));
        }
    }
    return Hoc;
};
//# sourceMappingURL=theme.js.map
});
___scope___.file("components/formitem/hocs/validate.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const recompose_1 = require("recompose");
const validate_1 = require("../../../libs/validate");
const meta_1 = require("../../meta");
const mapDispatchToProps = (dispatch, ownProps) => {
    const { mergeSchema, actions, schemaFormOptions } = ownProps;
    const { keys } = mergeSchema;
    for (const key in actions) {
        if (actions.hasOwnProperty(key)) {
            const element = actions[key];
            if (!element.assigned(dispatch)) {
                element.assignTo(dispatch);
            }
        }
    }
    return {
        validate: (data) => {
            if (!actions.updateItem) {
                console.error("没有更新的action！");
            }
            actions.updateItem({ keys, data, meta: validate_1.default(mergeSchema, schemaFormOptions.ajv, data) });
        }
    };
};
/**
 * 包装theme的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * currentTheme 当前的命名空间
 */
exports.ValidateHoc = (Component) => {
    class Hoc extends react_1.default.Component {
        render() {
            const ComponentWithHoc = recompose_1.compose(react_redux_1.connect(meta_1.mapActionsStateToProps), react_redux_1.connect(null, mapDispatchToProps), recompose_1.shouldUpdate((props, nextProps) => {
                return false;
            }))(Component);
            return react_1.default.createElement(ComponentWithHoc, Object.assign({}, this.props));
        }
    }
    return Hoc;
};
//# sourceMappingURL=validate.js.map
});
___scope___.file("libs/validate.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (mergeSchema, ajv, value) => {
    // string类型，类似input，textarea会返回一个空字符串
    // 如果是空，tv4验证的时候会返回成功
    // 这时候会违反"required"的验证规则,所以需要做处理
    if (value === "") {
        value = undefined;
    }
    // number类型会返回一个null的数据，这里需要做处理
    if (mergeSchema.type === "number" && value === undefined) {
        value = undefined;
    }
    // array类型会返回一个null的数据，这里需要做处理
    if (mergeSchema.type === "array" && !value) {
        value = [];
    }
    // JSON Schema的第四版本的${REQUIRED}字段不是配置在他同级的json里面
    // 所以我们需要自定义验证JSON
    let wrap = { type: "object", "properties": {}, required: undefined };
    let propName = mergeSchema.keys[mergeSchema.keys.length - 1];
    wrap.properties[propName] = mergeSchema;
    if (mergeSchema.isRequired) {
        wrap.required = [propName];
    }
    let valueWrap = {};
    if (value !== undefined && value != null) {
        valueWrap[propName] = value;
    }
    let isValid = ajv.validate(wrap, valueWrap);
    return {
        dirty: true,
        isValid: isValid,
        errors: [].concat(ajv.errors || []),
        errorText: ajv.errorsText(ajv.errors, {})
    };
};
//# sourceMappingURL=validate.js.map
});
___scope___.file("components/formitem/hocs/array.jsx", function(exports, require, module, __filename, __dirname){
var __decorate = __fsbx_decorate(arguments)
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const meta_1 = require("../../meta");
/**
 * 包装array的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * arrayItems
 */
exports.ArrayHoc = (Component) => {
    let Hoc = class Hoc extends react_1.default.Component {
        render() {
            const { mergeSchema, arrayIndex } = this.props;
            const { uiSchema, type, keys } = mergeSchema;
            if (type === "array") {
                return react_1.default.createElement(Component, Object.assign({}, this.props, { arrayItems: [
                        react_1.default.createElement("button", { key: keys.join(".") + "arraybutton" + 1, onClick: () => {
                                this.addItem();
                            } }, "add")
                    ], arrayItemItems: [
                        react_1.default.createElement("button", { key: keys.join(".") + "arraybutton" + 1, onClick: () => {
                                this.addItem();
                            } }, "add"),
                        react_1.default.createElement("button", { key: keys.join(".") + "arraybutton" + 2, onClick: () => {
                                this.removeItem(arrayIndex);
                            } }, "remove")
                    ] }));
            }
            // if (arrayIndex !== undefined) {
            //     return <Component  {...this.props} arrayItems={[
            //         <button key={keys.join(".") + "arraybutton" + 1} onClick={() => {
            //             this.addItem();
            //         }}>add</button>,
            //         <button key={keys.join(".") + "arraybutton" + 2} onClick={() => {
            //             this.removeItem(arrayIndex);
            //         }}>remove</button>
            //     ]} />;
            // }
            return react_1.default.createElement(Component, Object.assign({}, this.props));
        }
        /**
         * 移除一个数据项
         * @param index 数组索引
         */
        removeItem(index) {
            const { formItemData = [], mergeSchema, validate } = this.props;
            const { uiSchema, type, keys } = mergeSchema;
            if (type === "array") {
                formItemData.splice(index, 1);
                validate(formItemData);
            }
        }
        /**
         * 添加一个项目
         */
        addItem() {
            let { formItemData = [], mergeSchema, validate } = this.props;
            if (mergeSchema.items.type === "object") {
                formItemData.push({});
            }
            else {
                formItemData.push(undefined);
            }
            validate(formItemData);
        }
    };
    Hoc = __decorate([
        react_redux_1.connect(meta_1.mapMetaStateToProps)
    ], Hoc);
    return Hoc;
};
//# sourceMappingURL=array.js.map
});
___scope___.file("libs/ns.factory.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fx_schema_form_core_1 = require("fx-schema-form-core");
class SchemaFormNsFactory extends fx_schema_form_core_1.BaseFactory {
    constructor() {
        super();
    }
}
exports.SchemaFormNsFactory = SchemaFormNsFactory;
exports.nsFactory = new SchemaFormNsFactory();
//# sourceMappingURL=ns.factory.js.map
});
___scope___.file("hocs/index.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
exports.default = {
    data: data_1.DataHoc
};
//# sourceMappingURL=index.js.map
});
___scope___.file("hocs/data.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const jpp = require("json-pointer");
const reselect_1 = require("reselect");
const getData = (state, props) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { data = {}, meta = {} } = state[props.schemaKey];
    return jpp.has(data, jpp.compile(keys)) ? jpp.get(data, jpp.compile(keys)) : undefined;
};
const getMetaData = (state, props) => {
    const { schemaKey, mergeSchema } = props;
    const { keys = [] } = mergeSchema;
    let { meta = {} } = state[props.schemaKey];
    return jpp.has(meta, jpp.compile(keys)) ? jpp.get(meta, jpp.compile(keys)) : { dirty: false };
};
const mapStateToProps = reselect_1.createSelector([getData, getMetaData], (formData, meta) => {
    return { formData, meta };
});
/**
 * 包装theme的组件HOC
 * @param Component 需要包装的组件
 * @param options   参数
 * 加入属性
 * currentTheme 当前的命名空间
 */
exports.DataHoc = (Component) => {
    class Hoc extends react_1.default.Component {
        render() {
            const ComponentWithHoc = react_redux_1.connect(mapStateToProps)(Component);
            console.log("data hoc rendred");
            return react_1.default.createElement(ComponentWithHoc, Object.assign({}, this.props));
        }
    }
    return Hoc;
};
//# sourceMappingURL=data.js.map
});
___scope___.file("fields/index.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_1 = require("./string");
const object_1 = require("./object");
const array_1 = require("./array");
exports.default = {
    string: string_1.StringField,
    boolean: string_1.StringField,
    number: string_1.StringField,
    integer: string_1.StringField,
    object: object_1.ObjectField,
    array: array_1.ArrayField
};
//# sourceMappingURL=index.js.map
});
___scope___.file("fields/string.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class StringField extends react_1.default.Component {
    render() {
        const { mergeSchema, currentTheme, WidgetComponent } = this.props;
        return (react_1.default.createElement(WidgetComponent, Object.assign({ key: mergeSchema.keys.join(".") }, this.props)));
    }
}
exports.StringField = StringField;
//# sourceMappingURL=string.js.map
});
___scope___.file("fields/object.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const index_1 = require("../index");
class ObjectField extends react_1.default.Component {
    render() {
        const { mergeSchema, currentTheme, WidgetComponent, globalOptions, schemaFormOptions, schemaKey } = this.props;
        const { uiSchema } = mergeSchema;
        return (react_1.default.createElement(index_1.SchemaForm, { schemaFormOptions: schemaFormOptions, schemaKey: schemaKey, schema: mergeSchema, parentKeys: mergeSchema.keys, RootComponent: uiSchema.root, uiSchema: uiSchema.items || ["*"], globalOptions: globalOptions }));
    }
}
exports.ObjectField = ObjectField;
//# sourceMappingURL=object.js.map
});
___scope___.file("fields/array.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const index_1 = require("../index");
class ArrayField extends react_1.default.Component {
    /**
     * 遍历数据，生成子表单
     * @param idx 数组的索引
     */
    renderItem(idx) {
        const { mergeSchema, schemaKey, globalOptions, schemaFormOptions, arrayItems, arrayItemItems } = this.props;
        const { uiSchema, keys } = mergeSchema;
        return (react_1.default.createElement(index_1.SchemaForm, { key: keys.join(".") + idx, schema: mergeSchema, arrayIndex: idx, arrayItems: arrayItemItems, parentKeys: mergeSchema.keys, RootComponent: null, schemaKey: schemaKey, uiSchema: uiSchema.items, schemaFormOptions: schemaFormOptions, globalOptions: globalOptions }));
    }
    /**
     * 渲染页面
     */
    render() {
        const { mergeSchema, currentTheme, WidgetComponent, schemaKey, globalOptions, schemaFormOptions, formItemData, meta = { dirty: false, isValid: true } } = this.props;
        const { uiSchema, title } = mergeSchema;
        let child = formItemData && formItemData.map((data, idx) => {
            return this.renderItem(idx);
        });
        return react_1.default.createElement("div", null, child || null);
    }
}
exports.ArrayField = ArrayField;
//# sourceMappingURL=array.js.map
});
___scope___.file("templates/index.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formitem_1 = require("./formitem");
const col_1 = require("./col");
const row_1 = require("./row");
const card_1 = require("./card");
exports.default = {
    formItem: formitem_1.AntdFormItemTemp,
    col: col_1.AntdColTemp,
    row: row_1.AntdRowTemp,
    card: card_1.AntdCardTemp
};
//# sourceMappingURL=index.js.map
});
___scope___.file("templates/formitem.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
class AntdFormItemTemp extends react_1.default.Component {
    render() {
        const { children, arrayIndex, arrayItems, mergeSchema, globalOptions = {}, tempKey, uiSchemaOptions, meta = { dirty: false, isValid: true } } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { hasFeedback = false } = tempOptions;
        let props = {};
        let { dirty, isValid, errorText = "" } = meta;
        if (dirty) {
            props.validateStatus = !isValid ? "error" : "success";
        }
        return (react_1.default.createElement(antd_1.Form.Item, Object.assign({ required: mergeSchema.isRequired, label: mergeSchema.title || [].concat(mergeSchema.keys).pop(), extra: mergeSchema.description, help: isValid ? "" : errorText, hasFeedback: dirty && hasFeedback }, props, tempOptions),
            children,
            arrayItems));
    }
}
exports.AntdFormItemTemp = AntdFormItemTemp;
//# sourceMappingURL=formitem.js.map
});
___scope___.file("templates/col.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
class AntdColTemp extends react_1.default.Component {
    render() {
        const { children, globalOptions, mergeSchema, tempKey, uiSchemaOptions } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (react_1.default.createElement(antd_1.Col, Object.assign({}, tempOptions), children));
    }
}
exports.AntdColTemp = AntdColTemp;
//# sourceMappingURL=col.js.map
});
___scope___.file("templates/row.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
class AntdRowTemp extends react_1.default.Component {
    render() {
        const { children, globalOptions, tempKey, uiSchemaOptions, mergeSchema } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        return (react_1.default.createElement(antd_1.Row, Object.assign({}, tempOptions), children));
    }
}
exports.AntdRowTemp = AntdRowTemp;
//# sourceMappingURL=row.js.map
});
___scope___.file("templates/card.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
class AntdCardTemp extends react_1.default.Component {
    render() {
        const { children, globalOptions, tempKey, uiSchemaOptions, mergeSchema, arrayItems } = this.props;
        const tempOptions = Object.assign({}, globalOptions[tempKey] || {}, uiSchemaOptions[tempKey] || {});
        const { uiSchema, title } = mergeSchema;
        return (react_1.default.createElement(antd_1.Card, Object.assign({}, tempOptions, { title: title || uiSchema.title, extra: arrayItems }), children));
    }
}
exports.AntdCardTemp = AntdCardTemp;
//# sourceMappingURL=card.js.map
});
___scope___.file("widgets/index.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const input_1 = require("./input");
const checkbox_1 = require("./checkbox");
const switch_1 = require("./switch");
exports.default = {
    input: input_1.AntdInputWidget,
    string: input_1.AntdInputWidget,
    checkbox: checkbox_1.AntdCheckboxWidget,
    boolean: checkbox_1.AntdCheckboxWidget,
    switch: switch_1.AntdSwitchWidget
};
//# sourceMappingURL=index.js.map
});
___scope___.file("widgets/input.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
class AntdInputWidget extends react_1.default.Component {
    componentDidMount() {
        console.log("input mounted!");
    }
    setDefaultProps() {
        const { mergeSchema } = this.props;
        const props = {};
        if (this.props.formItemData !== undefined) {
            props.value = this.props.formItemData;
        }
        else {
            props.defaultValue = mergeSchema.default;
            props.value = "";
        }
        return props;
    }
    render() {
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, schemaFormOptions, schemaKey, validate } = this.props;
        const { input = {} } = uiSchemaOptions.widget || {};
        const { input: inputDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        // console.log(this.props.meta);
        return (react_1.default.createElement(antd_1.Input, Object.assign({ onChange: (e) => {
                validate(e.currentTarget.value);
            }, disabled: readonly, placeholder: mergeSchema.title }, input, inputDefault, this.setDefaultProps())));
    }
}
exports.AntdInputWidget = AntdInputWidget;
//# sourceMappingURL=input.js.map
});
___scope___.file("widgets/checkbox.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
class AntdCheckboxWidget extends react_1.default.Component {
    setDefaultProps() {
        const { mergeSchema } = this.props;
        const props = {};
        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        }
        else {
            props.defaultChecked = mergeSchema.default;
        }
        return props;
    }
    render() {
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, meta, validate } = this.props;
        const { checkbox = {} } = uiSchemaOptions.widget || {};
        const { checkbox: checkboxDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (react_1.default.createElement(antd_1.Checkbox, Object.assign({ onChange: (e) => {
                validate(e.target.checked);
            }, disabled: readonly }, checkbox, checkboxDefault, this.setDefaultProps())));
    }
}
exports.AntdCheckboxWidget = AntdCheckboxWidget;
//# sourceMappingURL=checkbox.js.map
});
___scope___.file("widgets/switch.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const antd_1 = require("antd");
class AntdSwitchWidget extends react_1.default.Component {
    setDefaultProps() {
        const { mergeSchema } = this.props;
        const props = {};
        if (this.props.formItemData !== undefined) {
            props.checked = this.props.formItemData;
        }
        else {
            props.defaultChecked = mergeSchema.default;
        }
        return props;
    }
    render() {
        const { mergeSchema, arrayIndex, globalOptions, uiSchemaOptions, meta, validate } = this.props;
        const { switch: switcho = {} } = uiSchemaOptions.widget || {};
        const { switch: switchDefault = {} } = globalOptions.widget || {};
        const { uiSchema = {}, keys } = mergeSchema;
        const { readonly = false } = uiSchema;
        return (react_1.default.createElement(antd_1.Switch, Object.assign({ onChange: (checked) => {
                validate(checked);
            }, disabled: readonly }, switchDefault, switcho, this.setDefaultProps())));
    }
}
exports.AntdSwitchWidget = AntdSwitchWidget;
//# sourceMappingURL=switch.js.map
});
___scope___.file("libs/create.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const form_1 = require("../reducer/form");
exports.default = (forms = {}) => {
    let reducers = {};
    for (let key in forms) {
        if (forms.hasOwnProperty(key)) {
            let element = forms[key];
            let meta = {};
            let reducer = new form_1.FormReducer({
                data: element,
                meta: meta
            });
            meta.actions = reducer.actions;
            if (element) {
                reducers[key] = reducer.reducer;
            }
        }
    }
    return reducers;
};
//# sourceMappingURL=create.js.map
});
___scope___.file("reducer/form.jsx", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_act_1 = require("redux-act");
const jpp = require("json-pointer");
class FormReducer {
    constructor(initialState) {
        this.initialState = initialState;
        /**
         * 单个元素的值变化时候调用
         */
        this.updateItem = redux_act_1.createAction("更新表单值");
        /**
         * 验证所有的字段
         */
        this.validateAllField = redux_act_1.createAction("验证表单中所有的字段");
    }
    get actions() {
        return {
            updateItem: this.updateItem
        };
    }
    get reducer() {
        return redux_act_1.createReducer({
            [this.updateItem]: (state, { keys, data, meta }) => {
                let originData = Object.assign({}, state.data);
                let originMeta = Object.assign({}, state.meta);
                jpp(originData).set(jpp.compile(keys), data);
                jpp(originMeta).set(jpp.compile(keys), meta);
                return Object.assign({}, state, { data: originData, meta: originMeta });
            }
        }, this.initialState);
    }
}
exports.FormReducer = FormReducer;
//# sourceMappingURL=form.js.map
});
});
FuseBox.pkg("fusebox-hot-reload", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
/**
 * @module listens to `source-changed` socket events and actions hot reload
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Client = require('fusebox-websocket').SocketClient, bundleErrors = {}, outputElement = document.createElement('div'), styleElement = document.createElement('style'), minimizeToggleId = 'fuse-box-toggle-minimized', hideButtonId = 'fuse-box-hide', expandedOutputClass = 'fuse-box-expanded-output', localStoragePrefix = '__fuse-box_';
function storeSetting(key, value) {
    localStorage[localStoragePrefix + key] = value;
}
function getSetting(key) {
    return localStorage[localStoragePrefix + key] === 'true' ? true : false;
}
var outputInBody = false, outputMinimized = getSetting(minimizeToggleId), outputHidden = false;
outputElement.id = 'fuse-box-output';
styleElement.innerHTML = "\n    #" + outputElement.id + ", #" + outputElement.id + " * {\n        box-sizing: border-box;\n    }\n    #" + outputElement.id + " {\n        z-index: 999999999999;\n        position: fixed;\n        top: 10px;\n        right: 10px;\n        width: 400px;\n        overflow: auto;\n        background: #fdf3f1;\n        border: 1px solid #eca494;\n        border-radius: 5px;\n        font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n        box-shadow: 0px 3px 6px 1px rgba(0,0,0,.15);\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " {\n        height: auto;\n        width: auto;\n        left: 10px;\n        max-height: calc(100vh - 50px);\n    }\n    #" + outputElement.id + " .fuse-box-errors {\n        display: none;\n    }\n    #" + outputElement.id + "." + expandedOutputClass + " .fuse-box-errors {\n        display: block;\n        border-top: 1px solid #eca494;\n        padding: 0 10px;\n    }\n    #" + outputElement.id + " button {\n        border: 1px solid #eca494;\n        padding: 5px 10px;\n        border-radius: 4px;\n        margin-left: 5px;\n        background-color: white;\n        color: black;\n        box-shadow: 0px 2px 2px 0px rgba(0,0,0,.05);\n    }\n    #" + outputElement.id + " .fuse-box-header {\n        padding: 10px;\n    }\n    #" + outputElement.id + " .fuse-box-header h4 {\n        display: inline-block;\n        margin: 4px;\n    }";
styleElement.type = 'text/css';
document.getElementsByTagName('head')[0].appendChild(styleElement);
function displayBundleErrors() {
    var errorMessages = Object.keys(bundleErrors).reduce(function (allMessages, bundleName) {
        var bundleMessages = bundleErrors[bundleName];
        return allMessages.concat(bundleMessages.map(function (message) {
            var messageOutput = message
                .replace(/\n/g, '<br>')
                .replace(/\t/g, '&nbsp;&nbps;&npbs;&nbps;')
                .replace(/ /g, '&nbsp;');
            return "<pre>" + messageOutput + "</pre>";
        }));
    }, []), errorOutput = errorMessages.join('');
    if (errorOutput && !outputHidden) {
        outputElement.innerHTML = "\n        <div class=\"fuse-box-header\" style=\"\">\n            <h4 style=\"\">Fuse Box Bundle Errors (" + errorMessages.length + "):</h4>\n            <div style=\"float: right;\">\n                <button id=\"" + minimizeToggleId + "\">" + (outputMinimized ? 'Expand' : 'Minimize') + "</button>\n                <button id=\"" + hideButtonId + "\">Hide</button>\n            </div>\n        </div>\n        <div class=\"fuse-box-errors\">\n            " + errorOutput + "\n        </div>\n        ";
        document.body.appendChild(outputElement);
        outputElement.className = outputMinimized ? '' : expandedOutputClass;
        outputInBody = true;
        document.getElementById(minimizeToggleId).onclick = function () {
            outputMinimized = !outputMinimized;
            storeSetting(minimizeToggleId, outputMinimized);
            displayBundleErrors();
        };
        document.getElementById(hideButtonId).onclick = function () {
            outputHidden = true;
            displayBundleErrors();
        };
    }
    else if (outputInBody) {
        document.body.removeChild(outputElement);
        outputInBody = false;
    }
}
exports.connect = function (port, uri) {
    if (FuseBox.isServer) {
        return;
    }
    port = port || window.location.port;
    var client = new Client({
        port: port,
        uri: uri,
    });
    client.connect();
    client.on('source-changed', function (data) {
        console.info("%cupdate \"" + data.path + "\"", 'color: #237abe');
        /**
         * If a plugin handles this request then we don't have to do anything
         **/
        for (var index = 0; index < FuseBox.plugins.length; index++) {
            var plugin = FuseBox.plugins[index];
            if (plugin.hmrUpdate && plugin.hmrUpdate(data)) {
                return;
            }
        }
        if (data.type === "hosted-css") {
            var fileId = data.path.replace(/^\//, '').replace(/[\.\/]+/g, '-');
            var existing = document.getElementById(fileId);
            if (existing) {
                existing.setAttribute("href", data.path + "?" + new Date().getTime());
            }
            else {
                var node = document.createElement('link');
                node.id = fileId;
                node.type = 'text/css';
                node.rel = 'stylesheet';
                node.href = data.path;
                document.getElementsByTagName('head')[0].appendChild(node);
            }
        }
        if (data.type === 'js' || data.type === "css") {
            FuseBox.flush();
            FuseBox.dynamic(data.path, data.content);
            if (FuseBox.mainFile) {
                try {
                    FuseBox.import(FuseBox.mainFile);
                }
                catch (e) {
                    if (typeof e === 'string') {
                        if (/not found/.test(e)) {
                            return window.location.reload();
                        }
                    }
                    console.error(e);
                }
            }
        }
    });
    client.on('error', function (error) {
        console.log(error);
    });
    client.on('bundle-error', function (_a) {
        var bundleName = _a.bundleName, message = _a.message;
        console.error("Bundle error in " + bundleName + ": " + message);
        var errorsForBundle = bundleErrors[bundleName] || [];
        errorsForBundle.push(message);
        bundleErrors[bundleName] = errorsForBundle;
        displayBundleErrors();
    });
    client.on('update-bundle-errors', function (_a) {
        var bundleName = _a.bundleName, messages = _a.messages;
        messages.forEach(function (message) { return console.error("Bundle error in " + bundleName + ": " + message); });
        bundleErrors[bundleName] = messages;
        displayBundleErrors();
    });
};

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fuse-heresy-default", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

module.exports = function(input) {
    return ['function', 'object', 'array']
        .indexOf(typeof input) > -1 && input.default === undefined ? input.default = input : void 0;
}
});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("fusebox-websocket", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var events = require('events');
var SocketClient = /** @class */ (function () {
    function SocketClient(opts) {
        opts = opts || {};
        var port = opts.port || window.location.port;
        var protocol = location.protocol === 'https:' ? 'wss://' : 'ws://';
        var domain = location.hostname || 'localhost';
        this.url = opts.host || "" + protocol + domain + ":" + port;
        if (opts.uri) {
            this.url = opts.uri;
        }
        this.authSent = false;
        this.emitter = new events.EventEmitter();
    }
    SocketClient.prototype.reconnect = function (fn) {
        var _this = this;
        setTimeout(function () {
            _this.emitter.emit('reconnect', { message: 'Trying to reconnect' });
            _this.connect(fn);
        }, 5000);
    };
    SocketClient.prototype.on = function (event, fn) {
        this.emitter.on(event, fn);
    };
    SocketClient.prototype.connect = function (fn) {
        var _this = this;
        console.log('%cConnecting to fusebox HMR at ' + this.url, 'color: #237abe');
        setTimeout(function () {
            _this.client = new WebSocket(_this.url);
            _this.bindEvents(fn);
        }, 0);
    };
    SocketClient.prototype.close = function () {
        this.client.close();
    };
    SocketClient.prototype.send = function (eventName, data) {
        if (this.client.readyState === 1) {
            this.client.send(JSON.stringify({ event: eventName, data: data || {} }));
        }
    };
    SocketClient.prototype.error = function (data) {
        this.emitter.emit('error', data);
    };
    /** Wires up the socket client messages to be emitted on our event emitter */
    SocketClient.prototype.bindEvents = function (fn) {
        var _this = this;
        this.client.onopen = function (event) {
            console.log('%cConnected', 'color: #237abe');
            if (fn) {
                fn(_this);
            }
        };
        this.client.onerror = function (event) {
            _this.error({ reason: event.reason, message: 'Socket error' });
        };
        this.client.onclose = function (event) {
            _this.emitter.emit('close', { message: 'Socket closed' });
            if (event.code !== 1011) {
                _this.reconnect(fn);
            }
        };
        this.client.onmessage = function (event) {
            var data = event.data;
            if (data) {
                var item = JSON.parse(data);
                _this.emitter.emit(item.type, item.data);
                _this.emitter.emit('*', item);
            }
        };
    };
    return SocketClient;
}());
exports.SocketClient = SocketClient;

});
return ___scope___.entry = "index.js";
});
FuseBox.pkg("events", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
if (FuseBox.isServer) {
    module.exports = global.require("events");
} else {
    function EventEmitter() {
        this._events = this._events || {};
        this._maxListeners = this._maxListeners || undefined;
    }
    module.exports = EventEmitter;

    // Backwards-compat with node 0.10.x
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!isNumber(n) || n < 0 || isNaN(n))
            throw TypeError("n must be a positive number");
        this._maxListeners = n;
        return this;
    };

    EventEmitter.prototype.emit = function(type) {
        var er, handler, len, args, i, listeners;

        if (!this._events)
            this._events = {};

        // If there is no 'error' event listener then throw.
        if (type === "error") {
            if (!this._events.error ||
                (isObject(this._events.error) && !this._events.error.length)) {
                er = arguments[1];
                if (er instanceof Error) {
                    throw er; // Unhandled 'error' event
                }
                throw TypeError("Uncaught, unspecified \"error\" event.");
            }
        }

        handler = this._events[type];

        if (isUndefined(handler))
            return false;

        if (isFunction(handler)) {
            switch (arguments.length) {
                // fast cases
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                    // slower
                default:
                    args = Array.prototype.slice.call(arguments, 1);
                    handler.apply(this, args);
            }
        } else if (isObject(handler)) {
            args = Array.prototype.slice.call(arguments, 1);
            listeners = handler.slice();
            len = listeners.length;
            for (i = 0; i < len; i++)
                listeners[i].apply(this, args);
        }

        return true;
    };

    EventEmitter.prototype.addListener = function(type, listener) {
        var m;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events)
            this._events = {};

        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (this._events.newListener)
            this.emit("newListener", type,
                isFunction(listener.listener) ?
                listener.listener : listener);

        if (!this._events[type])
        // Optimize the case of one listener. Don't need the extra array object.
            this._events[type] = listener;
        else if (isObject(this._events[type]))
        // If we've already got an array, just append.
            this._events[type].push(listener);
        else
        // Adding the second element, need to change to array.
            this._events[type] = [this._events[type], listener];

        // Check for listener leak
        if (isObject(this._events[type]) && !this._events[type].warned) {
            if (!isUndefined(this._maxListeners)) {
                m = this._maxListeners;
            } else {
                m = EventEmitter.defaultMaxListeners;
            }

            if (m && m > 0 && this._events[type].length > m) {
                this._events[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " +
                    "leak detected. %d listeners added. " +
                    "Use emitter.setMaxListeners() to increase limit.",
                    this._events[type].length);
                if (typeof console.trace === "function") {
                    // not supported in IE 10
                    console.trace();
                }
            }
        }

        return this;
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.once = function(type, listener) {
        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        var fired = false;

        function g() {
            this.removeListener(type, g);

            if (!fired) {
                fired = true;
                listener.apply(this, arguments);
            }
        }

        g.listener = listener;
        this.on(type, g);

        return this;
    };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener = function(type, listener) {
        var list, position, length, i;

        if (!isFunction(listener))
            throw TypeError("listener must be a function");

        if (!this._events || !this._events[type])
            return this;

        list = this._events[type];
        length = list.length;
        position = -1;

        if (list === listener ||
            (isFunction(list.listener) && list.listener === listener)) {
            delete this._events[type];
            if (this._events.removeListener)
                this.emit("removeListener", type, listener);

        } else if (isObject(list)) {
            for (i = length; i-- > 0;) {
                if (list[i] === listener ||
                    (list[i].listener && list[i].listener === listener)) {
                    position = i;
                    break;
                }
            }

            if (position < 0)
                return this;

            if (list.length === 1) {
                list.length = 0;
                delete this._events[type];
            } else {
                list.splice(position, 1);
            }

            if (this._events.removeListener)
                this.emit("removeListener", type, listener);
        }

        return this;
    };

    EventEmitter.prototype.removeAllListeners = function(type) {
        var key, listeners;

        if (!this._events)
            return this;

        // not listening for removeListener, no need to emit
        if (!this._events.removeListener) {
            if (arguments.length === 0)
                this._events = {};
            else if (this._events[type])
                delete this._events[type];
            return this;
        }

        // emit removeListener for all listeners on all events
        if (arguments.length === 0) {
            for (key in this._events) {
                if (key === "removeListener") continue;
                this.removeAllListeners(key);
            }
            this.removeAllListeners("removeListener");
            this._events = {};
            return this;
        }

        listeners = this._events[type];

        if (isFunction(listeners)) {
            this.removeListener(type, listeners);
        } else if (listeners) {
            // LIFO order
            while (listeners.length)
                this.removeListener(type, listeners[listeners.length - 1]);
        }
        delete this._events[type];

        return this;
    };

    EventEmitter.prototype.listeners = function(type) {
        var ret;
        if (!this._events || !this._events[type])
            ret = [];
        else if (isFunction(this._events[type]))
            ret = [this._events[type]];
        else
            ret = this._events[type].slice();
        return ret;
    };

    EventEmitter.prototype.listenerCount = function(type) {
        if (this._events) {
            var evlistener = this._events[type];

            if (isFunction(evlistener))
                return 1;
            else if (evlistener)
                return evlistener.length;
        }
        return 0;
    };

    EventEmitter.listenerCount = function(emitter, type) {
        return emitter.listenerCount(type);
    };

    function isFunction(arg) {
        return typeof arg === "function";
    }

    function isNumber(arg) {
        return typeof arg === "number";
    }

    function isObject(arg) {
        return typeof arg === "object" && arg !== null;
    }

    function isUndefined(arg) {
        return arg === void 0;
    }
}

});
return ___scope___.entry = "index.js";
});
FuseBox.global("__fsbx_decorate", function(localArguments) {
    return function(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;

        if (!decorators) {
            return;
        }
        if (decorators && decorators.push) {
            decorators.push(
                __metadata("fusebox:exports", localArguments[0]),
                __metadata("fusebox:require", localArguments[1]),
                __metadata("fusebox:module", localArguments[2]),
                __metadata("fusebox:__filename", localArguments[3]),
                __metadata("fusebox:__dirname", localArguments[4])
            );
        }
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
});

FuseBox.global("__metadata", function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
});

FuseBox.import("fusebox-hot-reload").connect(4444, "")
FuseBox.target = "universal"

FuseBox.import("default/demo.jsx");
FuseBox.main("default/demo.jsx");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=m[a];if(!s){if(d&&"electron"!==h.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r,n){if(void 0===n&&(n={}),!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");if(n&&n.ajaxed===e)return console.error(e,"does not provide a module");var i=new XMLHttpRequest;i.onreadystatechange=function(){if(4==i.readyState)if(200==i.status){var n=i.getResponseHeader("Content-Type"),o=i.responseText;/json/.test(n)?o="module.exports = "+o:/javascript/.test(n)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);h.dynamic(a,o),r(h.import(e,{ajaxed:e}))}else console.error(e,"not found on request"),r(void 0)},i.open("GET",e,!0),i.send()}function l(e,r){var n=g[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=m[t.pkgName];if(u){var p={};for(var g in u.f)a.test(g)&&(p[g]=c(t.pkgName+"/"+g));return p}}if(!i){var h="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return h?r(e):null},r)}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},d||!v.require.main?w.require.main={filename:"./",paths:[]}:w.require.main=v.require.main;var j=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",j),i.fn.apply(0,j),l("after-import",j),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var m=p.p=p.p||{},g=p.e=p.e||{},h=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){g[e]=g[e]||[],g[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=m[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=m.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(m[e])return n(m[e].s);var t=m[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r.packages=m,r.isBrowser=d,r.isServer=!d,r.plugins=[],r}();return d||(v.FuseBox=h),e.FuseBox=h}(this))
//# sourceMappingURL=app.js.map