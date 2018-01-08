import { createAction, createReducer } from "redux-act";
export class FormReducer {
    constructor(initialState, meta, props, con) {
        this.initialState = initialState;
        this.meta = meta;
        this.props = props;
        this.con = con;
        this.updateItem = createAction("更新表单值");
        this.toggleItem = createAction("显示/隐藏元素");
        this.removeItem = createAction("删除元素");
        this.addItem = createAction("添加元素");
        this.switchItem = createAction("元素移位");
        this.updateItemMeta = createAction("更新元素的meta信息");
        this.updateMetaState = createAction("更改meta的状态");
        this.updateData = createAction("更改data的值");
        this.removeItemMap = createAction("删除元素的map以及meta数据");
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
            updateData: this.updateData,
            removeItemMap: this.removeItemMap
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
            [this.removeItemMap]: this.removeItemMapHandle.bind(this)
        }, this.initialState);
    }
    updateDataHandle(state, data) {
        return this.con.updateState(state, this.props, { data, meta: { map: {}, meta: {} } });
    }
    updateMetaStateHandle(state, { isLoading, isValid, meta }) {
        let originMeta = this.con.getAllMeta(state, this.props);
        if (meta) {
            originMeta = meta;
        }
        if (isLoading !== undefined) {
            originMeta.isLoading = isLoading;
        }
        if (isValid !== undefined) {
            originMeta.isValid = isValid;
        }
        return this.con.mergeData(state, this.props, { meta: originMeta });
    }
    updateItemHandle(state, { keys, data, meta }) {
        let originData = this.con.updateItem(state, this.props, data, this.meta.getKey(keys));
        if (meta) {
            this.meta.data = this.con.getAllMeta(state, this.props);
            this.meta.setMeta(keys, meta);
        }
        return this.con.mergeData(state, this.props, { data: originData, meta: this.meta.data });
    }
    updateMetaHandle(state, { keys, meta, data }) {
        let { normalKey } = this.meta.getKey(keys);
        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.setMeta(keys, meta);
        return this.con.mergeData(state, this.props, { meta: this.meta.data });
    }
    toggleItemHandle(state, { keys }) {
        let { normalKey } = this.meta.getKey(keys);
        let curMeta = this.meta.getMeta(keys, false) || {};
        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.setMeta(keys, Object.assign({}, curMeta, { isShow: (curMeta.isShow === undefined ? false : !curMeta.isShow) }));
        return this.con.mergeData(state, this.props, { meta: this.meta.data });
    }
    addItemHandle(state, { keys, data }) {
        let originData = this.con.addItem(state, Object.assign({}, this.props, {
            mergeSchema: {
                keys
            }
        }), data, this.meta.getKey(keys));
        return this.con.mergeData(state, this.props, { data: originData });
    }
    removeItemHandle(state, { keys, index }) {
        let originData = this.con.removeItem(state, Object.assign({}, this.props, {
            mergeSchema: {
                keys
            }
        }), index, this.meta.getKey(keys));
        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.removeMeta([...keys, index.toString()]);
        return this.con.mergeData(state, this.props, { data: originData, meta: this.meta.data });
    }
    switchItemHandle(state, { keys, curIndex, switchIndex }) {
        if (this.con.canSwitch(state, Object.assign({}, this.props, {
            mergeSchema: {
                keys
            }
        }), curIndex, switchIndex, this.meta.getKey(keys))) {
            let originData = this.con.switchItem(state, Object.assign({}, this.props, {
                mergeSchema: {
                    keys
                }
            }), curIndex, switchIndex, this.meta.getKey(keys));
            this.meta.data = this.con.getAllMeta(state, this.props);
            this.meta.switchMeta(keys, curIndex, switchIndex);
            return this.con.mergeData(state, this.props, { data: originData, meta: this.meta.data });
        }
        return state;
    }
    removeItemMapHandle(state, { keys }) {
        let curMeta = this.meta.getMeta(keys, false) || {};
        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.removeMeta(keys);
        return this.con.mergeData(state, this.props, { meta: this.meta.data });
    }
}
//# sourceMappingURL=form.js.map