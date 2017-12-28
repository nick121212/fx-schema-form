import jpp from "json-pointer";
import { ConBase } from "./icon";
import { SchemaFormCreate } from "../libs/create";
export class JppCon extends ConBase {
    getState(state, props) {
        const key = jpp.compile(props.reducerKeys), jState = jpp(state);
        if (!jState.has(key)) {
            return {};
        }
        return jState.get(key);
    }
    getAllData(state, props) {
        let curState = this.getState(state, props);
        return curState.data;
    }
    getAllMeta(state, props) {
        let curState = this.getState(state, props);
        return curState.meta;
    }
    getItemData(state, props) {
        const jData = jpp(this.getAllData(state, props));
        const { schemaKey, mergeSchema } = props;
        const { keys = [] } = mergeSchema;
        const key = jpp.compile(keys);
        if (!jData.has(key)) {
            return undefined;
        }
        return jData.get(key);
    }
    getItemMeta(state, props) {
        const { schemaKey, mergeSchema } = props;
        const { keys = [] } = mergeSchema;
        const metaData = SchemaFormCreate.metas[schemaKey];
        return metaData.getMeta(keys);
    }
    updateState(state, props, data) {
        return Object.assign({}, state, data);
    }
    mergeData(state, props, data) {
        return Object.assign({}, state, data);
    }
    getOriginData(state, props) {
        return this.getAllData(state, props);
    }
    initData(props, data) {
        return data;
    }
    updateItem(state, props, data, keyInfo) {
        let jAllData = jpp(this.getAllData(state, props));
        jAllData.set(keyInfo.normalKey, data);
        return jAllData;
    }
    addItem(state, props, data, keyInfo) {
        let formItemData = this.getItemData(state, props) || [];
        let jAllData = jpp(this.getAllData(state, props));
        jAllData.set(keyInfo.normalKey, [...formItemData, data]);
        return jAllData;
    }
    removeItem(state, props, data, keyInfo) {
        let formItemData = this.getItemData(state, props) || [];
        let jAllData = jpp(this.getAllData(state, props));
        formItemData.splice(formItemData, 1);
        jAllData.set(keyInfo.normalKey, formItemData);
        return jAllData;
    }
    canSwitch(state, props, from, to, keyInfo) {
        let formItemData = this.getItemData(state, props) || [];
        if (formItemData.length <= to || to < 0) {
            return false;
        }
        return true;
    }
    switchItem(state, props, from, to, keyInfo) {
        let formItemData = this.getItemData(state, props) || [];
        let jAllData = jpp(this.getAllData(state, props));
        [formItemData[from], formItemData[to]] = [formItemData[to], formItemData[from]];
        jAllData.set(keyInfo.normalKey, formItemData);
        return jAllData;
    }
}
//# sourceMappingURL=jpp.js.map