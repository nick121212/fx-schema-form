"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_act_1 = require("redux-act");
var json_pointer_1 = require("json-pointer");
var lodash_clonedeep_1 = require("lodash.clonedeep");
var FormReducer = /** @class */ (function () {
    /**
     * 构造
     * @param initialState 初始化状态
     * @param meta         当前的meta类
     * @param updateState  更改数据的方法
     */
    function FormReducer(initialState, meta, getOriginState, updateState) {
        this.initialState = initialState;
        this.meta = meta;
        this.getOriginState = getOriginState;
        this.updateState = updateState;
        /**
         * 单个元素的值变化时候调用
         */
        this.updateItem = redux_act_1.createAction("更新表单值");
        /**
         * 显示/隐藏元素
         */
        this.toggleItem = redux_act_1.createAction("显示/隐藏元素");
        /**
         * 删除元素
         */
        this.removeItem = redux_act_1.createAction("删除元素");
        /**
         * 添加元素
         */
        this.addItem = redux_act_1.createAction("添加元素");
        /**
         * 元素移位
         */
        this.switchItem = redux_act_1.createAction("元素移位");
        /**
         * 初始化元素的meta信息
         */
        this.updateItemMeta = redux_act_1.createAction("更新元素的meta信息");
        /**
         * 更改meta的状态
         */
        this.updateMetaState = redux_act_1.createAction("更改meta的状态");
        /**
         * 更改meta的状态
         */
        this.updateData = redux_act_1.createAction("更改data的值");
    }
    Object.defineProperty(FormReducer.prototype, "actions", {
        /**
         * 获取当前的actions
         */
        get: function () {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormReducer.prototype, "reducer", {
        /**
         * 返回当前的reducer
         */
        get: function () {
            return redux_act_1.createReducer((_a = {},
                _a[this.updateItem] = this.updateItemHandle.bind(this),
                _a[this.toggleItem] = this.toggleItemHandle.bind(this),
                _a[this.addItem] = this.addItemHandle.bind(this),
                _a[this.removeItem] = this.removeItemHandle.bind(this),
                _a[this.switchItem] = this.switchItemHandle.bind(this),
                _a[this.updateMetaState] = this.updateMetaStateHandle.bind(this),
                _a[this.updateItemMeta] = this.updateMetaHandle.bind(this),
                _a[this.updateData] = this.updateDataHandle.bind(this),
                _a), this.initialState);
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 更新全部数据
     * @param state state
     * @param data  data
     */
    FormReducer.prototype.updateDataHandle = function (state, data) {
        if (this.updateState) {
            return this.updateState(state, { data: data, meta: { map: {}, meta: {} } });
        }
        return Object.assign({}, state, { data: data, meta: { map: {}, meta: {} } });
    };
    /**
    * 获取当前state的信息
    * @param state 当前的state
    */
    FormReducer.prototype.getOrigin = function (state) {
        if (this.getOriginState) {
            return this.getOriginState(state);
        }
        var originData = lodash_clonedeep_1.default(state.data);
        var originMeta = lodash_clonedeep_1.default(state.meta);
        return { originData: originData, originMeta: originMeta };
    };
    /**
     * 更改meta的状态
     *  1. 如果存在meta，则更新meta
     * @param state 当前的state
     */
    FormReducer.prototype.updateMetaStateHandle = function (state, _a) {
        var isLoading = _a.isLoading, isValid = _a.isValid, meta = _a.meta;
        var originMeta = this.getOrigin(state).originMeta;
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
    };
    /**
     * 更新数据
     * @param state  state
     * @param param1 data
     */
    FormReducer.prototype.updateItemHandle = function (state, _a) {
        var keys = _a.keys, data = _a.data, meta = _a.meta;
        var originData = this.getOrigin(state).originData;
        var normalKey = this.meta.getKey(keys).normalKey;
        json_pointer_1.default(originData).set(normalKey, data);
        this.meta.setMeta(keys, meta);
        if (this.updateState) {
            return this.updateState(state, { data: originData, meta: this.meta.data });
        }
        return Object.assign({}, state, { data: originData, meta: this.meta.data });
    };
    FormReducer.prototype.updateMetaHandle = function (state, _a) {
        var keys = _a.keys, meta = _a.meta;
        var originData = this.getOrigin(state).originData;
        var normalKey = this.meta.getKey(keys).normalKey;
        var curMeta = this.meta.getMeta(keys, false) || {};
        this.meta.setMeta(keys, meta);
        if (this.updateState) {
            return this.updateState(state, { meta: this.meta.data });
        }
        return Object.assign({}, state, { meta: this.meta.data });
    };
    FormReducer.prototype.toggleItemHandle = function (state, _a) {
        var keys = _a.keys;
        var normalKey = this.meta.getKey(keys).normalKey;
        var curMeta = this.meta.getMeta(keys, false) || {};
        this.meta.setMeta(keys, Object.assign({}, curMeta, { isShow: curMeta.isShow !== undefined ? !curMeta.isShow : false }), false);
        if (this.updateState) {
            return this.updateState(state, { meta: this.meta.data });
        }
        return Object.assign({}, state, { meta: this.meta.data });
    };
    FormReducer.prototype.addItemHandle = function (state, _a) {
        var keys = _a.keys, data = _a.data;
        var originData = this.getOrigin(state).originData;
        var normalKey = this.meta.getKey(keys).normalKey;
        var curData = json_pointer_1.default(originData).has(normalKey) ? json_pointer_1.default(originData).get(normalKey) : [];
        json_pointer_1.default(originData).set(normalKey, curData.concat([data]));
        if (this.updateState) {
            return this.updateState(state, { data: originData });
        }
        return Object.assign({}, state, { data: originData });
    };
    FormReducer.prototype.removeItemHandle = function (state, _a) {
        var keys = _a.keys, index = _a.index;
        var originData = this.getOrigin(state).originData;
        var normalKey = this.meta.getKey(keys.concat([index.toString()])).normalKey;
        if (originData && json_pointer_1.default(originData).has(normalKey)) {
            json_pointer_1.default(originData).remove(normalKey);
        }
        this.meta.removeMeta(keys.concat([index.toString()]));
        if (this.updateState) {
            return this.updateState(state, { data: originData, meta: this.meta.data });
        }
        return Object.assign({}, state, { data: originData, meta: this.meta.data });
    };
    FormReducer.prototype.switchItemHandle = function (state, _a) {
        var keys = _a.keys, curIndex = _a.curIndex, switchIndex = _a.switchIndex;
        var originData = this.getOrigin(state).originData;
        var normalKey = this.meta.getKey(keys).normalKey;
        var curData = json_pointer_1.default(originData).get(normalKey);
        _b = [curData[switchIndex], curData[curIndex]], curData[curIndex] = _b[0], curData[switchIndex] = _b[1];
        json_pointer_1.default(originData).set(normalKey, curData);
        this.meta.switchMeta(keys, curIndex, switchIndex);
        if (this.updateState) {
            return this.updateState(state, { data: originData, meta: this.meta.data });
        }
        return Object.assign({}, state, { data: originData, meta: this.meta.data });
        var _b;
    };
    return FormReducer;
}());
exports.FormReducer = FormReducer;
//# sourceMappingURL=form.js.map