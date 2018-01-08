import { createAction, createReducer, EmptyActionCreator, SimpleActionCreator, ComplexActionCreator } from "redux-act";
import { Reducer } from "redux";
import jpp from "json-pointer";
import cloneDeep from "lodash.clonedeep";

import { MetaData, SchemaFormMeta } from "../libs/meta";
import { ConBase } from "../container/icon";

export interface SchemaFormState<T> {
    data: T;
    meta: any;
}

export interface Actions {
    updateItem: SimpleActionCreator<{ keys: Array<string>, data: any }>;
    toggleItem: SimpleActionCreator<{ keys: Array<string> }>;
    removeItem: SimpleActionCreator<{ keys: Array<string>, data: any }>;
    addItem: SimpleActionCreator<{ keys: Array<string>, data: any }>;
    switchItem: SimpleActionCreator<{ keys: Array<string>, data: any }>;
    updateMetaState: SimpleActionCreator<any>;
    updateItemMeta: SimpleActionCreator<{ keys: Array<string>, data: any }>;
    removeItemMap: SimpleActionCreator<{ keys: Array<string> }>;
    updateData: SimpleActionCreator<any>;
}

export class FormReducer<T> {
    /**
     * 单个元素的值变化时候调用
     */
    private updateItem: SimpleActionCreator<{ keys: Array<string>, data: any }> = createAction("更新表单值");
    /**
     * 显示/隐藏元素
     */
    private toggleItem: SimpleActionCreator<{ keys: Array<string> }> = createAction("显示/隐藏元素");
    /**
     * 删除元素
     */
    private removeItem: SimpleActionCreator<{ keys: Array<string>, data: any }> = createAction("删除元素");
    /**
     * 添加元素
     */
    private addItem: SimpleActionCreator<{ keys: Array<string>, data: any }> = createAction("添加元素");
    /**
     * 元素移位
     */
    private switchItem: SimpleActionCreator<{ keys: Array<string>, data: any }> = createAction("元素移位");
    /**
     * 初始化元素的meta信息
     */
    private updateItemMeta: SimpleActionCreator<{ keys: Array<string>, data: any }> = createAction("更新元素的meta信息");
    /**
     * 更改meta的状态
     */
    private updateMetaState: SimpleActionCreator<{ data: any }> = createAction("更改meta的状态");
    /**
     * 更改meta的状态
     */
    private updateData: SimpleActionCreator<any> = createAction("更改data的值");

    private removeItemMap: SimpleActionCreator<{ keys: Array<string> }> = createAction("删除元素的map以及meta数据");

    /**
     * 构造
     * @param initialState 初始化状态
     * @param meta         当前的meta类
     * @param updateState  更改数据的方法
     */
    constructor(
        private initialState: any,
        private meta: any,
        private props: any,
        private con: ConBase<any, any, any>) {

    }

    /**
     * 获取当前的actions
     */
    public get actions(): Actions {
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

    /**
     * 返回当前的reducer
     */
    public get reducer(): Reducer<any> {
        return createReducer<any>({
            [this.updateItem as any]: this.updateItemHandle.bind(this),
            [this.toggleItem as any]: this.toggleItemHandle.bind(this),
            [this.addItem as any]: this.addItemHandle.bind(this),
            [this.removeItem as any]: this.removeItemHandle.bind(this),
            [this.switchItem as any]: this.switchItemHandle.bind(this),
            [this.updateMetaState as any]: this.updateMetaStateHandle.bind(this),
            [this.updateItemMeta as any]: this.updateMetaHandle.bind(this),
            [this.updateData as any]: this.updateDataHandle.bind(this),
            [this.removeItemMap as any]: this.removeItemMapHandle.bind(this)
        }, this.initialState);
    }

    /**
     * 更新全部数据
     * @param state state
     * @param data  data
     */
    private updateDataHandle(state: SchemaFormState<any>, data: any) {
        return this.con.updateState(state, this.props, { data, meta: { map: {}, meta: {} } });
    }

    /**
     * 更改meta的状态
     *  1. 如果存在meta，则更新meta
     * @param state 当前的state
     */
    private updateMetaStateHandle(state: SchemaFormState<T>,
        { isLoading, isValid, meta }: { isLoading?: boolean; isValid?: boolean; meta?: any }): SchemaFormState<T> {
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

    /**
     * 更新数据
     * @param state  state
     * @param param1 data
     */
    private updateItemHandle(state: SchemaFormState<T>,
        { keys, data, meta }: { keys: Array<string>, data: any, meta: { isValid: boolean } }): SchemaFormState<T> {
        let originData = this.con.updateItem(state, this.props, data, this.meta.getKey(keys));

        if (meta) {
            this.meta.data = this.con.getAllMeta(state, this.props);
            this.meta.setMeta(keys, meta);
        }

        return this.con.mergeData(state, this.props, { data: originData, meta: this.meta.data });
    }

    /**
     * 更新meta数据
     * keys 更新的keys
     * meta meta数据
     * data data数据
     */
    private updateMetaHandle(state: SchemaFormState<T>, { keys, meta, data }: { keys: Array<string>, meta: SchemaFormMeta, data: any }) {
        let { normalKey } = this.meta.getKey(keys);

        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.setMeta(keys, meta);

        return this.con.mergeData(state, this.props, { meta: this.meta.data });
    }

    private toggleItemHandle(state: SchemaFormState<T>, { keys }: { keys: Array<string> }): SchemaFormState<T> {
        let { normalKey } = this.meta.getKey(keys);
        let curMeta = this.meta.getMeta(keys, false) || {};

        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.setMeta(keys, Object.assign({}, curMeta, { isShow: (curMeta.isShow === undefined ? false : !curMeta.isShow) }));
        return this.con.mergeData(state, this.props, { meta: this.meta.data });
    }

    private addItemHandle(state: SchemaFormState<T>, { keys, data }: { keys: Array<string>, data: any }): SchemaFormState<T> {
        let originData = this.con.addItem(state, Object.assign({}, this.props, {
            mergeSchema: {
                keys
            }
        }), data, this.meta.getKey(keys));

        return this.con.mergeData(state, this.props, { data: originData });
    }

    private removeItemHandle(state: SchemaFormState<T>, { keys, index }: { index: number, keys: Array<string> }): SchemaFormState<T> {
        let originData = this.con.removeItem(state, Object.assign({}, this.props, {
            mergeSchema: {
                keys
            }
        }), index, this.meta.getKey(keys));

        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.removeMeta([...keys, index.toString()]);

        return this.con.mergeData(state, this.props, { data: originData, meta: this.meta.data });
    }

    private switchItemHandle(state: SchemaFormState<T>,
        { keys, curIndex, switchIndex }: { curIndex: number; switchIndex: number; keys: Array<string>; }): SchemaFormState<T> {
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

    private removeItemMapHandle(state: SchemaFormState<T>, { keys }: { keys: Array<string> }) {
        let curMeta = this.meta.getMeta(keys, false) || {};

        this.meta.data = this.con.getAllMeta(state, this.props);
        this.meta.removeMeta(keys);

        return this.con.mergeData(state, this.props, { meta: this.meta.data });
    }
}
