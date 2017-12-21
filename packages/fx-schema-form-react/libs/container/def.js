import { ConBase } from "./icon";
import { SchemaFormCreate } from "../libs/create";
export class DefCon extends ConBase {
    constructor(conFactory) {
        super();
        this.conFactory = conFactory;
    }
    getContainer(props) {
        let meta = SchemaFormCreate.metas[props.schemaKey], key = meta.con;
        let container;
        if (this.conFactory.has(key)) {
            container = this.conFactory.get(key);
        }
        else {
            container = this.conFactory.get("default");
        }
        return container;
    }
    getState(state, props) {
        let container = this.getContainer(props);
        return container.getState(state, props);
    }
    getAllData(state, props) {
        let container = this.getContainer(props);
        return container.getAllData(state, props);
    }
    getAllMeta(state, props) {
        let container = this.getContainer(props);
        return container.getAllMeta(state, props);
    }
    getItemData(state, props) {
        let container = this.getContainer(props);
        return container.getItemData(state, props);
    }
    getItemMeta(state, props) {
        let container = this.getContainer(props);
        return container.getItemMeta(state, props);
    }
    updateState(state, props, data) {
        let container = this.getContainer(props);
        return container.updateState(state, props, data);
    }
    mergeData(state, props, data) {
        let container = this.getContainer(props);
        return container.mergeData(state, props, data);
    }
    getOriginData(state, props) {
        let container = this.getContainer(props);
        return container.getOriginData(state, props);
    }
    initData(props, data) {
        let container = this.getContainer(props);
        return container.initData(props, data);
    }
    updateItem(state, props, data, keyInfo) {
        let container = this.getContainer(props);
        return container.updateItem(state, props, data, keyInfo);
    }
    addItem(state, props, data, keyInfo) {
        let container = this.getContainer(props);
        return container.addItem(state, props, data, keyInfo);
    }
    removeItem(state, props, data, keyInfo) {
        let container = this.getContainer(props);
        return container.removeItem(state, props, data, keyInfo);
    }
    switchItem(state, props, from, to, keyInfo) {
        let container = this.getContainer(props);
        return container.switchItem(state, props, from, to, keyInfo);
    }
}
//# sourceMappingURL=def.js.map