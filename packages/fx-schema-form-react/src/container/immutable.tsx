import Immutable from "immutable";
import clone from "lodash.clonedeep";

import { ConBase } from "./icon";
import { MetaData, SchemaFormMeta } from "../libs/meta";
import { SchemaFormCreate } from "../libs/create";
import { SchemaFormItemProps } from "../components/formitem";

export class ImmutableCon extends ConBase<any, SchemaFormItemProps, any> {
    private resolveKeys(data: Immutable.Map<string, any>, keys: Array<string>) {
        if (data.hasIn(keys)) {
            return data;
        }

        for (let i = 0, n = keys.length; i < n; i++) {
            let mKeys = [].concat(keys).splice(0, i + 1);

            if (!data.hasIn(mKeys)) {
                mKeys.pop();
                if (!data.hasIn(mKeys)) {
                    if (keys[i].constructor === Number) {
                        data = data.setIn(mKeys, Immutable.List());
                    } else {
                        data = data.setIn(mKeys, Immutable.Map());
                    }
                }
            }
        }

        return data;
    }
    public getState(state: Immutable.Map<string, any>, props: SchemaFormItemProps) {
        return state.getIn(props.reducerKeys || []) || Immutable.Map();
    }
    public getAllData(state: Immutable.Map<string, any>, props: SchemaFormItemProps) {
        let curState = this.getState(state, props);

        return curState.get("data");
    }
    public getAllMeta(state: Immutable.Map<string, any>, props: SchemaFormItemProps) {
        let curState = this.getState(state, props);

        return curState.get("meta").toJS();
    }
    public getItemData(state: Immutable.Map<string, any>, props: SchemaFormItemProps) {
        const jData = this.getAllData(state, props);
        const { schemaKey, mergeSchema } = props;
        const { keys = [] } = mergeSchema;

        return jData.getIn(keys);
    }
    public getItemMeta(state: Immutable.Map<string, any>, props: SchemaFormItemProps) {
        const { schemaKey, mergeSchema } = props;
        const { keys = [] } = mergeSchema;
        const metaData = SchemaFormCreate.metas[schemaKey];

        return Immutable.fromJS(metaData.getMeta(keys));
    }
    public updateState(state: Immutable.Map<string, any>, props: SchemaFormItemProps, data: any) {
        return Immutable.fromJS(data);
    }
    public mergeData(state: Immutable.Map<string, any>, props: SchemaFormItemProps, data: any) {
        let newState = state;

        if (data.data) {
            newState = newState.set("data", data.data);
        }
        if (data.meta) {
            if (!Immutable.Map.isMap(data.meta)) {
                data.meta = Immutable.fromJS(data.meta);
            }
            newState = newState.set("meta", data.meta);
        }

        return newState;
    }
    public getOriginData(state: Immutable.Map<string, any>, props: SchemaFormItemProps) {
        return this.getAllData(state, props);
    }
    public initData(props: any, data: any) {
        return Immutable.fromJS(data);
    }
    public updateItem(state: any, props: SchemaFormItemProps, data: any, keyInfo: any) {
        let jAllData: Immutable.Map<string, any> = this.getAllData(state, props);
        jAllData = this.resolveKeys(jAllData, keyInfo.keys);

        if (!Immutable.Map.isMap(data)) {
            data = Immutable.fromJS(data);
        }

        // jAllData = jAllData.removeIn(keyInfo.keys);

        return jAllData.setIn(keyInfo.keys, data);
    }
    public addItem(state: Immutable.Map<string, any>, props: SchemaFormItemProps, data: any, keyInfo: any) {
        let formItemData: Immutable.List<any> = this.getItemData(state, props) || Immutable.List();
        let jAllData: Immutable.Map<string, any> = this.getAllData(state, props);

        jAllData = this.resolveKeys(jAllData, keyInfo.keys);

        return jAllData.setIn(keyInfo.keys, formItemData.push(Immutable.fromJS(data)));
    }
    public removeItem(state: Immutable.Map<string, any>, props: SchemaFormItemProps, data: number, keyInfo: any) {
        let formItemData: Immutable.List<any> = this.getItemData(state, props) || Immutable.List();
        let jAllData: Immutable.Map<string, any> = this.getAllData(state, props);

        jAllData = this.resolveKeys(jAllData, keyInfo.keys);

        return jAllData.setIn(keyInfo.keys, formItemData.remove(data));
    }
    public canSwitch(state: Immutable.Map<string, any>, props: SchemaFormItemProps, from: number, to: number, keyInfo: any) {
        let formItemData: Immutable.List<any> = this.getItemData(state, props) || Immutable.List();

        if (formItemData.size <= to || to < 0) {
            return false;
        }

        return true;
    }
    public switchItem(state: Immutable.Map<string, any>, props: SchemaFormItemProps, from: number, to: number, keyInfo: any) {
        let formItemData: Immutable.List<any> = this.getItemData(state, props) || Immutable.List();
        let jAllData: Immutable.Map<string, any> = this.getAllData(state, props);
        let cur = formItemData.get(from);

        jAllData = this.resolveKeys(jAllData, keyInfo.keys);

        if (formItemData.size <= to || to < 0) {
            return state;
        }

        formItemData = formItemData.set(from, formItemData.get(to));
        formItemData = formItemData.set(to, cur);

        return jAllData.setIn(keyInfo.keys, formItemData);
    }
}
