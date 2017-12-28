import { SchemaFormCreate } from "../libs/create";

export abstract class ConBase<S, P, T> {
    public getActions(state: S, props: P & any) {
        const { schemaKey } = props;
        const metaData = SchemaFormCreate.metas[schemaKey];

        if (props.schemaFormOptions && props.schemaFormOptions.ajv) {
            metaData.init(props.schemaFormOptions, props.schemaKey);
        }

        return metaData.actions;
    }
    public abstract getState(state: S, props: P): T;
    public abstract getAllData(state: S, props: P): T;
    public abstract getAllMeta(state: S, props: P): T;
    public abstract getItemData(state: S, props: P): T;
    public abstract getItemMeta(state: S, props: P): T;
    public abstract updateState(state: S, props: P, data: any): S;
    public abstract mergeData(state: S, props: P, data: any): S;
    public abstract getOriginData(state: S, props: P): T;
    public abstract initData(props: S, data: any);

    public abstract updateItem(state: any, props: any, data: any, keyInfo: any);
    public abstract addItem(state: S, props: P, data: any, keyInfo: any);
    public abstract removeItem(state: S, props: P, data: any, keyInfo: any);
    public abstract switchItem(state: S, props: P, from: any, to: any, keyInfo: any);
    public abstract canSwitch(state: S, props: P, from: any, to: any, keyInfo: any);

}
