import { createAction, createReducer } from "redux-act";
import { List, Map, fromJS } from "immutable";
import { a } from "./reducer";
import { TreeMap } from "../libs/tree";
const b = a;
export class SchemaFormReducer {
    constructor(initialState) {
        this.initialState = initialState;
        this.createForm = createAction("创建一个表单数据");
        this.updateItemData = createAction("更新一个表单数据");
        this.updateItemMeta = createAction("更新一个表单元数据");
        this.addItem = createAction("添加一个数据");
        this.removeItem = createAction("删除一个数据");
        this.switchItem = createAction("元素22交换位置");
        this.moveToItem = createAction("元素移位");
        this.validateAll = createAction("验证全部字段");
    }
    get actions() {
        return {
            createForm: this.createForm,
            updateItemData: this.updateItemData,
            updateItemMeta: this.updateItemMeta,
            addItem: this.addItem,
            removeItem: this.removeItem,
            moveToItem: this.moveToItem,
            switchItem: this.switchItem
        };
    }
    get reducer() {
        return createReducer({
            [this.createForm]: this.createFormHandle.bind(this),
            [this.updateItemData]: this.updateItemDataHandle.bind(this),
            [this.updateItemMeta]: this.updateItemMetaHandle.bind(this),
            [this.addItem]: this.addItemDataHandle.bind(this),
            [this.removeItem]: this.removeItemDataHandle.bind(this),
            [this.switchItem]: this.switchItemHandle.bind(this),
            [this.moveToItem]: this.moveItemHandle.bind(this),
        }, this.initialState);
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
        const dataKeys = parentKeys.concat(["data", ...keys]), metaKeys = parentKeys.concat(["meta"]), rootNode = state.getIn(metaKeys), childNode = rootNode.containPath(parentKeys.concat(keys));
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
    removeItemDataHandle(state, { parentKeys, keys, index }) {
        const dataKeys = parentKeys.concat(["data", ...keys]), metaKeys = parentKeys.concat(["meta"]), rootNode = state.getIn(metaKeys), childNode = rootNode.addChild(parentKeys.concat(keys).concat([index]));
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
    switchItemHandle(state, { parentKeys, keys, curIndex, toIndex }) {
        const dataKeys = parentKeys.concat(["data", ...keys]), metaKeys = parentKeys.concat(["meta"]), rootNode = state.getIn(metaKeys);
        let formItemData, childNode;
        state = this.resolveKeys(state, dataKeys);
        formItemData = state.getIn(dataKeys);
        if (!formItemData || formItemData.size <= toIndex || toIndex < 0) {
            return state;
        }
        let curItemData = formItemData.get(curIndex);
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
    }
    moveItemHandle(state, { parentKeys, keys, curIndex, toIndex }) {
        const dataKeys = parentKeys.concat(["data", ...keys]), metaKeys = parentKeys.concat(["meta"]), rootNode = state.getIn(metaKeys), childNode = rootNode.containPath(parentKeys.concat(keys).concat([curIndex])), offset = (toIndex > curIndex && false ? 1 : 0);
        let formItemData;
        state = this.resolveKeys(state, dataKeys);
        formItemData = state.getIn(dataKeys);
        if (!formItemData || formItemData.size <= toIndex || toIndex < 0) {
            return state;
        }
        let curItemData = formItemData.get(curIndex);
        formItemData = formItemData.remove(curIndex);
        formItemData = formItemData.insert(toIndex - offset, curItemData);
        if (childNode) {
            childNode.insertToFromParent(toIndex);
        }
        return state.setIn(dataKeys, formItemData);
    }
    updateItemMetaHandle(state, { parentKeys, keys, data }) {
        let metaKeys = parentKeys.concat(["meta"]);
        let rootNode = state.getIn(metaKeys);
        let childNode = rootNode.addChild(parentKeys.concat(keys));
        let value = childNode ? childNode.value : null;
        if (childNode) {
            if (value) {
                childNode.value = childNode.value.merge(data);
            }
            else {
                childNode.value = fromJS(data);
            }
        }
        let newRoot = Object.assign({}, rootNode, TreeMap.prototype);
        return state.setIn(metaKeys, newRoot);
    }
}
//# sourceMappingURL=schema.form.js.map