import jpp from "json-pointer";

import { ConBase } from "./icon";
import { MetaData, SchemaFormMeta } from "../libs/meta";
import { SchemaFormCreate } from "../libs/create";
import { SchemaFormItemProps } from "../components/formitem";
import { BaseFactory } from "fx-schema-form-core";

export class DefCon extends ConBase<any, SchemaFormItemProps, any> {
    constructor(private conFactory: BaseFactory<ConBase<any, any, any>>) {
        super();
    }

    private getContainer(props: any) {
        // let key = props.con || "default";
        let meta = SchemaFormCreate.metas[props.schemaKey], key = meta.con;
        let container: ConBase<any, any, any>;

        if (this.conFactory.has(key)) {
            container = this.conFactory.get(key);
        } else {
            container = this.conFactory.get("default");
        }

        return container;
    }

    public getState(state: any, props: SchemaFormItemProps) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.getState(state, props);
    }
    public getAllData(state: any, props: SchemaFormItemProps) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.getAllData(state, props);
    }

    public getAllMeta(state: any, props: SchemaFormItemProps) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.getAllMeta(state, props);
    }
    public getItemData(state: any, props: SchemaFormItemProps) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.getItemData(state, props);
    }
    public getItemMeta(state: any, props: SchemaFormItemProps) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.getItemMeta(state, props);
    }
    public updateState(state: any, props: any, data: any) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.updateState(state, props, data);
    }
    public mergeData(state: any, props: any, data: any) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.mergeData(state, props, data);
    }
    public getOriginData(state: any, props: SchemaFormItemProps) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.getOriginData(state, props);
    }

    public initData(props: any, data: any) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.initData(props, data);
    }
    public updateItem(state: any, props: SchemaFormItemProps, data: any, keyInfo: any) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.updateItem(state, props, data, keyInfo);
    }
    public addItem(state: any, props: SchemaFormItemProps, data: any, keyInfo: any) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.addItem(state, props, data, keyInfo);
    }
    public removeItem(state: any, props: SchemaFormItemProps, data: number, keyInfo: any) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.removeItem(state, props, data, keyInfo);
    }

    public switchItem(state: any, props: SchemaFormItemProps, from: number, to: number, keyInfo: any) {
        let container: ConBase<any, any, any> = this.getContainer(props);

        return container.switchItem(state, props, from, to, keyInfo);
    }
}
