import { createAction, createReducer, SimpleActionCreator, BaseActionCreator, EmptyActionCreator, Action } from "redux-act";
import { Reducer } from "redux-act";
import { List, Map, fromJS } from "immutable";
import { Store } from "redux";

import { FxReducer, d, m } from "./reducer";
import { TreeMap } from "../libs/tree";
import merge from "../libs/merge";
import { isProd } from "../libs/utils";

export type ASN = Array<string | number> | string[];

export interface SchemaFormActions {
    [index: string]: SimpleActionCreator<any, any>;
    removeForm: SimpleActionCreator<ASN>;
    createForm: SimpleActionCreator<{ key: string, data: any, keepData?: boolean }>;
    updateItemData: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, data: any, meta?: any }>;
    updateItemMeta: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, meta: any, noChange?: boolean; }>;
    addItem: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, data: any }>;
    removeItem: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, index: number }>;
    moveToItem: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, curIndex: number, toIndex: number }>;
    removeItemData: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, meta?: boolean }>;
    combineActions: SimpleActionCreator<Action<any, any>[]>;
    removeMetaKeys: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, removeMetaKeys: Array<ASN> }>;
}

/**
 * 解析一个路径上的数据，判断数据格式，做处理
 * @param state 当前的state
 * @param keys  数据路径
 * @returns newState
 */
const resolveKeys = (state: Map<string, any>, keys: Array<string>): Map<string, any> => {
    if (state.hasIn(keys)) {
        return state;
    }

    for (let i = 0, n = keys.length; i < n; i++) {
        const mKeys = [...keys].splice(0, i + 1);

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
            const data = state.getIn(mKeys);

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
};

export class SchemaFormReducer<T> implements FxReducer {

    /**
     * 创建一个表单
     */
    private createForm: SimpleActionCreator<{ key: string, data: any }>
        = createAction<{ key: string, data: any, keepData?: boolean }>(isProd() ? "" : "创建一个表单数据");
    /**
     * 更新一个表单数据
     */
    private updateItemData: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, data: any, meta?: any }>
        = createAction<{ parentKeys: ASN, keys: ASN, data: any, meta?: any }>(isProd() ? "" : "更新一个表单数据");
    /**
     * 更新一个表单元数据
     */
    private updateItemMeta: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, meta: any, noChange?: boolean; }>
        = createAction<{ parentKeys: ASN, keys: ASN, meta: any }>(isProd() ? "" : "更新一个表单元数据");
    /**
     * 添加一个元素到数组
     */
    private addItem: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, data: any }>
        = createAction<{ parentKeys: ASN, keys: ASN, data: any }>(isProd() ? "" : "添加一个数据");
    /**
     * 从数组中删除一个元素
     */
    private removeItem: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, index: number }>
        = createAction<{ parentKeys: ASN, keys: ASN, index: number }>(isProd() ? "" : "删除一个数据");
    /**
     * 移动一个数组元素
     */
    private moveToItem: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, curIndex: number, toIndex: number }>
        = createAction<{ parentKeys: ASN, keys: ASN, curIndex: number, toIndex: number }>(isProd() ? "" : "元素移位");
    /**
     * 删除一个字段的数据以及元数据
     */
    private removeItemData: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, meta?: boolean }>
        = createAction<{ parentKeys: ASN, keys: ASN, meta?: boolean }>(isProd() ? "" : "删除一个字段的数据以及meta数据");
    /**
     * 合并多个action，触发一次dispatch
     */
    private combineActions: SimpleActionCreator<Action<any, any>[]>
        = createAction<Action<any, any>[]>(isProd() ? "" : "合并多个action");
    /**
     * 清除一个form的数据
     */
    private removeForm: SimpleActionCreator<ASN>
        = createAction<ASN>(isProd() ? "" : "清除一个form的数据");

    /**
     * 删除meta中的key值
     */
    private removeMetaKeys: SimpleActionCreator<{ parentKeys: ASN, keys: ASN, removeMetaKeys: Array<ASN> }>
        = createAction<{ parentKeys: ASN, keys: ASN, removeMetaKeys: Array<ASN> }>(isProd() ? "" : "删除meta中的key值");

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
            removeItemData: this.removeItemData,
            combineActions: this.combineActions,
            removeForm: this.removeForm,
            removeMetaKeys: this.removeMetaKeys
        };
    }

    /**
     * 初始化actions
     * @param store Redux中的store实例
     */
    public init(store: Store<Map<string, any>>): void {
        for (const key in this.actions) {
            if (this.actions.hasOwnProperty(key)) {
                const action = this.actions[key];

                if (!action.assigned()) {
                    action.assignTo(store as any);
                }
            }
        }
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
            [this.removeItem as any]: this.removeItemHandle.bind(this),
            [this.moveToItem as any]: this.moveItemHandle.bind(this),
            [this.removeItemData as any]: this.removeItemDataMetaHandle.bind(this),
            [this.combineActions as any]: this.combineActionsHandle.bind(this),
            [this.removeForm as any]: this.removeFormHandle.bind(this),
            [this.removeMetaKeys as any]: this.removeMetaKeysHandle.bind(this),
        }, this.initialState);
    }

    /**
     * 清除一个表单数据
     * @param state   state
     * @param param1  参数
     */
    private removeFormHandle(state: Map<string, any>, parentKeys: ASN) {
        let dataKeys = parentKeys;

        if (state.hasIn(dataKeys)) {
            return state.removeIn(dataKeys);
        }

        return state;
    }

    /**
     * 删除指定的meta中的字段
     * @param state    state
     * @param data     参数
     */
    private removeMetaKeysHandle(state: Map<string, any>, { parentKeys, keys, removeMetaKeys }
        : { parentKeys: ASN, keys: ASN, removeMetaKeys: Array<ASN> }) {
        let metaKeys: ASN = [...parentKeys, m];
        let rootNode: TreeMap = state.getIn(metaKeys);
        let childNode: TreeMap | null = rootNode.containPath(keys);

        if (childNode && childNode.value && removeMetaKeys && removeMetaKeys.length) {
            removeMetaKeys.forEach((rKeys: ASN) => {
                if (childNode && childNode.value.hasIn(rKeys)) {
                    childNode.value = childNode.value.removeIn(rKeys);
                }
            });
        }

        return state;
    }

    /**
     * 合并多个action
     * @param state    state
     * @param actions  需要调用的action
     */
    private combineActionsHandle(state: Map<string, any>, actions: Action<any, any>[]) {
        state = actions.reduce((stateNew: Map<string, any>, act2: Action<any>) => {
            return this.reducer(stateNew, act2);
        }, state);

        return state;
    }

    /**
     * 删除一个字段的数据以及meta数据
     * @param state   当前的state
     * @param param1  参数
     *  parentKeys  父亲的keys
     *  keys        当前元素的keys
     *  meta        是否要删除meta数据
     */
    private removeItemDataMetaHandle(state: Map<string, any>, { parentKeys, keys, meta }: any) {
        let dataKeys = parentKeys.concat([d, ...keys]);
        let metaKeys: ASN = parentKeys.concat([m]);
        let rootNode: TreeMap = state.getIn(metaKeys);
        let childNode: TreeMap | null = rootNode.containPath(keys);

        state = resolveKeys(state, dataKeys);

        if (state.hasIn(dataKeys)) {
            state = state.removeIn(dataKeys);
        }

        if (childNode && meta) {
            childNode.removeFromParent();
        }

        return state;
    }

    /**
     * 创建一份表单数据
     * @param state   当前的state
     * @param param1  参数值，key 和 data
     */
    private createFormHandle(state: Map<string, any>, { key, data, keepData }: any): Map<string, any> {
        let originData = data;

        // 如果存在key
        if (state.has(key)) {
            // 如果要保存数据
            if (keepData) {
                originData = state.getIn([key, "data"]);
            }
            state = state.remove(key);
        }

        const meta = new TreeMap(key, fromJS({}));
        const stateData = Map<string, any>({
            meta: meta,
            data: fromJS(originData)
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
        let dataKeys = parentKeys.concat([d, ...keys]);

        state = resolveKeys(state, dataKeys);
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
        const dataKeys = parentKeys.concat([d, ...keys]),
            metaKeys: ASN = parentKeys.concat([m]),
            rootNode: TreeMap = state.getIn(metaKeys),
            childNode: TreeMap | null = rootNode.containPath(keys);
        let formItemData: List<any>;

        state = resolveKeys(state, dataKeys);
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
    private removeItemHandle(state: Map<string, any>, { parentKeys, keys, index }: any): Map<string, any> {
        const dataKeys = parentKeys.concat([d, ...keys]),
            metaKeys: ASN = parentKeys.concat([m]),
            rootNode: TreeMap = state.getIn(metaKeys),
            childNode: TreeMap | null = rootNode.addChild(keys.concat([index]));
        let formItemData: List<any>;

        state = resolveKeys(state, dataKeys);
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
    private moveItemHandle(state: Map<string, any>, { parentKeys, keys, curIndex, toIndex }: any): Map<string, any> {
        const dataKeys = parentKeys.concat([d, ...keys]),
            metaKeys: ASN = parentKeys.concat([m]),
            rootNode: TreeMap = state.getIn(metaKeys),
            offset = (toIndex > curIndex && false ? 1 : 0);
        let formItemData: List<any> = state.getIn(dataKeys),
            childNode: TreeMap | null = rootNode.containPath(keys.concat([curIndex])),
            childNodeTo: TreeMap | null = rootNode.containPath(keys.concat([toIndex]));

        state = resolveKeys(state, dataKeys);

        if (!formItemData || toIndex < 0) {
            return state;
        }

        let curItemData = formItemData.get(curIndex);

        formItemData = formItemData.remove(curIndex);
        formItemData = formItemData.insert(toIndex - offset, curItemData);

        if (childNode) {
            childNode.insertToFromParent(toIndex);
        } else {
            if (childNodeTo) {
                childNodeTo.insertToFromParent(curIndex);
            }
        }

        return state.setIn(dataKeys, formItemData);
    }

    /**
     * 修改一个数据的元数据
     * 通过parentKeys取得根节点
     * 通过keys合成元素的节点路径，从根节点获取数据
     * @param state  当前的state
     * @param param1 参数值，keys,parentKeys和data
     */
    private updateItemMetaHandle(state: Map<string, any>, { parentKeys, keys, meta, noChange }: any): Map<string, any> {
        let metaKeys: ASN = parentKeys.concat([m]);
        let rootNode: TreeMap = state.getIn(metaKeys);
        let childNode: TreeMap | null = rootNode.containPath(keys);
        let value = childNode ? childNode.value : null;

        // 如果childNode不存在，则新建一个
        if (!childNode) {
            childNode = rootNode.addChild(keys);
        }

        // 判断childNode，如果存在value，则合并value，否则创建value
        if (childNode) {
            if (value) {
                childNode.value = merge(childNode.value, fromJS(meta), { "*": "replace" });
            } else {
                childNode.value = fromJS(meta);
            }
        }

        if (noChange) {
            return state;
        }

        // 生成新的TreeMap
        let newRoot = new TreeMap(rootNode.getKey(), rootNode.value);

        newRoot.children = rootNode.children;

        return state.setIn(metaKeys, newRoot);
    }
}
