import { createAction, createReducer } from "redux-act";
import jpp from "json-pointer";
import cloneDeep from "lodash.clonedeep";
var FormReducer = /** @class */ (function () {
    function FormReducer(initialState) {
        this.initialState = initialState;
        /**
         * 单个元素的值变化时候调用
         */
        this.updateItem = createAction("更新表单值");
        /**
         * 显示/隐藏元素
         */
        this.toggleItem = createAction("显示/隐藏元素");
        /**
         * 删除元素
         */
        this.removeItem = createAction("删除元素");
        /**
         * 添加元素
         */
        this.addItem = createAction("添加元素");
        /**
         * 元素移位
         */
        this.switchItem = createAction("元素移位");
        /**
         * 初始化元素的meta信息
         */
        this.updateItemMeta = createAction("更新元素的meta信息");
        /**
         * 更改meta的状态
         */
        this.updateMetaState = createAction("更改meta的状态");
        /**
         * 更改meta的状态
         */
        this.updateData = createAction("更改data的值");
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
            return createReducer((_a = {},
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
    FormReducer.prototype.updateDataHandle = function (state, data) {
        // let { originData } = this.getOrigin(state);
        // jpp(state).set("/data", Object.assign({}, data, originData || {}));
        // state.data = Object.assign({}, data, state.data || {});
        // state.data = data;
        return Object.assign({}, state, { data: data });
    };
    /**
    * 获取当前state的信息
    * @param state 当前的state
    */
    FormReducer.prototype.getOrigin = function (state) {
        var originData = cloneDeep(state.data);
        var originMeta = cloneDeep(state.meta);
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
            originMeta.data.isLoading = isLoading;
        }
        if (isValid !== undefined) {
            originMeta.data.isValid = isValid;
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
        var _b = this.getOrigin(state), originData = _b.originData, originMeta = _b.originMeta;
        var normalKey = originMeta.getKey(keys).normalKey;
        jpp(originData).set(normalKey, data);
        originMeta.setMeta(keys, meta);
        return Object.assign({}, state, { data: originData, meta: originMeta });
    };
    FormReducer.prototype.updateMetaHandle = function (state, _a) {
        var keys = _a.keys, meta = _a.meta;
        var _b = this.getOrigin(state), originData = _b.originData, originMeta = _b.originMeta;
        var normalKey = originMeta.getKey(keys).normalKey;
        var curMeta = originMeta.getMeta(keys, false) || {};
        originMeta.setMeta(keys, meta);
        return Object.assign({}, state, { meta: originMeta });
    };
    FormReducer.prototype.toggleItemHandle = function (state, _a) {
        var keys = _a.keys;
        var originMeta = this.getOrigin(state).originMeta;
        var normalKey = originMeta.getKey(keys).normalKey;
        var curMeta = originMeta.getMeta(keys, false) || {};
        originMeta.setMeta(keys, Object.assign({}, curMeta, { isShow: curMeta.isShow !== undefined ? !curMeta.isShow : false }), false);
        return Object.assign({}, state, { meta: originMeta });
    };
    FormReducer.prototype.addItemHandle = function (state, _a) {
        var keys = _a.keys, data = _a.data;
        var _b = this.getOrigin(state), originData = _b.originData, originMeta = _b.originMeta;
        var normalKey = originMeta.getKey(keys).normalKey;
        var curData = jpp(originData).has(normalKey) ? jpp(originData).get(normalKey) : [];
        jpp(originData).set(normalKey, curData.concat([data]));
        return Object.assign({}, state, { data: originData });
    };
    FormReducer.prototype.removeItemHandle = function (state, _a) {
        var keys = _a.keys, index = _a.index;
        var _b = this.getOrigin(state), originData = _b.originData, originMeta = _b.originMeta;
        var normalKey = originMeta.getKey(keys.concat([index.toString()])).normalKey;
        if (originData && jpp(originData).has(normalKey)) {
            jpp(originData).remove(normalKey);
        }
        originMeta.removeMeta(keys.concat([index.toString()]));
        return Object.assign({}, state, { data: originData, meta: originMeta });
    };
    FormReducer.prototype.switchItemHandle = function (state, _a) {
        var keys = _a.keys, curIndex = _a.curIndex, switchIndex = _a.switchIndex;
        var _b = this.getOrigin(state), originData = _b.originData, originMeta = _b.originMeta;
        var normalKey = originMeta.getKey(keys).normalKey;
        var curData = jpp(originData).get(normalKey);
        _c = [curData[switchIndex], curData[curIndex]], curData[curIndex] = _c[0], curData[switchIndex] = _c[1];
        jpp(originData).set(normalKey, curData);
        originMeta.switchMeta(keys, curIndex, switchIndex);
        return Object.assign({}, state, { data: originData, meta: originMeta });
        var _c;
    };
    return FormReducer;
}());
export { FormReducer };
//# sourceMappingURL=form.js.map