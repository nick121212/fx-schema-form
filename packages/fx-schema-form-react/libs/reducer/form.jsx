import { createAction, createReducer } from "redux-act";
import jpp from "json-pointer";
import cloneDeep from "lodash.clonedeep";
var FormReducer = (function () {
    function FormReducer(initialState, meta, getOriginState, updateState) {
        this.initialState = initialState;
        this.meta = meta;
        this.getOriginState = getOriginState;
        this.updateState = updateState;
        this.updateItem = createAction("更新表单值");
        this.toggleItem = createAction("显示/隐藏元素");
        this.removeItem = createAction("删除元素");
        this.addItem = createAction("添加元素");
        this.switchItem = createAction("元素移位");
        this.updateItemMeta = createAction("更新元素的meta信息");
        this.updateMetaState = createAction("更改meta的状态");
        this.updateData = createAction("更改data的值");
    }
    Object.defineProperty(FormReducer.prototype, "actions", {
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
        if (this.updateState) {
            return this.updateState(state, { data: data, meta: { map: {}, meta: {} } });
        }
        return Object.assign({}, state, { data: data, meta: { map: {}, meta: {} } });
    };
    FormReducer.prototype.getOrigin = function (state) {
        if (this.getOriginState) {
            return this.getOriginState(state);
        }
        var originData = cloneDeep(state.data);
        var originMeta = cloneDeep(state.meta);
        return { originData: originData, originMeta: originMeta };
    };
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
    FormReducer.prototype.updateItemHandle = function (state, _a) {
        var keys = _a.keys, data = _a.data, meta = _a.meta;
        var originData = this.getOrigin(state).originData;
        var normalKey = this.meta.getKey(keys).normalKey;
        jpp(originData).set(normalKey, data);
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
        var curData = jpp(originData).has(normalKey) ? jpp(originData).get(normalKey) : [];
        jpp(originData).set(normalKey, curData.concat([data]));
        if (this.updateState) {
            return this.updateState(state, { data: originData });
        }
        return Object.assign({}, state, { data: originData });
    };
    FormReducer.prototype.removeItemHandle = function (state, _a) {
        var keys = _a.keys, index = _a.index;
        var originData = this.getOrigin(state).originData;
        var normalKey = this.meta.getKey(keys.concat([index.toString()])).normalKey;
        if (originData && jpp(originData).has(normalKey)) {
            jpp(originData).remove(normalKey);
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
        var curData = jpp(originData).get(normalKey);
        _b = [curData[switchIndex], curData[curIndex]], curData[curIndex] = _b[0], curData[switchIndex] = _b[1];
        jpp(originData).set(normalKey, curData);
        this.meta.switchMeta(keys, curIndex, switchIndex);
        if (this.updateState) {
            return this.updateState(state, { data: originData, meta: this.meta.data });
        }
        return Object.assign({}, state, { data: originData, meta: this.meta.data });
        var _b;
    };
    return FormReducer;
}());
export { FormReducer };
//# sourceMappingURL=form.jsx.map