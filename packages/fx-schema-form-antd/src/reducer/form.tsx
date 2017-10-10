import { createAction, createReducer, EmptyActionCreator, SimpleActionCreator, ComplexActionCreator } from "redux-act";
import { Reducer } from "redux";
import jpp from "json-pointer";
import cloneDeep from "lodash.clonedeep";

import { MetaData, SchemaFormMeta } from "../libs/meta";

export interface SchemaFormState<T> {
    data: T;
    meta: MetaData;
}

export interface Actions {
    updateItem: SimpleActionCreator<{ keys: Array<string>, data: any }>;
    toggleItem: SimpleActionCreator<{ keys: Array<string> }>;
    removeItem: SimpleActionCreator<{ keys: Array<string>, data: any }>;
    addItem: SimpleActionCreator<{ keys: Array<string>, data: any }>;
    switchItem: SimpleActionCreator<{ keys: Array<string>, data: any }>;
    validateAllField: EmptyActionCreator;
    initItemMeta: SimpleActionCreator<{ keys: Array<string>, data: any }>;
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
    private initItemMeta: SimpleActionCreator<{ keys: Array<string>, data: any }> = createAction("初始化元素的meta信息");
    /**
     * 验证所有的字段
     */
    private validateAllField: EmptyActionCreator = createAction("验证表单中所有的字段");

    constructor(private initialState: any) { }

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
            validateAllField: this.validateAllField,
            initItemMeta: this.initItemMeta
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
            [this.validateAllField as any]: this.validateAllFieldHandle.bind(this),
            [this.initItemMeta as any]: this.initMetaHandle.bind(this),
        }, this.initialState);
    }

    /**
    * 获取当前state的信息
    * @param state 当前的state
    */
    private getOrigin(state: SchemaFormState<any>): { originData: any; originMeta: MetaData } {
        let originData = cloneDeep(state.data);
        let originMeta = cloneDeep(state.meta);

        return { originData, originMeta };
    }

    /**
     * 验证所有字段
     * @param state 当前的state
     */
    private validateAllFieldHandle(state: SchemaFormState<T>): SchemaFormState<T> {
        let { originData, originMeta } = this.getOrigin(state);

        originMeta.validateAll(originData);

        return Object.assign({}, state, { meta: originMeta });
    }

    /**
     * 更新数据
     * @param state  state
     * @param param1 data
     */
    private updateItemHandle(state: SchemaFormState<T>,
        { keys, data, meta }: { keys: Array<string>, data: any, meta: { isValid: boolean } }): SchemaFormState<T> {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey(keys);

        jpp(originData).set(normalKey, data);
        originMeta.setMeta(keys, meta);

        return Object.assign({}, state, { data: originData, meta: originMeta });
    }

    private initMetaHandle(state: SchemaFormState<T>, { keys, meta }: { keys: Array<string>, meta: SchemaFormMeta }) {
        let originMeta = state.meta;
        let { normalKey } = originMeta.getKey(keys);
        let curMeta = originMeta.getMeta(keys, false) || {};

        originMeta.setMeta(keys, Object.assign({}, curMeta, meta), meta.type !== "array");

        return state;
    }

    private toggleItemHandle(state: SchemaFormState<T>, { keys }: { keys: Array<string> }): SchemaFormState<T> {
        let { originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey(keys);
        let curMeta = originMeta.getMeta(keys, false) || {};

        originMeta.setMeta(keys, Object.assign({}, curMeta, { isShow: !!!curMeta.isShow }), false);

        return Object.assign({}, state, { meta: originMeta });
    }

    private addItemHandle(state: SchemaFormState<T>, { keys, data }: { keys: Array<string>, data: any }): SchemaFormState<T> {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey(keys);
        let curData = jpp(originData).has(normalKey) ? jpp(originData).get(normalKey) : [];

        jpp(originData).set(normalKey, [...curData, data]);

        return Object.assign({}, state, { data: originData });
    }

    private removeItemHandle(state: SchemaFormState<T>, { keys, index }: { index: number, keys: Array<string> }): SchemaFormState<T> {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey([...keys, index.toString()]);

        if (originData && jpp(originData).has(normalKey)) {
            jpp(originData).remove(normalKey);
        }

        originMeta.removeMeta([...keys, index.toString()]);

        return Object.assign({}, state, { data: originData, meta: originMeta });
    }

    private switchItemHandle(state: SchemaFormState<T>,
        { keys, curIndex, switchIndex }: { curIndex: number; switchIndex: number; keys: Array<string>; }): SchemaFormState<T> {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey(keys);
        let curData = jpp(originData).get(normalKey);

        [curData[curIndex], curData[switchIndex]] = [curData[switchIndex], curData[curIndex]];

        jpp(originData).set(normalKey, curData);
        originMeta.switchMeta(keys, curIndex, switchIndex);

        return Object.assign({}, state, { data: originData, meta: originMeta });
    }
}
