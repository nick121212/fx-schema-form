import { createAction, createReducer } from "redux-act";
import { List, Map, fromJS } from "immutable";
import { a } from "./reducer";
import { TreeMap } from "../libs/tree";
import merge from "../libs/merge";
const b = a;
export class SchemaFormReducer {
    constructor(initialState) {
        this.initialState = initialState;
        this.createForm = createAction("创建一个表单数据");
        this.updateItemData = createAction("更新一个表单数据");
        this.updateItemMeta = createAction("更新一个表单元数据");
        this.addItem = createAction("添加一个数据");
        this.removeItem = createAction("删除一个数据");
        this.moveToItem = createAction("元素移位");
        this.removeItemData = createAction("删除一个字段的数据以及meta数据");
    }
    get actions() {
        return {
            createForm: this.createForm,
            updateItemData: this.updateItemData,
            updateItemMeta: this.updateItemMeta,
            addItem: this.addItem,
            removeItem: this.removeItem,
            moveToItem: this.moveToItem,
            removeItemData: this.removeItemData
        };
    }
    init(store) {
        for (const key in this.actions) {
            if (this.actions.hasOwnProperty(key)) {
                const action = this.actions[key];
                if (!action.assigned()) {
                    action.assignTo(store);
                }
            }
        }
    }
    get reducer() {
        return createReducer({
            [this.createForm]: this.createFormHandle.bind(this),
            [this.updateItemData]: this.updateItemDataHandle.bind(this),
            [this.updateItemMeta]: this.updateItemMetaHandle.bind(this),
            [this.addItem]: this.addItemDataHandle.bind(this),
            [this.removeItem]: this.removeItemHandle.bind(this),
            [this.moveToItem]: this.moveItemHandle.bind(this),
            [this.removeItemData]: this.removeItemDataMetaHandle.bind(this)
        }, this.initialState);
    }
    removeItemDataMetaHandle(state, { parentKeys, keys, meta }) {
        let dataKeys = parentKeys.concat(["data", ...keys]);
        let metaKeys = parentKeys.concat(["meta"]);
        let rootNode = state.getIn(metaKeys);
        let childNode = rootNode.containPath(keys);
        state = this.resolveKeys(state, dataKeys);
        if (state.hasIn(dataKeys)) {
            state = state.removeIn(dataKeys);
        }
        if (childNode && meta) {
            childNode.removeFromParent();
        }
        return state;
    }
    resolveKeys(state, keys) {
        if (state.hasIn(keys)) {
            return state;
        }
        for (let i = 0, n = keys.length; i < n; i++) {
            let mKeys = [...keys].splice(0, i + 1);
            if (!state.hasIn(mKeys)) {
                mKeys.pop();
                if (!state.hasIn(mKeys)) {
                    if (keys[i].constructor === Number) {
                        state = state.setIn(mKeys, List());
                    }
                    else {
                        state = state.setIn(mKeys, Map());
                    }
                }
            }
            else if (i < n) {
                let data = state.getIn(mKeys);
                if (!Map.isMap(data) && !List.isList(data)) {
                    if (keys[i + 1].constructor === Number) {
                        state = state.setIn(mKeys, List());
                    }
                    else {
                        state = state.setIn(mKeys, Map());
                    }
                }
            }
        }
        return state;
    }
    createFormHandle(state, { key, data }) {
        if (state.has(key)) {
            state = state.remove(key);
        }
        const meta = new TreeMap(key, fromJS({}));
        const stateData = Map({
            meta: meta,
            data: fromJS(data)
        });
        return state.set(key, stateData);
    }
    updateItemDataHandle(state, { parentKeys, keys, data, meta }) {
        let dataKeys = parentKeys.concat(["data", ...keys]);
        state = this.resolveKeys(state, dataKeys);
        state = state.setIn(dataKeys, fromJS(data));
        if (meta) {
            state = this.updateItemMetaHandle(state, { parentKeys, keys, meta });
        }
        return state;
    }
    addItemDataHandle(state, { parentKeys, keys, data }) {
        const dataKeys = parentKeys.concat(["data", ...keys]), metaKeys = parentKeys.concat(["meta"]), rootNode = state.getIn(metaKeys), childNode = rootNode.containPath(keys);
        let formItemData;
        state = this.resolveKeys(state, dataKeys);
        formItemData = state.getIn(dataKeys) || List();
        formItemData = formItemData.push(fromJS(data));
        if (childNode && childNode.value) {
            childNode.value = childNode.value.merge({
                collapsing: false
            });
        }
        return state.setIn(dataKeys, formItemData);
    }
    removeItemHandle(state, { parentKeys, keys, index }) {
        const dataKeys = parentKeys.concat(["data", ...keys]), metaKeys = parentKeys.concat(["meta"]), rootNode = state.getIn(metaKeys), childNode = rootNode.addChild(keys.concat([index]));
        let formItemData;
        state = this.resolveKeys(state, dataKeys);
        formItemData = state.getIn(dataKeys);
        if (!formItemData || !List.isList(formItemData)) {
            return state;
        }
        if (childNode) {
            childNode.removeFromParent();
        }
        return state.setIn(dataKeys, formItemData.remove(index));
    }
    moveItemHandle(state, { parentKeys, keys, curIndex, toIndex }) {
        const dataKeys = parentKeys.concat(["data", ...keys]), metaKeys = parentKeys.concat(["meta"]), rootNode = state.getIn(metaKeys), offset = (toIndex > curIndex && false ? 1 : 0);
        let oldFormItemData = state.getIn(dataKeys), formItemData = state.getIn(dataKeys), childNode = rootNode.containPath(keys.concat([curIndex])), childNodeTo = rootNode.containPath(keys.concat([toIndex]));
        state = this.resolveKeys(state, dataKeys);
        if (!formItemData || toIndex < 0) {
            return state;
        }
        let curItemData = formItemData.get(curIndex);
        formItemData = formItemData.remove(curIndex);
        formItemData = formItemData.insert(toIndex - offset, curItemData);
        if (childNode) {
            childNode.insertToFromParent(toIndex);
        }
        else {
            if (childNodeTo) {
                childNodeTo.insertToFromParent(curIndex);
            }
        }
        return state.setIn(dataKeys, formItemData);
    }
    updateItemMetaHandle(state, { parentKeys, keys, meta, noChange }) {
        let metaKeys = parentKeys.concat(["meta"]);
        let rootNode = state.getIn(metaKeys);
        let childNode = rootNode.containPath(keys);
        let value = childNode ? childNode.value : null;
        if (!childNode) {
            childNode = rootNode.addChild(keys);
        }
        if (childNode) {
            if (value) {
                childNode.value = merge(childNode.value, fromJS(meta), { "*": "replace" });
            }
            else {
                childNode.value = fromJS(meta);
            }
        }
        if (noChange) {
            return state;
        }
        let newRoot = new TreeMap(rootNode.getKey(), rootNode.value);
        newRoot.children = rootNode.children;
        return state.setIn(metaKeys, newRoot);
    }
}
//# sourceMappingURL=schema.form.js.map