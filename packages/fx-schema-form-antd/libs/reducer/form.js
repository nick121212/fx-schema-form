import { createAction, createReducer } from "redux-act";
import jpp from "json-pointer";
import cloneDeep from "lodash.clonedeep";
export class FormReducer {
    constructor(initialState) {
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
        // let { originData } = this.getOrigin(state);
        // jpp(state).set("/data", Object.assign({}, data, originData || {}));
        // state.data = Object.assign({}, data, state.data || {});
        // state.data = data;
        return Object.assign({}, state, { data });
    }
    /**
    * 获取当前state的信息
    * @param state 当前的state
    */
    getOrigin(state) {
        let originData = cloneDeep(state.data);
        let originMeta = cloneDeep(state.meta);
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
            originMeta.data.isLoading = isLoading;
        }
        if (isValid !== undefined) {
            originMeta.data.isValid = isValid;
        }
        return Object.assign({}, state, { meta: originMeta });
    }
    /**
     * 更新数据
     * @param state  state
     * @param param1 data
     */
    updateItemHandle(state, { keys, data, meta }) {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey(keys);
        jpp(originData).set(normalKey, data);
        originMeta.setMeta(keys, meta);
        return Object.assign({}, state, { data: originData, meta: originMeta });
    }
    updateMetaHandle(state, { keys, meta }) {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey(keys);
        let curMeta = originMeta.getMeta(keys, false) || {};
        originMeta.setMeta(keys, meta);
        return Object.assign({}, state, { meta: originMeta });
    }
    toggleItemHandle(state, { keys }) {
        let { originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey(keys);
        let curMeta = originMeta.getMeta(keys, false) || {};
        originMeta.setMeta(keys, Object.assign({}, curMeta, { isShow: curMeta.isShow !== undefined ? !curMeta.isShow : false }), false);
        return Object.assign({}, state, { meta: originMeta });
    }
    addItemHandle(state, { keys, data }) {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey(keys);
        let curData = jpp(originData).has(normalKey) ? jpp(originData).get(normalKey) : [];
        jpp(originData).set(normalKey, [...curData, data]);
        return Object.assign({}, state, { data: originData });
    }
    removeItemHandle(state, { keys, index }) {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey([...keys, index.toString()]);
        if (originData && jpp(originData).has(normalKey)) {
            jpp(originData).remove(normalKey);
        }
        originMeta.removeMeta([...keys, index.toString()]);
        return Object.assign({}, state, { data: originData, meta: originMeta });
    }
    switchItemHandle(state, { keys, curIndex, switchIndex }) {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey(keys);
        let curData = jpp(originData).get(normalKey);
        [curData[curIndex], curData[switchIndex]] = [curData[switchIndex], curData[curIndex]];
        jpp(originData).set(normalKey, curData);
        originMeta.switchMeta(keys, curIndex, switchIndex);
        return Object.assign({}, state, { data: originData, meta: originMeta });
    }
}
//# sourceMappingURL=form.js.map