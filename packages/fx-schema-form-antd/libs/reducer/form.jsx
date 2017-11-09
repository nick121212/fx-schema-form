import { createAction, createReducer } from "redux-act";
import jpp from "json-pointer";
import cloneDeep from "lodash.clonedeep";
export class FormReducer {
    constructor(initialState, meta, getOriginState, updateState) {
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
    get reducer() {
        return createReducer({
            [this.updateItem]: this.updateItemHandle.bind(this),
            [this.toggleItem]: this.toggleItemHandle.bind(this),
            [this.addItem]: this.addItemHandle.bind(this),
            [this.removeItem]: this.removeItemHandle.bind(this),
            [this.switchItem]: this.switchItemHandle.bind(this),
            [this.updateMetaState]: this.updateMetaStateHandle.bind(this),
            [this.updateItemMeta]: this.updateMetaHandle.bind(this),
            [this.updateData]: this.updateDataHandle.bind(this),
        }, this.initialState);
    }
    updateDataHandle(state, data) {
        if (this.updateState) {
            return this.updateState(state, { data, meta: { map: {}, meta: {} } });
        }
        return Object.assign({}, state, { data, meta: { map: {}, meta: {} } });
    }
    getOrigin(state) {
        if (this.getOriginState) {
            return this.getOriginState(state);
        }
        let originData = cloneDeep(state.data);
        let originMeta = cloneDeep(state.meta);
        return { originData, originMeta };
    }
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
    updateItemHandle(state, { keys, data, meta }) {
        let { originData } = this.getOrigin(state);
        let { normalKey } = this.meta.getKey(keys);
        jpp(originData).set(normalKey, data);
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
        let curData = jpp(originData).has(normalKey) ? jpp(originData).get(normalKey) : [];
        jpp(originData).set(normalKey, [...curData, data]);
        if (this.updateState) {
            return this.updateState(state, { data: originData });
        }
        return Object.assign({}, state, { data: originData });
    }
    removeItemHandle(state, { keys, index }) {
        let { originData } = this.getOrigin(state);
        let { normalKey } = this.meta.getKey([...keys, index.toString()]);
        if (originData && jpp(originData).has(normalKey)) {
            jpp(originData).remove(normalKey);
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
        let curData = jpp(originData).get(normalKey);
        [curData[curIndex], curData[switchIndex]] = [curData[switchIndex], curData[curIndex]];
        jpp(originData).set(normalKey, curData);
        this.meta.switchMeta(keys, curIndex, switchIndex);
        if (this.updateState) {
            return this.updateState(state, { data: originData, meta: this.meta.data });
        }
        return Object.assign({}, state, { data: originData, meta: this.meta.data });
    }
}
//# sourceMappingURL=form.jsx.map