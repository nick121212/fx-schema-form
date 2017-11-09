(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("json-pointer"), require("fx-schema-form-core"), require("uuid"), require("redux-act"), require("lodash.clonedeep"));
	else if(typeof define === 'function' && define.amd)
		define("fx-schema-form-antd", ["json-pointer", "fx-schema-form-core", "uuid", "redux-act", "lodash.clonedeep"], factory);
	else if(typeof exports === 'object')
		exports["fx-schema-form-antd"] = factory(require("json-pointer"), require("fx-schema-form-core"), require("uuid"), require("redux-act"), require("lodash.clonedeep"));
	else
		root["fx-schema-form-antd"] = factory(root["json-pointer"], root["fx-schema-form-core"], root["uuid"], root["redux-act"], root["lodash.clonedeep"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_act__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_act___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_act__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_json_pointer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_json_pointer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_json_pointer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_clonedeep__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash_clonedeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash_clonedeep__);



class FormReducer {
    /**
     * 构造
     * @param initialState 初始化状态
     * @param meta         当前的meta类
     * @param updateState  更改数据的方法
     */
    constructor(initialState, meta, getOriginState, updateState) {
        this.initialState = initialState;
        this.meta = meta;
        this.getOriginState = getOriginState;
        this.updateState = updateState;
        /**
         * 单个元素的值变化时候调用
         */
        this.updateItem = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("更新表单值");
        /**
         * 显示/隐藏元素
         */
        this.toggleItem = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("显示/隐藏元素");
        /**
         * 删除元素
         */
        this.removeItem = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("删除元素");
        /**
         * 添加元素
         */
        this.addItem = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("添加元素");
        /**
         * 元素移位
         */
        this.switchItem = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("元素移位");
        /**
         * 初始化元素的meta信息
         */
        this.updateItemMeta = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("更新元素的meta信息");
        /**
         * 更改meta的状态
         */
        this.updateMetaState = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("更改meta的状态");
        /**
         * 更改meta的状态
         */
        this.updateData = Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createAction"])("更改data的值");
    }
    /**
     * 获取当前的actions
     */
    get actions() {
        return {
            updateItem: this.updateItem,
            toggleItem: this.toggleItem,
            removeItem: this.removeItem,
            addItem: this.addItem,
            switchItem: this.switchItem,
            updateMetaState: this.updateMetaState,
            updateItemMeta: this.updateItemMeta,
            updateData: this.updateData
        };
    }
    /**
     * 返回当前的reducer
     */
    get reducer() {
        return Object(__WEBPACK_IMPORTED_MODULE_0_redux_act__["createReducer"])({
            [this.updateItem]: this.updateItemHandle.bind(this),
            [this.toggleItem]: this.toggleItemHandle.bind(this),
            [this.addItem]: this.addItemHandle.bind(this),
            [this.removeItem]: this.removeItemHandle.bind(this),
            [this.switchItem]: this.switchItemHandle.bind(this),
            [this.updateMetaState]: this.updateMetaStateHandle.bind(this),
            [this.updateItemMeta]: this.updateMetaHandle.bind(this),
            [this.updateData]: this.updateDataHandle.bind(this)
        }, this.initialState);
    }
    /**
     * 更新全部数据
     * @param state state
     * @param data  data
     */
    updateDataHandle(state, data) {
        if (this.updateState) {
            return this.updateState(state, { data, meta: { map: {}, meta: {} } });
        }
        return Object.assign({}, state, { data, meta: { map: {}, meta: {} } });
    }
    /**
    * 获取当前state的信息
    * @param state 当前的state
    */
    getOrigin(state) {
        if (this.getOriginState) {
            return this.getOriginState(state);
        }
        let originData = __WEBPACK_IMPORTED_MODULE_2_lodash_clonedeep___default()(state.data);
        let originMeta = __WEBPACK_IMPORTED_MODULE_2_lodash_clonedeep___default()(state.meta);
        return { originData, originMeta };
    }
    /**
     * 更改meta的状态
     *  1. 如果存在meta，则更新meta
     * @param state 当前的state
     */
    updateMetaStateHandle(state, { isLoading, isValid, meta }) {
        let { originMeta } = this.getOrigin(state);
        if (meta) {
            originMeta = meta;
        }
        if (isLoading !== undefined) {
            originMeta.isLoading = isLoading;
        }
        if (isValid !== undefined) {
            originMeta.isValid = isValid;
        }
        if (this.updateState) {
            return this.updateState(state, { meta: originMeta });
        }
        return Object.assign({}, state, { meta: originMeta });
    }
    /**
     * 更新数据
     * @param state  state
     * @param param1 data
     */
    updateItemHandle(state, { keys, data, meta }) {
        let { originData } = this.getOrigin(state);
        let { normalKey } = this.meta.getKey(keys);
        __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(originData).set(normalKey, data);
        this.meta.setMeta(keys, meta);
        if (this.updateState) {
            return this.updateState(state, { data: originData, meta: this.meta.data });
        }
        return Object.assign({}, state, { data: originData, meta: this.meta.data });
    }
    updateMetaHandle(state, { keys, meta }) {
        let { originData } = this.getOrigin(state);
        let { normalKey } = this.meta.getKey(keys);
        let curMeta = this.meta.getMeta(keys, false) || {};
        this.meta.setMeta(keys, meta);
        if (this.updateState) {
            return this.updateState(state, { meta: this.meta.data });
        }
        return Object.assign({}, state, { meta: this.meta.data });
    }
    toggleItemHandle(state, { keys }) {
        let { normalKey } = this.meta.getKey(keys);
        let curMeta = this.meta.getMeta(keys, false) || {};
        this.meta.setMeta(keys, Object.assign({}, curMeta, { isShow: curMeta.isShow !== undefined ? !curMeta.isShow : false }), false);
        if (this.updateState) {
            return this.updateState(state, { meta: this.meta.data });
        }
        return Object.assign({}, state, { meta: this.meta.data });
    }
    addItemHandle(state, { keys, data }) {
        let { originData } = this.getOrigin(state);
        let { normalKey } = this.meta.getKey(keys);
        let curData = __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(originData).has(normalKey) ? __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(originData).get(normalKey) : [];
        __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(originData).set(normalKey, [...curData, data]);
        if (this.updateState) {
            return this.updateState(state, { data: originData });
        }
        return Object.assign({}, state, { data: originData });
    }
    removeItemHandle(state, { keys, index }) {
        let { originData } = this.getOrigin(state);
        let { normalKey } = this.meta.getKey([...keys, index.toString()]);
        if (originData && __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(originData).has(normalKey)) {
            __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(originData).remove(normalKey);
        }
        this.meta.removeMeta([...keys, index.toString()]);
        if (this.updateState) {
            return this.updateState(state, { data: originData, meta: this.meta.data });
        }
        return Object.assign({}, state, { data: originData, meta: this.meta.data });
    }
    switchItemHandle(state, { keys, curIndex, switchIndex }) {
        let { originData } = this.getOrigin(state);
        let { normalKey } = this.meta.getKey(keys);
        let curData = __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(originData).get(normalKey);
        [curData[curIndex], curData[switchIndex]] = [curData[switchIndex], curData[curIndex]];
        __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(originData).set(normalKey, curData);
        this.meta.switchMeta(keys, curIndex, switchIndex);
        if (this.updateState) {
            return this.updateState(state, { data: originData, meta: this.meta.data });
        }
        return Object.assign({}, state, { data: originData, meta: this.meta.data });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FormReducer;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_form__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_form__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__components_form__, "SchemaForm")) __webpack_require__.d(__webpack_exports__, "SchemaForm", function() { return __WEBPACK_IMPORTED_MODULE_0__components_form__["SchemaForm"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_formitem__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_formitem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_formitem__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__components_formitem__, "SchemaFormItem")) __webpack_require__.d(__webpack_exports__, "SchemaFormItem", function() { return __WEBPACK_IMPORTED_MODULE_1__components_formitem__["SchemaFormItem"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer_form__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormReducer", function() { return __WEBPACK_IMPORTED_MODULE_2__reducer_form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__factory__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return __WEBPACK_IMPORTED_MODULE_3__factory__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nsFactory", function() { return __WEBPACK_IMPORTED_MODULE_3__factory__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_create__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createForms", function() { return __WEBPACK_IMPORTED_MODULE_4__libs_create__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SchemaFormCreate", function() { return __WEBPACK_IMPORTED_MODULE_4__libs_create__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__hocs__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "hocFactory", function() { return __WEBPACK_IMPORTED_MODULE_5__hocs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_json_pointer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_json_pointer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_json_pointer__);







__WEBPACK_IMPORTED_MODULE_6_json_pointer___default.a.set = function set(obj, pointer, value) {
    let refTokens = Array.isArray(pointer) ? pointer : __WEBPACK_IMPORTED_MODULE_6_json_pointer___default.a.parse(pointer),
        nextTok = refTokens[0];
    for (let i = 0, n = refTokens.length; i < n - 1; ++i) {
        let tok = refTokens[i];
        if (tok === "-" && Array.isArray(obj)) {
            tok = obj.length;
        }
        nextTok = refTokens[i + 1];
        if (!(tok in obj)) {
            if (nextTok.match(/^(\d+|-)$/)) {
                obj[tok] = [];
            } else {
                obj[tok] = {};
            }
        }
        if (!obj[tok] && nextTok) {
            // let keys = refTokens.concat([]).splice(i);
            obj[tok] = !Number.isNaN(nextTok * 1) ? [] : {};
        }
        obj = obj[tok];
    }
    if (nextTok === "-" && Array.isArray(obj)) {
        nextTok = obj.length;
    }
    obj[nextTok] = value;
    return this;
};
// jpp({}).set("/a", 1);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (20:16)\n\n\u001b[0m \u001b[90m 18 | \u001b[39m            \u001b[33mRootComponentHock\u001b[39m \u001b[33m=\u001b[39m \u001b[33mSchemaFormBlock\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 19 | \u001b[39m        }\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 20 | \u001b[39m        \u001b[36mreturn\u001b[39m (\u001b[33m<\u001b[39m\u001b[33mRootComponentHock\u001b[39m\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 21 | \u001b[39m                {mergeSchemaList\u001b[33m.\u001b[39mmap((mergeSchema\u001b[33m,\u001b[39m idx) \u001b[33m=>\u001b[39m {\n \u001b[90m 22 | \u001b[39m            mergeSchema\u001b[33m.\u001b[39mkeys \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mmergeKeys(mergeSchema)\u001b[33m;\u001b[39m\n \u001b[90m 23 | \u001b[39m            \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mSchemaFormItem\u001b[39m key\u001b[33m=\u001b[39m{\u001b[32m`${schemaKey}-${idx.toString()}}`\u001b[39m} getCurrentState\u001b[33m=\u001b[39m{getCurrentState} schemaKey\u001b[33m=\u001b[39m{schemaKey} arrayIndex\u001b[33m=\u001b[39m{arrayIndex} arrayLevel\u001b[33m=\u001b[39m{arrayLevel} \u001b[33mItemButtons\u001b[39m\u001b[33m=\u001b[39m{\u001b[33mItemButtons\u001b[39m} formDefaultData\u001b[33m=\u001b[39m{formDefaultData} mergeSchemaList\u001b[33m=\u001b[39m{mergeSchemaList} mergeSchema\u001b[33m=\u001b[39m{mergeSchema} schemaFormOptions\u001b[33m=\u001b[39m{schemaFormOptions} globalOptions\u001b[33m=\u001b[39m{globalOptions}\u001b[33m>\u001b[39m\u001b[0m\n");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (15:15)\n\n\u001b[0m \u001b[90m 13 | \u001b[39m            \u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 14 | \u001b[39m        }\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 15 | \u001b[39m        \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mFieldComponent\u001b[39m {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 16 | \u001b[39m    }\n \u001b[90m 17 | \u001b[39m}\n \u001b[90m 18 | \u001b[39m\u001b[36mexport\u001b[39m \u001b[36mconst\u001b[39m \u001b[33mSchemaFormItem\u001b[39m \u001b[33m=\u001b[39m hoc(\u001b[33mSchemaFormItemComponent\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return defaultTheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__libs_ns_factory__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fields__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__libs_ns_factory__["a"]; });



const defaultTheme = {
    tempFactory: new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"](),
    fieldFactory: new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"](),
    widgetFactory: new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]()
};
__WEBPACK_IMPORTED_MODULE_1__libs_ns_factory__["a" /* nsFactory */].add("default", defaultTheme);
for (let key in __WEBPACK_IMPORTED_MODULE_2__fields__["a" /* default */]) {
    if (__WEBPACK_IMPORTED_MODULE_2__fields__["a" /* default */].hasOwnProperty(key)) {
        let field = __WEBPACK_IMPORTED_MODULE_2__fields__["a" /* default */][key];
        defaultTheme.fieldFactory.add(key, field);
        defaultTheme.fieldFactory.lock(key);
    }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__);

class SchemaFormNsFactory extends __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"] {
    constructor() {
        super();
    }
}
/* unused harmony export SchemaFormNsFactory */

const nsFactory = new SchemaFormNsFactory();
/* harmony export (immutable) */ __webpack_exports__["a"] = nsFactory;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normal__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__normal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__normal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__array__);



/* harmony default export */ __webpack_exports__["a"] = ({
    string: __WEBPACK_IMPORTED_MODULE_0__normal__["NormalField"],
    boolean: __WEBPACK_IMPORTED_MODULE_0__normal__["NormalField"],
    number: __WEBPACK_IMPORTED_MODULE_0__normal__["NormalField"],
    integer: __WEBPACK_IMPORTED_MODULE_0__normal__["NormalField"],
    null: __WEBPACK_IMPORTED_MODULE_0__normal__["NormalField"],
    object: __WEBPACK_IMPORTED_MODULE_1__object__["ObjectField"],
    array: __WEBPACK_IMPORTED_MODULE_2__array__["ArrayField"]
});

/***/ }),
/* 12 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (5:16)\n\n\u001b[0m \u001b[90m 3 | \u001b[39m    render() {\n \u001b[90m 4 | \u001b[39m        \u001b[36mconst\u001b[39m { mergeSchema\u001b[33m,\u001b[39m currentTheme\u001b[33m,\u001b[39m \u001b[33mWidgetComponent\u001b[39m } \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 5 | \u001b[39m        \u001b[36mreturn\u001b[39m (\u001b[33m<\u001b[39m\u001b[33mWidgetComponent\u001b[39m key\u001b[33m=\u001b[39m{mergeSchema\u001b[33m.\u001b[39mkeys\u001b[33m.\u001b[39mjoin(\u001b[32m\".\"\u001b[39m)} {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m   | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 6 | \u001b[39m    }\n \u001b[90m 7 | \u001b[39m}\n \u001b[90m 8 | \u001b[39m\u001b[0m\n");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (7:16)\n\n\u001b[0m \u001b[90m  5 | \u001b[39m        \u001b[36mconst\u001b[39m { mergeSchema\u001b[33m,\u001b[39m currentTheme\u001b[33m,\u001b[39m \u001b[33mWidgetComponent\u001b[39m\u001b[33m,\u001b[39m arrayIndex\u001b[33m,\u001b[39m \u001b[33mItemButtons\u001b[39m\u001b[33m,\u001b[39m arrayLevel\u001b[33m,\u001b[39m getCurrentState\u001b[33m,\u001b[39m globalOptions\u001b[33m,\u001b[39m schemaFormOptions\u001b[33m,\u001b[39m schemaKey } \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m;\u001b[39m\n \u001b[90m  6 | \u001b[39m        \u001b[36mconst\u001b[39m { uiSchema } \u001b[33m=\u001b[39m mergeSchema\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 | \u001b[39m        \u001b[36mreturn\u001b[39m (\u001b[33m<\u001b[39m\u001b[33mSchemaForm\u001b[39m arrayIndex\u001b[33m=\u001b[39m{arrayIndex} schemaFormOptions\u001b[33m=\u001b[39m{schemaFormOptions} getCurrentState\u001b[33m=\u001b[39m{getCurrentState} schemaKey\u001b[33m=\u001b[39m{schemaKey} arrayLevel\u001b[33m=\u001b[39m{arrayLevel} schema\u001b[33m=\u001b[39m{mergeSchema} parentKeys\u001b[33m=\u001b[39m{mergeSchema\u001b[33m.\u001b[39moriginKeys} \u001b[33mRootComponent\u001b[39m\u001b[33m=\u001b[39m{uiSchema\u001b[33m.\u001b[39mroot} uiSchema\u001b[33m=\u001b[39m{uiSchema\u001b[33m.\u001b[39mitems \u001b[33m||\u001b[39m [\u001b[32m\"*\"\u001b[39m]} globalOptions\u001b[33m=\u001b[39m{globalOptions}\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m  8 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mSchemaForm\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m  9 | \u001b[39m    }\n \u001b[90m 10 | \u001b[39m}\u001b[0m\n");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (14:16)\n\n\u001b[0m \u001b[90m 12 | \u001b[39m        \u001b[36mconst\u001b[39m { mergeSchema\u001b[33m,\u001b[39m schemaKey\u001b[33m,\u001b[39m globalOptions\u001b[33m,\u001b[39m schemaFormOptions\u001b[33m,\u001b[39m getCurrentState\u001b[33m,\u001b[39m \u001b[33mItemChildButtons\u001b[39m\u001b[33m,\u001b[39m arrayLevel \u001b[33m=\u001b[39m [] } \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m;\u001b[39m\n \u001b[90m 13 | \u001b[39m        \u001b[36mconst\u001b[39m { uiSchema\u001b[33m,\u001b[39m keys } \u001b[33m=\u001b[39m mergeSchema\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 14 | \u001b[39m        \u001b[36mreturn\u001b[39m (\u001b[33m<\u001b[39m\u001b[33mSchemaForm\u001b[39m key\u001b[33m=\u001b[39m{keys\u001b[33m.\u001b[39mjoin(\u001b[32m\".\"\u001b[39m) \u001b[33m+\u001b[39m idx} schema\u001b[33m=\u001b[39m{mergeSchema} getCurrentState\u001b[33m=\u001b[39m{getCurrentState} arrayIndex\u001b[33m=\u001b[39m{idx} arrayLevel\u001b[33m=\u001b[39m{arrayLevel\u001b[33m.\u001b[39mconcat([idx])} \u001b[33mItemButtons\u001b[39m\u001b[33m=\u001b[39m{() \u001b[33m=>\u001b[39m \u001b[33m<\u001b[39m\u001b[33mItemChildButtons\u001b[39m {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops} index\u001b[33m=\u001b[39m{idx}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m} parentKeys\u001b[33m=\u001b[39m{mergeSchema\u001b[33m.\u001b[39moriginKeys} \u001b[33mRootComponent\u001b[39m\u001b[33m=\u001b[39m{\u001b[36mnull\u001b[39m} schemaKey\u001b[33m=\u001b[39m{schemaKey} uiSchema\u001b[33m=\u001b[39m{uiSchema\u001b[33m.\u001b[39mitems} schemaFormOptions\u001b[33m=\u001b[39m{schemaFormOptions} globalOptions\u001b[33m=\u001b[39m{globalOptions}\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 15 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mSchemaForm\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 16 | \u001b[39m    }\n \u001b[90m 17 | \u001b[39m    \u001b[90m/**\u001b[39m\u001b[0m\n");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducer_form__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meta__ = __webpack_require__(16);


class SchemaFormCreate {
    /**
     * 创建一个schema form reducer
     * @param key             唯一标志
     * @param data            数据
     * @param curJjv          当前的ajv实例
     * @param schema          当前的json schema
     * @param updateState     更新state的方法
     */
    createOne(key, data, curJjv, schema, getOriginState, updateState) {
        let meta = new __WEBPACK_IMPORTED_MODULE_1__meta__["a" /* MetaData */]();
        let defaultValue = curJjv.validate(schema, data).catch(() => 1);
        let reducer = new __WEBPACK_IMPORTED_MODULE_0__reducer_form__["a" /* FormReducer */](updateState ? updateState({}, {
            data: data,
            meta: meta.data
        }) : {
            data: data,
            meta: meta.data
        }, meta, getOriginState, updateState);
        meta.actions = reducer.actions;
        SchemaFormCreate.metas[key] = meta;
        return reducer;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SchemaFormCreate;

SchemaFormCreate.metas = {};
/* harmony default export */ __webpack_exports__["b"] = (new SchemaFormCreate());

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_json_pointer__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_json_pointer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_json_pointer__);
var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * Meta的数据操作类
 */
class MetaData {
    constructor() {
        /**
         * 数据
         */
        this.data = { map: {}, meta: {} };
        /**
         * reducer的actions
         */
        this.actions = {};
        /**
         * 是否初始化
         */
        this.isInit = false;
    }
    /**
     * 初始化一个ajv
     * @param curAjv ajv的实例
     * @param key    ajv的schema的key
     */
    init(schemaFormOptions, key) {
        if (this.isInit) {
            return;
        }
        this.isInit = true;
        this.schemaFormOptions = schemaFormOptions;
        this.curKey = key;
    }
    /**
     * 验证所有的数据
     * @param data 数据
     */
    validateAll(data) {
        return __awaiter(this, void 0, void 0, function* () {
            // 设置所有的字段验证都通过
            for (let key in this.data.map) {
                if (this.data.map.hasOwnProperty(key)) {
                    let element = this.data.map[key];
                    element.isValid = true;
                    element.dirty = true;
                }
            }
            this.data.isLoading = true;
            this.data.isValid = false;
            try {
                let schema = this.schemaFormOptions.ajv.getSchema(this.curKey).schema;
                let validate = this.schemaFormOptions.ajv.compile(schema);
                // this.schemaFormOptions.ajv.removeSchema
                // 调用验证方法
                yield validate(data);
                this.data.isValid = true;
            } catch (err) {
                this.data.isValid = false;
                if (err.errors && err.errors.length) {
                    this.setErrors(err.errors);
                }
            }
            return this.data;
        });
    }
    /**
     * 设置表单的错误
     * @param errors 错误详情
     */
    setErrors(errors) {
        this.data.isValid = false;
        errors.forEach(error => {
            let keys = __WEBPACK_IMPORTED_MODULE_1_json_pointer___default.a.parse(error.dataPath);
            let meta = this.getMeta(keys);
            this.setMeta(keys, {
                dirty: true,
                isLoading: false,
                isValid: false,
                errors: [],
                errorText: this.schemaFormOptions.ajv.errorsText([error], { separator: ",", dataVar: "" })
            });
        });
    }
    /**
     * 获得当前字段的key
     * @param keys    当前字段的Keys
     */
    getKey(keys) {
        const key = __WEBPACK_IMPORTED_MODULE_1_json_pointer___default.a.compile(keys);
        let escapeKey = __WEBPACK_IMPORTED_MODULE_1_json_pointer___default.a.escape(key);
        return {
            schemaKey: keys.map(k => {
                if (!Number.isNaN(Number(k))) {
                    return "-";
                }
                return k;
            }).join("/"),
            normalKey: key,
            originEscapeKey: escapeKey,
            escapeKey: "/" + escapeKey
        };
    }
    /**
     * 设置meta信息
     * @param keys     keys
     * @param meta     meta数据
     * @param strick   废弃属性
     */
    setMeta(keys, meta, strick = true) {
        let { normalKey, escapeKey, originEscapeKey, schemaKey } = this.getKey(keys);
        let curUuid = this.getUuid({ normalKey, escapeKey, originEscapeKey, schemaKey });
        let curMeta = this.getCurMetaData(curUuid);
        if (curUuid !== escapeKey) {
            this.setCurMetaUuid(normalKey, curUuid);
        }
        this.setCurMetaData(curUuid, Object.assign({}, curMeta, meta));
    }
    /**
     * 获取当前keys的uuid
     * @param param0     各种keys
     */
    getUuid({ normalKey, escapeKey, originEscapeKey, schemaKey }) {
        let jMap = __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(this.data.map);
        let jMeta = __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(this.data.meta),
            curMeta,
            curUuid;
        if (this.schemaFormOptions.map.has(schemaKey)) {
            let schema = this.schemaFormOptions.map.get(schemaKey);
            if (["array", "object"].indexOf(schema.type) >= 0) {
                return escapeKey;
            }
        }
        if (jMap.has(escapeKey)) {
            return escapeKey;
        }
        // 如果meta中存在normalKey
        if (jMeta.has(normalKey)) {
            curMeta = jMeta.get(normalKey);
            curUuid = curMeta;
        }
        if (typeof curMeta !== "string" || !curMeta) {
            curUuid = "/" + __WEBPACK_IMPORTED_MODULE_1_json_pointer___default.a.escape(`/${__WEBPACK_IMPORTED_MODULE_0_uuid___default()()}`);
        }
        return curUuid;
    }
    /**
     * 返回meta数据
     * @param keys   keys
     * @param strick 是否严格模式
     */
    getMeta(keys, strick = true) {
        let { normalKey, escapeKey, originEscapeKey, schemaKey } = this.getKey(keys);
        let curUuid = this.getUuid({ normalKey, escapeKey, originEscapeKey, schemaKey });
        return this.getCurMetaData(curUuid);
    }
    /**
     * 更换两个meta数据位置
     * @param keys        keys
     * @param curIndex    当前的索引
     * @param switchIndex 更换的索引
     */
    switchMeta(keys, curIndex, switchIndex) {
        let { normalKey, escapeKey, schemaKey, originEscapeKey } = this.getKey(keys);
        if (!__WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(this.data.meta).has(normalKey)) {
            return;
        }
        let curMeta = __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(this.data.meta).get(normalKey);
        [curMeta[curIndex], curMeta[switchIndex]] = [curMeta[switchIndex], curMeta[curIndex]];
        __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(this.data.meta).set(normalKey, curMeta);
    }
    /**
     * 删除meta数据
     *  1. 遍历map，清除map中是${originEscapeKey}开头的key
     *  2. 清除meta中keys对应的数据，并且遍历meta值中的子元素，清除map中的key
     *  3. 删除map中当前keys对应的uuid
     * @param keys keys
     */
    removeMeta(keys) {
        let jMap = __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(this.data.map),
            jMeta = __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(this.data.meta);
        let { normalKey, escapeKey, originEscapeKey, schemaKey } = this.getKey(keys);
        let curUuid = this.getUuid({ normalKey, escapeKey, originEscapeKey, schemaKey });
        let regexp = new RegExp(`^${originEscapeKey}`, "ig");
        // 遍历map，清除map中是${originEscapeKey}开头的key
        for (let key in this.data.map) {
            if (this.data.map.hasOwnProperty(key)) {
                let mapKeys = this.getKey(__WEBPACK_IMPORTED_MODULE_1_json_pointer___default.a.parse(key));
                if (regexp.test(mapKeys.originEscapeKey)) {
                    jMap.remove(mapKeys.escapeKey);
                }
            }
        }
        // 清除meta中keys对应的数据，并且遍历meta值中的子元素，清除map中的key
        if (jMeta.has(normalKey) && jMeta.get(normalKey)) {
            let metaDict = __WEBPACK_IMPORTED_MODULE_1_json_pointer___default.a.dict(jMeta.get(normalKey));
            jMeta.remove(normalKey);
            // 遍历子元素，并且清除数据
            for (let key in metaDict) {
                if (metaDict.hasOwnProperty(key)) {
                    let element = metaDict[key];
                    if (jMap.has(element)) {
                        jMap.remove(element);
                    }
                }
            }
        }
        // 删除当前的uuid
        if (jMap.has(curUuid)) {
            jMap.remove(curUuid);
        }
    }
    /**
     * 返回meta数据
     * @param curUuid uuid
     */
    getCurMetaData(curUuid) {
        if (__WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(this.data.map).has(`${curUuid}`)) {
            return __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(this.data.map).get(`${curUuid}`);
        }
        return { isShow: true };
    }
    /**
     * 设置meta数据
     * @param curUuid uuid
     * @param meta    meta数据
     */
    setCurMetaData(curUuid, meta) {
        __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(this.data.map).set(`${curUuid}`, meta);
    }
    /**
     * 设置当前meta的uuid
     * @param key     key
     * @param curUuid uuid
     */
    setCurMetaUuid(key, curUuid) {
        let jMeta = __WEBPACK_IMPORTED_MODULE_1_json_pointer___default()(this.data.meta);
        jMeta.set(key, curUuid);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MetaData;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hocFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_merge__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__form_merge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__form_merge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_temp__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_temp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__item_temp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_field__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_field___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__item_field__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_theme__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__item_theme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_validate__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_validate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__item_validate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_array__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__item_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__item_make__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__item_make___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__item_make__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__item_condition__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__item_condition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__item_condition__);









const hocFactory = new __WEBPACK_IMPORTED_MODULE_0_fx_schema_form_core__["BaseFactory"]();
const hocs = {
    merge: __WEBPACK_IMPORTED_MODULE_1__form_merge__["MergeHoc"].bind(__WEBPACK_IMPORTED_MODULE_1__form_merge__["MergeHoc"], hocFactory),
    temp: __WEBPACK_IMPORTED_MODULE_2__item_temp__["TempHoc"].bind(__WEBPACK_IMPORTED_MODULE_2__item_temp__["TempHoc"], hocFactory),
    field: __WEBPACK_IMPORTED_MODULE_3__item_field__["FieldHoc"].bind(__WEBPACK_IMPORTED_MODULE_3__item_field__["FieldHoc"], hocFactory),
    theme: __WEBPACK_IMPORTED_MODULE_4__item_theme__["ThemeHoc"].bind(__WEBPACK_IMPORTED_MODULE_4__item_theme__["ThemeHoc"], hocFactory),
    validate: __WEBPACK_IMPORTED_MODULE_5__item_validate__["ValidateHoc"].bind(__WEBPACK_IMPORTED_MODULE_5__item_validate__["ValidateHoc"], hocFactory),
    array: __WEBPACK_IMPORTED_MODULE_6__item_array__["ArrayHoc"].bind(__WEBPACK_IMPORTED_MODULE_6__item_array__["ArrayHoc"], hocFactory),
    make: __WEBPACK_IMPORTED_MODULE_7__item_make__["MakeHoc"].bind(__WEBPACK_IMPORTED_MODULE_7__item_make__["MakeHoc"], hocFactory),
    condition: __WEBPACK_IMPORTED_MODULE_8__item_condition__["ConditionHoc"].bind(__WEBPACK_IMPORTED_MODULE_8__item_condition__["ConditionHoc"], hocFactory)
};
for (let key in hocs) {
    if (hocs.hasOwnProperty(key)) {
        let hoc = hocs[key];
        hocFactory.add(key, hoc);
        hocFactory.lock(key);
    }
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (61:20)\n\n\u001b[0m \u001b[90m 59 | \u001b[39m            \u001b[90m// 合并schema和uiSchema\u001b[39m\n \u001b[90m 60 | \u001b[39m            mergeSchemaList \u001b[33m=\u001b[39m schemaMerge\u001b[33m.\u001b[39mmerge(schemaKey\u001b[33m,\u001b[39m mergeSchema\u001b[33m,\u001b[39m uiSchema\u001b[33m,\u001b[39m schemaFormOptions)\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 61 | \u001b[39m            \u001b[36mreturn\u001b[39m (\u001b[33m<\u001b[39m\u001b[33mComponent\u001b[39m schemaFormOptions\u001b[33m=\u001b[39m{schemaFormOptions \u001b[33m||\u001b[39m {}} schemaKey\u001b[33m=\u001b[39m{schemaKey} mergeSchemaList\u001b[33m=\u001b[39m{mergeSchemaList} {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops}\u001b[33m>\u001b[39m\n \u001b[90m    | \u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 62 | \u001b[39m                \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mComponent\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 63 | \u001b[39m        }\n \u001b[90m 64 | \u001b[39m    }\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (43:23)\n\n\u001b[0m \u001b[90m 41 | \u001b[39m            \u001b[36mreturn\u001b[39m \u001b[33mTempComponents\u001b[39m\u001b[33m.\u001b[39mreduce((prev\u001b[33m,\u001b[39m { key\u001b[33m,\u001b[39m \u001b[33mTemp\u001b[39m }) \u001b[33m=>\u001b[39m {\n \u001b[90m 42 | \u001b[39m                let \u001b[33mTempWithHoc\u001b[39m \u001b[33m=\u001b[39m metaConnect(\u001b[33mTemp\u001b[39m)\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 43 | \u001b[39m                \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mTempWithHoc\u001b[39m globalOptions\u001b[33m=\u001b[39m{globalOptions} tempKey\u001b[33m=\u001b[39m{key} uiSchemaOptions\u001b[33m=\u001b[39m{uiSchemaOptions} key\u001b[33m=\u001b[39m{keys\u001b[33m.\u001b[39mjoin(\u001b[32m\".\"\u001b[39m) \u001b[33m+\u001b[39m key \u001b[33m+\u001b[39m index\u001b[33m++\u001b[39m} {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops} children\u001b[33m=\u001b[39m{prev}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 44 | \u001b[39m            }\u001b[33m,\u001b[39m \u001b[33m<\u001b[39m\u001b[33mComponentWithHoc\u001b[39m key\u001b[33m=\u001b[39m{keys\u001b[33m.\u001b[39mjoin(\u001b[32m\".\"\u001b[39m)} uiSchemaOptions\u001b[33m=\u001b[39m{uiSchemaOptions} {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 45 | \u001b[39m        }\n \u001b[90m 46 | \u001b[39m        \u001b[90m/**\u001b[39m\u001b[0m\n");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (43:19)\n\n\u001b[0m \u001b[90m 41 | \u001b[39m                \u001b[90m// console.warn(`找不到widget：${uiSchema.widget || mergeSchema.type}`, mergeSchema);\u001b[39m\n \u001b[90m 42 | \u001b[39m            }\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 43 | \u001b[39m            \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mComponent\u001b[39m {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops} \u001b[33mFieldComponent\u001b[39m\u001b[33m=\u001b[39m{(\u001b[33mFieldComponent\u001b[39m)} \u001b[33mWidgetComponent\u001b[39m\u001b[33m=\u001b[39m{\u001b[33mWidgetComponent\u001b[39m}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 44 | \u001b[39m        }\n \u001b[90m 45 | \u001b[39m    }\n \u001b[90m 46 | \u001b[39m    \u001b[36mreturn\u001b[39m \u001b[33mFieldComponentHoc\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (22:19)\n\n\u001b[0m \u001b[90m 20 | \u001b[39m                \u001b[36mthrow\u001b[39m \u001b[36mnew\u001b[39m \u001b[33mError\u001b[39m(\u001b[32m`没有找到${uiSchema.theme || \"default\"}的样式！`\u001b[39m)\u001b[33m;\u001b[39m\n \u001b[90m 21 | \u001b[39m            }\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 22 | \u001b[39m            \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mComponent\u001b[39m currentTheme\u001b[33m=\u001b[39m{theme} {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 23 | \u001b[39m        }\n \u001b[90m 24 | \u001b[39m    }\n \u001b[90m 25 | \u001b[39m    \u001b[36mreturn\u001b[39m \u001b[33mThemeComponentHoc\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (68:19)\n\n\u001b[0m \u001b[90m 66 | \u001b[39m    let \u001b[33mValidateComponentHoc\u001b[39m \u001b[33m=\u001b[39m \u001b[36mclass\u001b[39m \u001b[33mValidateComponentHoc\u001b[39m \u001b[36mextends\u001b[39m \u001b[33mReact\u001b[39m\u001b[33m.\u001b[39m\u001b[33mPureComponent\u001b[39m {\n \u001b[90m 67 | \u001b[39m        render() {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 68 | \u001b[39m            \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mComponent\u001b[39m {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 69 | \u001b[39m        }\n \u001b[90m 70 | \u001b[39m    }\u001b[33m;\u001b[39m\n \u001b[90m 71 | \u001b[39m    \u001b[33mValidateComponentHoc\u001b[39m \u001b[33m=\u001b[39m __decorate([\u001b[0m\n");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (95:23)\n\n\u001b[0m \u001b[90m 93 | \u001b[39m            }\n \u001b[90m 94 | \u001b[39m            \u001b[36mif\u001b[39m (type \u001b[33m===\u001b[39m \u001b[32m\"array\"\u001b[39m) {\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 95 | \u001b[39m                \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mComponent\u001b[39m {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops} \u001b[33mItemButtons\u001b[39m\u001b[33m=\u001b[39m{\u001b[33mItemButtonsWithHoc\u001b[39m \u001b[33m?\u001b[39m () \u001b[33m=>\u001b[39m \u001b[33m<\u001b[39m\u001b[33mItemButtonsWithHoc\u001b[39m {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops}\u001b[35m/> : () => <span /\u001b[39m\u001b[33m>\u001b[39m} \u001b[33mItemChildButtons\u001b[39m\u001b[33m=\u001b[39m{\u001b[33mItemChildButtonsWithHoc\u001b[39m \u001b[33m?\u001b[39m \u001b[33mItemChildButtonsWithHoc\u001b[39m \u001b[33m:\u001b[39m () \u001b[33m=>\u001b[39m \u001b[33m<\u001b[39m\u001b[33mspan\u001b[39m \u001b[35m/>}/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                       \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 96 | \u001b[39m            }\n \u001b[90m 97 | \u001b[39m            \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mComponent\u001b[39m {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 98 | \u001b[39m        }\u001b[0m\n");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (28:19)\n\n\u001b[0m \u001b[90m 26 | \u001b[39m                globalOptions[\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mfieldKey] \u001b[33m||\u001b[39m [\u001b[32m\"theme\"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\"field\"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\"validate\"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\"array\"\u001b[39m\u001b[33m,\u001b[39m \u001b[32m\"temp\"\u001b[39m]\u001b[33m;\u001b[39m\n \u001b[90m 27 | \u001b[39m            let \u001b[33mComponentWithHocs\u001b[39m \u001b[33m=\u001b[39m compose(\u001b[33m...\u001b[39mhocs\u001b[33m.\u001b[39mmap(hoc \u001b[33m=>\u001b[39m hocFactory\u001b[33m.\u001b[39mget(hoc)))(\u001b[33mComponent\u001b[39m)\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 28 | \u001b[39m            \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mComponentWithHocs\u001b[39m getHocOptions\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mgetHocOptions\u001b[33m.\u001b[39mbind(\u001b[36mthis\u001b[39m)} {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 29 | \u001b[39m        }\n \u001b[90m 30 | \u001b[39m        getHocOptions() {\n \u001b[90m 31 | \u001b[39m            \u001b[36mconst\u001b[39m { mergeSchema\u001b[33m,\u001b[39m globalOptions } \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops\u001b[33m;\u001b[39m\u001b[0m\n");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (48:19)\n\n\u001b[0m \u001b[90m 46 | \u001b[39m                \u001b[36mreturn\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 47 | \u001b[39m            }\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 48 | \u001b[39m            \u001b[36mreturn\u001b[39m \u001b[33m<\u001b[39m\u001b[33mComponent\u001b[39m {\u001b[33m...\u001b[39m\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mprops}\u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m                   \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 49 | \u001b[39m        }\n \u001b[90m 50 | \u001b[39m    }\u001b[33m;\u001b[39m\n \u001b[90m 51 | \u001b[39m    \u001b[33mConditionComponentHoc\u001b[39m \u001b[33m=\u001b[39m __decorate([\u001b[0m\n");

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map