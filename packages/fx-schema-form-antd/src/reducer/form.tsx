import { createAction, createReducer, EmptyActionCreator, SimpleActionCreator, ComplexActionCreator } from "redux-act";
import { Reducer } from "redux";
import jpp from "json-pointer";
import cloneDeep from "lodash.clonedeep";

import { MetaData } from "../libs/meta";

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
            validateAllField: this.validateAllField
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
            [this.validateAllField as any]: this.validateAllFieldHandle.bind(this)
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

    private validateAllFieldHandle(state: SchemaFormState<T>): SchemaFormState<T> {
        let { originData, originMeta } = this.getOrigin(state);

        console.log(originMeta.validateAll(originData));
        return state;
    }

    /**
     * 更新数据
     * @param state  state
     * @param param1 data
     */
    private updateItemHandle(state: any,
        { keys, data, meta }: { keys: Array<string>, data: any, meta: { isValid: boolean } }): SchemaFormState<T> {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey(keys);

        jpp(originData).set(normalKey, data);
        originMeta.setMeta(keys, meta);

        return Object.assign({}, state, { data: originData, meta: originMeta });
    }

    private toggleItemHandle(state: any, { keys }: { keys: Array<string> }): SchemaFormState<T> {
        let { originMeta } = this.getOrigin(state); let { normalKey } = originMeta.getKey(keys);
        let curMeta = originMeta.getMeta(keys, false) || {};

        originMeta.setMeta(keys, Object.assign({}, curMeta, { isShow: !!!curMeta.isShow }), false);

        return Object.assign({}, state, { meta: originMeta });
    }

    private addItemHandle(state: any, { keys, data }: { keys: Array<string>, data: any }): SchemaFormState<T> {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey(keys);
        let curData = jpp(originData).has(normalKey) ? jpp(originData).get(normalKey) : [];

        jpp(originData).set(normalKey, [...curData, data]);

        return Object.assign({}, state, { data: originData });
    }

    private removeItemHandle(state: any, { keys, index }: { index: number, keys: Array<string> }): SchemaFormState<T> {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey([...keys, index.toString()]);

        if (originData && jpp(originData).has(normalKey)) {
            jpp(originData).remove(normalKey);
        }

        originMeta.removeMeta([...keys, index.toString()]);

        return Object.assign({}, state, { data: originData, meta: originMeta });
    }

    private switchItemHandle(state: any,
        { keys, curIndex, switchIndex }: { curIndex: number; switchIndex: number; keys: Array<string>; }): SchemaFormState<T> {
        let { originData, originMeta } = this.getOrigin(state);
        let { normalKey } = originMeta.getKey(keys);
        let curData = jpp(originData).get(normalKey);

        // 向上移动
        if (curIndex > switchIndex) {
            curData = [
                ...[].concat(curData).splice(0, switchIndex),
                curData[curIndex],
                curData[switchIndex],
                ...[].concat(curData).splice(curIndex + 1)
            ];
        } else {
            // 向下移动
            curData = [
                ...[].concat(curData).splice(0, curIndex),
                curData[switchIndex],
                curData[curIndex],
                ...[].concat(curData).splice(switchIndex + 1)
            ];
        }

        jpp(originData).set(normalKey, curData);
        originMeta.switchMeta(keys, curIndex, switchIndex);

        return Object.assign({}, state, { data: originData, meta: originMeta });
    }
}
