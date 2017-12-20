import { createAction, createReducer } from "redux-act";
var FormReducer = (function () {
    function FormReducer(initialState, meta, props, con) {
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
                updateData: this.updateData,
                removeItemMap: this.removeItemMap
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
                _a[this.removeItemMap] = this.removeItemMapHandle.bind(this),
                _a), this.initialState);
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    FormReducer.prototype.updateDataHandle = function (state, data) {
        return this.con.updateState(state, this.props, { data: data, meta: { map: {}, meta: {} } });
    };
    FormReducer.prototype.updateMetaStateHandle = function (state, _a) {
        var isLoading = _a.isLoading, isValid = _a.isValid, meta = _a.meta;
        var originMeta = this.con.getAllMeta(state, this.props);
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
    };
    FormReducer.prototype.updateItemHandle = function (state, _a) {
        var keys = _a.keys, data = _a.data, meta = _a.meta;
        var originData = this.con.updateItem(state, this.props, data, this.meta.getKey(keys));
        if (meta) {
            this.meta.data = this.con.getAllMeta(state, this.props);
            this.meta.setMeta(keys, meta);
        }
        return this.con.mergeData(state, this.props, { data: originData, meta: this.meta.data });
    };
    FormReducer.prototype.updateMetaHandle = function (state, _a) {
        var keys = _a.keys, meta = _a.meta, data = _a.data;
        var normalKey = this.meta.getKey(keys).normalKey;
        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.setMeta(keys, meta);
        return this.con.mergeData(state, this.props, { meta: this.meta.data });
    };
    FormReducer.prototype.toggleItemHandle = function (state, _a) {
        var keys = _a.keys;
        var normalKey = this.meta.getKey(keys).normalKey;
        var curMeta = this.meta.getMeta(keys, false) || {};
        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.setMeta(keys, Object.assign({}, curMeta, { isShow: curMeta.isShow !== undefined ? !curMeta.isShow : true }), false);
        return this.con.mergeData(state, this.props, { meta: this.meta.data });
    };
    FormReducer.prototype.addItemHandle = function (state, _a) {
        var keys = _a.keys, data = _a.data;
        var originData = this.con.addItem(state, Object.assign({}, this.props, {
            mergeSchema: {
                keys: keys
            }
        }), data, this.meta.getKey(keys));
        return this.con.mergeData(state, this.props, { data: originData });
    };
    FormReducer.prototype.removeItemHandle = function (state, _a) {
        var keys = _a.keys, index = _a.index;
        var originData = this.con.removeItem(state, Object.assign({}, this.props, {
            mergeSchema: {
                keys: keys
            }
        }), index, this.meta.getKey(keys));
        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.removeMeta(keys.concat([index.toString()]));
        return this.con.mergeData(state, this.props, { data: originData, meta: this.meta.data });
    };
    FormReducer.prototype.switchItemHandle = function (state, _a) {
        var keys = _a.keys, curIndex = _a.curIndex, switchIndex = _a.switchIndex;
        var originData = this.con.switchItem(state, Object.assign({}, this.props, {
            mergeSchema: {
                keys: keys
            }
        }), curIndex, switchIndex, this.meta.getKey(keys));
        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.switchMeta(keys, curIndex, switchIndex);
        return this.con.mergeData(state, this.props, { data: originData, meta: this.meta.data });
    };
    FormReducer.prototype.removeItemMapHandle = function (state, _a) {
        var keys = _a.keys;
        var curMeta = this.meta.getMeta(keys, false) || {};
        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.removeMeta(keys);
        return this.con.mergeData(state, this.props, { meta: this.meta.data });
    };
    return FormReducer;
}());
export { FormReducer };
//# sourceMappingURL=form.jsx.map