import jpp from "json-pointer";

import { ConBase } from "./icon";
import { MetaData, SchemaFormMeta } from "../libs/meta";
import { SchemaFormCreate } from "../libs/create";
import { SchemaFormItemProps } from "../components/formitem";

export class JppCon extends ConBase<any, SchemaFormItemProps, any> {
    public getState(state: any, props: SchemaFormItemProps) {
        const key = jpp.compile(props.reducerKeys),
            jState = jpp(state);

        if (!jState.has(key)) {
            return {};
        }

        return jState.get(key);
    }
    public getAllData(state: any, props: SchemaFormItemProps) {
        let curState = this.getState(state, props);

        return curState.data;
    }

    public getAllMeta(state: any, props: SchemaFormItemProps) {
        let curState = this.getState(state, props);

        return curState.meta;
    }
    public getItemData(state: any, props: SchemaFormItemProps) {
        const jData = jpp(this.getAllData(state, props));
        const { schemaKey, mergeSchema } = props;
        const { keys = [] } = mergeSchema;
        const key = jpp.compile(keys);

        if (!jData.has(key)) {
            return undefined;
        }

        return jData.get(key);
    }
    public getItemMeta(state: any, props: SchemaFormItemProps) {
        const { schemaKey, mergeSchema } = props;
        const { keys = [] } = mergeSchema;
        const metaData = SchemaFormCreate.metas[schemaKey];

        return metaData.getMeta(keys);
    }
    public updateState(state: any, props: SchemaFormItemProps, data: any) {
        return Object.assign({}, state, data);
    }
    public mergeData(state: any, props: SchemaFormItemProps, data: any) {
        return Object.assign({}, state, data);
    }
    public getOriginData(state: any, props: SchemaFormItemProps) {
        return this.getAllData(state, props);
    }
    public initData(props: any, data: any) {
        return data;
    }
    public updateItem(state: any, props: SchemaFormItemProps, data: any, keyInfo: any) {
        let jAllData = jpp(this.getAllData(state, props));

        jAllData.set(keyInfo.normalKey, data);

        return jAllData;
    }
    public addItem(state: any, props: SchemaFormItemProps, data: any, keyInfo: any) {
        let formItemData = this.getItemData(state, props) || [];
        let jAllData = jpp(this.getAllData(state, props));

        jAllData.set(keyInfo.normalKey, [...formItemData, data]);

        return jAllData;
    }
    public removeItem(state: any, props: SchemaFormItemProps, data: number, keyInfo: any) {
        let formItemData = this.getItemData(state, props) || [];
        let jAllData = jpp(this.getAllData(state, props));

        formItemData.splice(formItemData, 1);

        jAllData.set(keyInfo.normalKey, formItemData);

        return jAllData;
    }

    public switchItem(state: any, props: SchemaFormItemProps, from: number, to: number, keyInfo: any) {
        let formItemData = this.getItemData(state, props) || [];
        let jAllData = jpp(this.getAllData(state, props));

        [formItemData[from], formItemData[to]] = [formItemData[to], formItemData[from]];

        jAllData.set(keyInfo.normalKey, formItemData);

        return jAllData;
    }
}
