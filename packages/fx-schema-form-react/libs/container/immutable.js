import Immutable from "immutable";
import { ConBase } from "./icon";
import { SchemaFormCreate } from "../libs/create";
export class ImmutableCon extends ConBase {
    resolveKeys(data, keys) {
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
                    }
                    else {
                        data = data.setIn(mKeys, Immutable.Map());
                    }
                }
            }
        }
        return data;
    }
    getState(state, props) {
        return state.getIn(props.reducerKeys || []) || Immutable.Map();
    }
    getAllData(state, props) {
        let curState = this.getState(state, props);
        return curState.get("data");
    }
    getAllMeta(state, props) {
        let curState = this.getState(state, props);
        return curState.get("meta").toJS();
    }
    getItemData(state, props) {
        const jData = this.getAllData(state, props);
        const { schemaKey, mergeSchema } = props;
        const { keys = [] } = mergeSchema;
        return jData.getIn(keys);
    }
    getItemMeta(state, props) {
        const { schemaKey, mergeSchema } = props;
        const { keys = [] } = mergeSchema;
        const metaData = SchemaFormCreate.metas[schemaKey];
        return metaData.getMeta(keys);
    }
    updateState(state, props, data) {
        return Immutable.fromJS(data);
    }
    mergeData(state, props, data) {
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
    getOriginData(state, props) {
        return this.getAllData(state, props);
    }
    initData(props, data) {
        return Immutable.fromJS(data);
    }
    updateItem(state, props, data, keyInfo) {
        let jAllData = this.getAllData(state, props);
        jAllData = this.resolveKeys(jAllData, keyInfo.keys);
        if (!Immutable.Map.isMap(data)) {
            data = Immutable.fromJS(data);
        }
        return jAllData.setIn(keyInfo.keys, data);
    }
    addItem(state, props, data, keyInfo) {
        let formItemData = this.getItemData(state, props) || Immutable.List();
        let jAllData = this.getAllData(state, props);
        jAllData = this.resolveKeys(jAllData, keyInfo.keys);
        return jAllData.setIn(keyInfo.keys, formItemData.push(Immutable.fromJS(data)));
    }
    removeItem(state, props, data, keyInfo) {
        let formItemData = this.getItemData(state, props) || Immutable.List();
        let jAllData = this.getAllData(state, props);
        jAllData = this.resolveKeys(jAllData, keyInfo.keys);
        return jAllData.setIn(keyInfo.keys, formItemData.remove(data));
    }
    canSwitch(state, props, from, to, keyInfo) {
        let formItemData = this.getItemData(state, props) || Immutable.List();
        if (formItemData.size <= to || to < 0) {
            return false;
        }
        return true;
    }
    switchItem(state, props, from, to, keyInfo) {
        let formItemData = this.getItemData(state, props) || Immutable.List();
        let jAllData = this.getAllData(state, props);
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
//# sourceMappingURL=immutable.js.map