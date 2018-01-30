import { createAction, createReducer, SimpleActionCreator } from "redux-act";
import { Reducer } from "redux";
import { List, Map, fromJS } from "immutable";

import { FxReducer } from "./reducer";
import { TreeMap } from "../libs/tree";

export interface SchemaFormActions {
    createForm: SimpleActionCreator<{ key: string, data: any }>;
    updateItemData: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any, meta?: any }>;
    updateItemMeta: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any }>;
    addItem: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any }>;
    removeItem: SimpleActionCreator<{ parentKeys: string[], keys: string[], index: number }>;
    switchItem: SimpleActionCreator<{ parentKeys: string[], keys: string[], curIndex: number, toIndex: number }>;
    moveToItem: SimpleActionCreator<{ parentKeys: string[], keys: string[], curIndex: number, toIndex: number }>;
}

export class SchemaFormReducer<T> implements FxReducer {

    private createForm: SimpleActionCreator<{ key: string, data: any }>
        = createAction("创建一个表单数据");
    private updateItemData: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any, meta?: any }>
        = createAction("更新一个表单数据");
    private updateItemMeta: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any }>
        = createAction("更新一个表单元数据");
    private addItem: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any }>
        = createAction("添加一个数据");
    private removeItem: SimpleActionCreator<{ parentKeys: string[], keys: string[], index: number }>
        = createAction("删除一个数据");
    private switchItem: SimpleActionCreator<{ parentKeys: string[], keys: string[], curIndex: number, toIndex: number }>
        = createAction("元素22交换位置");
    private moveToItem: SimpleActionCreator<{ parentKeys: string[], keys: string[], curIndex: number, toIndex: number }>
        = createAction("元素移位");
    private validateAll: SimpleActionCreator<{ parentKeys: string[], keys: string[], curIndex: number, toIndex: number }>
        = createAction("验证全部字段");

    /**
     * 构造
     * @param initialState 初始化状态
     */
    constructor(private initialState: any) { }
    /**
     * 获取当前的actions
     */
    public get actions(): SchemaFormActions {
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
    /**
     * 返回当前的reducer
     */
    public get reducer(): Reducer<any> {
        return createReducer<any>({
            [this.createForm as any]: this.createFormHandle.bind(this),
            [this.updateItemData as any]: this.updateItemDataHandle.bind(this),
            [this.updateItemMeta as any]: this.updateItemMetaHandle.bind(this),
            [this.addItem as any]: this.addItemDataHandle.bind(this),
            [this.removeItem as any]: this.removeItemDataHandle.bind(this),
            [this.switchItem as any]: this.switchItemHandle.bind(this),
            [this.moveToItem as any]: this.moveItemHandle.bind(this),
        }, this.initialState);
    }

    /**
     * 解析一个路径上的数据，判断数据格式，做处理
     * @param state 当前的state
     * @param keys  数据路径
     */
    private resolveKeys(state: Map<string, any>, keys: Array<string>) {
        if (state.hasIn(keys)) {
            return state;
        }

        for (let i = 0, n = keys.length; i < n; i++) {
            let mKeys = [].concat(keys).splice(0, i + 1);

            // 如果key不存在，遍历生成数据结构
            if (!state.hasIn(mKeys)) {
                mKeys.pop();
                if (!state.hasIn(mKeys)) {
                    if (keys[i].constructor === Number) {
                        state = state.setIn(mKeys, List());
                    } else {
                        state = state.setIn(mKeys, Map());
                    }
                }
            } else if (i < n) {
                // 如果key存在，则判断数据结构是否与结构一致
                let data = state.getIn(mKeys);

                if (!Map.isMap(data) && !List.isList(data)) {
                    if (keys[i + 1].constructor === Number) {
                        state = state.setIn(mKeys, List());
                    } else {
                        state = state.setIn(mKeys, Map());
                    }
                }
            }
        }

        return state;
    }

    /**
     * 创建一份表单数据
     * @param state   当前的state
     * @param param1  参数值，key 和 data
     */
    private createFormHandle(state: Map<string, any>, { key, data }: any): Map<string, any> {
        if (state.has(key)) {
            state = state.remove(key);
        }

        const meta = new TreeMap(key, fromJS({}));
        const stateData = Map<string, any>({
            meta: meta,
            data: fromJS(data)
        });

        return state.set(key, stateData);
    }
    /**
     * 修改一个数据
     * 合并parrentKeys和keys，中间加入一个“data”
     * @param state  当前的state
     * @param param1 参数值，keys,parentKeys和data
     */
    private updateItemDataHandle(state: Map<string, any>, { parentKeys, keys, data, meta }: any): Map<string, any> {
        let dataKeys = parentKeys.concat(["data", ...keys]);

        state = this.resolveKeys(state, dataKeys);
        state = state.setIn(dataKeys, fromJS(data));

        if (meta) {
            state = this.updateItemMetaHandle(state, { parentKeys, keys, meta });
        }

        return state;
    }

    /**
     * 添加一个数组到List
     * 1. 添加数组
     * 2. 修改meta中的collapsing字段为false，使得折叠的状态改变成不折叠的状态
     * @param state  当前的state
     * @param param1 keys,parentKeys和data
     */
    private addItemDataHandle(state: Map<string, any>, { parentKeys, keys, data }: any): Map<string, any> {
        const dataKeys = parentKeys.concat(["data", ...keys]),
            metaKeys: string[] = parentKeys.concat(["meta"]),
            rootNode: TreeMap = state.getIn(metaKeys),
            childNode: TreeMap = rootNode.containPath(parentKeys.concat(keys));
        let formItemData: List<any>;

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

    /**
     * 删除数组中的一个元素
     * 1. 删除元素数组中的数据
     * 2. 删除meta信息中的数据
     * @param state  当前的state
     * @param param1 keys,parentKeys和data
     */
    private removeItemDataHandle(state: Map<string, any>, { parentKeys, keys, index }: any): Map<string, any> {
        const dataKeys = parentKeys.concat(["data", ...keys]),
            metaKeys: string[] = parentKeys.concat(["meta"]),
            rootNode: TreeMap = state.getIn(metaKeys),
            childNode: TreeMap = rootNode.addChild(parentKeys.concat(keys).concat([index]));
        let formItemData: List<any>;

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

    /**
     * 交换2个数组的位置
     * 1. 交换数组数据
     * 2. 交换meta中的位置信息
     * @param state   当前的state
     * @param param1  参数
     *   parentKeys    父亲的keys
     *   keys          当前item的keys
     *   curIndex      当前item的索引
     *   toIndex       需要交换的item索引
     */
    private switchItemHandle(state: Map<string, any>, { parentKeys, keys, curIndex, toIndex }: any): Map<string, any> {
        const dataKeys = parentKeys.concat(["data", ...keys]),
            metaKeys: string[] = parentKeys.concat(["meta"]),
            rootNode: TreeMap = state.getIn(metaKeys);
        let formItemData: List<any>, childNode: TreeMap;

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
        } else {
            childNode = rootNode.containPath(parentKeys.concat(keys).concat([toIndex]));
            if (childNode) {
                childNode.switchOneToOneFromParent(curIndex);
            }
        }

        return state.setIn(dataKeys, formItemData);
    }

    /**
     * 交换2个数组的位置
     * 1. 交换数组数据
     * 2. 交换meta中的位置信息
     * @param state   当前的state
     * @param param1  参数
     *   parentKeys    父亲的keys
     *   keys          当前item的keys
     *   curIndex      当前item的索引
     *   toIndex       需要交换的item索引
     */
    private moveItemHandle(state: Map<string, any>, { parentKeys, keys, curIndex, toIndex }: any): Map<string, any> {
        const dataKeys = parentKeys.concat(["data", ...keys]),
            metaKeys: string[] = parentKeys.concat(["meta"]),
            rootNode: TreeMap = state.getIn(metaKeys),
            childNode: TreeMap = rootNode.addChild(parentKeys.concat(keys).concat([curIndex])),
            offset = (toIndex > curIndex && false ? 1 : 0);
        let formItemData: List<any>;

        state = this.resolveKeys(state, dataKeys);
        formItemData = state.getIn(dataKeys);

        if (!formItemData || formItemData.size <= toIndex || toIndex < 0) {
            return state;
        }

        let curItemData = formItemData.get(curIndex);

        formItemData = formItemData.remove(curIndex);
        formItemData = formItemData.insert(toIndex - offset, curItemData);

        childNode.insertToFromParent(toIndex);

        return state.setIn(dataKeys, formItemData);
    }

    /**
     * 修改一个数据的元数据
     * 通过parentKeys取得根节点
     * 通过keys合成元素的节点路径，从根节点获取数据
     * @param state  当前的state
     * @param param1 参数值，keys,parentKeys和data
     */
    private updateItemMetaHandle(state: Map<string, any>, { parentKeys, keys, data }: any): Map<string, any> {
        let metaKeys: string[] = parentKeys.concat(["meta"]);
        let rootNode: TreeMap = state.getIn(metaKeys);
        let childNode: TreeMap = rootNode.addChild(parentKeys.concat(keys));
        let value = childNode.value;

        if (childNode.value) {
            childNode.value = childNode.value.merge(data);
        } else {
            childNode.value = fromJS(data);
        }

        // if (is(childNode.value, value)) {
        //     return state;
        // }

        let newRoot = Object.assign({}, rootNode, TreeMap.prototype);

        return state.setIn(metaKeys, newRoot);
    }
}
