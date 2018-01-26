import { createAction, createReducer, SimpleActionCreator } from "redux-act";
import { Reducer } from "redux";
import Immutable, { is } from "immutable";

import { FxReducer } from "./reducer";
import { TreeMap } from "../libs/tree";

export interface SchemaFormActions {
    createForm: SimpleActionCreator<{ key: string, data: any }>;
    updateItemData: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any }>;
    updateItemMeta: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any }>;
}

export class SchemaFormReducer<T> implements FxReducer {

    private createForm: SimpleActionCreator<{ key: string, data: any }> = createAction("创建一个表单数据");
    private updateItemData: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any }> = createAction("更新一个表单数据");
    private updateItemMeta: SimpleActionCreator<{ parentKeys: string[], keys: string[], data: any }> = createAction("更新一个表单元数据");

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
            updateItemMeta: this.updateItemMeta
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
        }, this.initialState);
    }
    /**
     * 创建一份表单数据
     * @param state   当前的state
     * @param param1  参数值，key 和 data
     */
    private createFormHandle(state: Immutable.Map<string, any>, { key, data }: any): Immutable.Map<string, any> {
        if (state.has(key)) {
            state = state.remove(key);
        }

        const meta = new TreeMap(key, null);
        const stateData = Immutable.Map<string, any>({
            meta: meta,
            data: Immutable.fromJS(data)
        });

        return state.set(key, stateData);
    }
    /**
     * 修改一个数据
     * 合并parrentKeys和keys，中间加入一个“data”
     * @param state  当前的state
     * @param param1 参数值，keys,parentKeys和data
     */
    private updateItemDataHandle(state: Immutable.Map<string, any>, { parentKeys, keys, data }: any): Immutable.Map<string, any> {
        let dataKeys = parentKeys.concat(["data", ...keys]);

        return state.setIn(dataKeys, Immutable.fromJS(data));
    }
    /**
     * 修改一个数据的元数据
     * 通过parentKeys取得根节点
     * 通过keys合成元素的节点路径，从根节点获取数据
     * @param state  当前的state
     * @param param1 参数值，keys,parentKeys和data
     */
    private updateItemMetaHandle(state: Immutable.Map<string, any>, { parentKeys, keys, data }: any): Immutable.Map<string, any> {
        let metaKeys: string[] = parentKeys.concat(["meta"]);
        let rootNode: TreeMap = state.getIn(metaKeys);
        let childNode: TreeMap = rootNode.addChild(parentKeys.concat(keys));
        let value = childNode.value;

        if (childNode.value) {
            childNode.value = childNode.value.merge(data);
        } else {
            childNode.value = Immutable.fromJS(data);
        }

        if (is(childNode.value, value)) {
            return state;
        }

        let newRoot = Object.assign({}, rootNode, TreeMap.prototype);

        return state.setIn(metaKeys, newRoot);
    }
}
