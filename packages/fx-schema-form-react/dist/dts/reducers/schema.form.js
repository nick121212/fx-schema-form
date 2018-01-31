"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_act_1 = require("redux-act");
var immutable_1 = require("immutable");
var tree_1 = require("../libs/tree");
var SchemaFormReducer = (function () {
    function SchemaFormReducer(initialState) {
        this.initialState = initialState;
        this.createForm = redux_act_1.createAction("创建一个表单数据");
        this.updateItemData = redux_act_1.createAction("更新一个表单数据");
        this.updateItemMeta = redux_act_1.createAction("更新一个表单元数据");
        this.addItem = redux_act_1.createAction("添加一个数据");
        this.removeItem = redux_act_1.createAction("删除一个数据");
        this.switchItem = redux_act_1.createAction("元素22交换位置");
        this.moveToItem = redux_act_1.createAction("元素移位");
        this.validateAll = redux_act_1.createAction("验证全部字段");
    }
    Object.defineProperty(SchemaFormReducer.prototype, "actions", {
        get: function () {
            return {
                createForm: this.createForm,
                updateItemData: this.updateItemData,
                updateItemMeta: this.updateItemMeta,
                addItem: this.addItem,
                removeItem: this.removeItem,
                moveToItem: this.moveToItem,
                switchItem: this.switchItem
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SchemaFormReducer.prototype, "reducer", {
        get: function () {
            return redux_act_1.createReducer((_a = {},
                _a[this.createForm] = this.createFormHandle.bind(this),
                _a[this.updateItemData] = this.updateItemDataHandle.bind(this),
                _a[this.updateItemMeta] = this.updateItemMetaHandle.bind(this),
                _a[this.addItem] = this.addItemDataHandle.bind(this),
                _a[this.removeItem] = this.removeItemDataHandle.bind(this),
                _a[this.switchItem] = this.switchItemHandle.bind(this),
                _a[this.moveToItem] = this.moveItemHandle.bind(this),
                _a), this.initialState);
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    SchemaFormReducer.prototype.resolveKeys = function (state, keys) {
        if (state.hasIn(keys)) {
            return state;
        }
        for (var i = 0, n = keys.length; i < n; i++) {
            var mKeys = [].concat(keys).splice(0, i + 1);
            if (!state.hasIn(mKeys)) {
                mKeys.pop();
                if (!state.hasIn(mKeys)) {
                    if (keys[i].constructor === Number) {
                        state = state.setIn(mKeys, immutable_1.List());
                    }
                    else {
                        state = state.setIn(mKeys, immutable_1.Map());
                    }
                }
            }
            else if (i < n) {
                var data = state.getIn(mKeys);
                if (!immutable_1.Map.isMap(data) && !immutable_1.List.isList(data)) {
                    if (keys[i + 1].constructor === Number) {
                        state = state.setIn(mKeys, immutable_1.List());
                    }
                    else {
                        state = state.setIn(mKeys, immutable_1.Map());
                    }
                }
            }
        }
        return state;
    };
    SchemaFormReducer.prototype.createFormHandle = function (state, _a) {
        var key = _a.key, data = _a.data;
        if (state.has(key)) {
            state = state.remove(key);
        }
        var meta = new tree_1.TreeMap(key, immutable_1.fromJS({}));
        var stateData = immutable_1.Map({
            meta: meta,
            data: immutable_1.fromJS(data)
        });
        return state.set(key, stateData);
    };
    SchemaFormReducer.prototype.updateItemDataHandle = function (state, _a) {
        var parentKeys = _a.parentKeys, keys = _a.keys, data = _a.data, meta = _a.meta;
        var dataKeys = parentKeys.concat(["data"].concat(keys));
        state = this.resolveKeys(state, dataKeys);
        state = state.setIn(dataKeys, immutable_1.fromJS(data));
        if (meta) {
            state = this.updateItemMetaHandle(state, { parentKeys: parentKeys, keys: keys, meta: meta });
        }
        return state;
    };
    SchemaFormReducer.prototype.addItemDataHandle = function (state, _a) {
        var parentKeys = _a.parentKeys, keys = _a.keys, data = _a.data;
        var dataKeys = parentKeys.concat(["data"].concat(keys)), metaKeys = parentKeys.concat(["meta"]), rootNode = state.getIn(metaKeys), childNode = rootNode.containPath(parentKeys.concat(keys));
        var formItemData;
        state = this.resolveKeys(state, dataKeys);
        formItemData = state.getIn(dataKeys) || immutable_1.List();
        formItemData = formItemData.push(immutable_1.fromJS(data));
        if (childNode && childNode.value) {
            childNode.value = childNode.value.merge({
                collapsing: false
            });
        }
        return state.setIn(dataKeys, formItemData);
    };
    SchemaFormReducer.prototype.removeItemDataHandle = function (state, _a) {
        var parentKeys = _a.parentKeys, keys = _a.keys, index = _a.index;
        var dataKeys = parentKeys.concat(["data"].concat(keys)), metaKeys = parentKeys.concat(["meta"]), rootNode = state.getIn(metaKeys), childNode = rootNode.addChild(parentKeys.concat(keys).concat([index]));
        var formItemData;
        state = this.resolveKeys(state, dataKeys);
        formItemData = state.getIn(dataKeys);
        if (!formItemData || !immutable_1.List.isList(formItemData)) {
            return state;
        }
        if (childNode) {
            childNode.removeFromParent();
        }
        return state.setIn(dataKeys, formItemData.remove(index));
    };
    SchemaFormReducer.prototype.switchItemHandle = function (state, _a) {
        var parentKeys = _a.parentKeys, keys = _a.keys, curIndex = _a.curIndex, toIndex = _a.toIndex;
        var dataKeys = parentKeys.concat(["data"].concat(keys)), metaKeys = parentKeys.concat(["meta"]), rootNode = state.getIn(metaKeys);
        var formItemData, childNode;
        state = this.resolveKeys(state, dataKeys);
        formItemData = state.getIn(dataKeys);
        if (!formItemData || formItemData.size <= toIndex || toIndex < 0) {
            return state;
        }
        var curItemData = formItemData.get(curIndex);
        formItemData = formItemData.set(curIndex, formItemData.get(toIndex));
        formItemData = formItemData.set(toIndex, curItemData);
        childNode = rootNode.containPath(parentKeys.concat(keys).concat([curIndex]));
        if (childNode) {
            childNode.switchOneToOneFromParent(toIndex);
        }
        else {
            childNode = rootNode.containPath(parentKeys.concat(keys).concat([toIndex]));
            if (childNode) {
                childNode.switchOneToOneFromParent(curIndex);
            }
        }
        return state.setIn(dataKeys, formItemData);
    };
    SchemaFormReducer.prototype.moveItemHandle = function (state, _a) {
        var parentKeys = _a.parentKeys, keys = _a.keys, curIndex = _a.curIndex, toIndex = _a.toIndex;
        var dataKeys = parentKeys.concat(["data"].concat(keys)), metaKeys = parentKeys.concat(["meta"]), rootNode = state.getIn(metaKeys), childNode = rootNode.addChild(parentKeys.concat(keys).concat([curIndex])), offset = (toIndex > curIndex && false ? 1 : 0);
        var formItemData;
        state = this.resolveKeys(state, dataKeys);
        formItemData = state.getIn(dataKeys);
        if (!formItemData || formItemData.size <= toIndex || toIndex < 0) {
            return state;
        }
        var curItemData = formItemData.get(curIndex);
        formItemData = formItemData.remove(curIndex);
        formItemData = formItemData.insert(toIndex - offset, curItemData);
        childNode.insertToFromParent(toIndex);
        return state.setIn(dataKeys, formItemData);
    };
    SchemaFormReducer.prototype.updateItemMetaHandle = function (state, _a) {
        var parentKeys = _a.parentKeys, keys = _a.keys, data = _a.data;
        var metaKeys = parentKeys.concat(["meta"]);
        var rootNode = state.getIn(metaKeys);
        var childNode = rootNode.addChild(parentKeys.concat(keys));
        var value = childNode.value;
        if (childNode.value) {
            childNode.value = childNode.value.merge(data);
        }
        else {
            childNode.value = immutable_1.fromJS(data);
        }
        var newRoot = Object.assign({}, rootNode, tree_1.TreeMap.prototype);
        return state.setIn(metaKeys, newRoot);
    };
    return SchemaFormReducer;
}());
exports.SchemaFormReducer = SchemaFormReducer;
//# sourceMappingURL=schema.form.js.map