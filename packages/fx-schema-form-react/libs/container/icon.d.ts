export declare abstract class ConBase<S, P, T> {
    getActions(state: S, props: P & any): any;
    abstract getState(state: S, props: P): T;
    abstract getAllData(state: S, props: P): T;
    abstract getAllMeta(state: S, props: P): T;
    abstract getItemData(state: S, props: P): T;
    abstract getItemMeta(state: S, props: P): T;
    abstract updateState(state: S, props: P, data: any): S;
    abstract mergeData(state: S, props: P, data: any): S;
    abstract getOriginData(state: S, props: P): T;
    abstract initData(props: S, data: any): any;
    abstract updateItem(state: any, props: any, data: any, keyInfo: any): any;
    abstract addItem(state: S, props: P, data: any, keyInfo: any): any;
    abstract removeItem(state: S, props: P, data: any, keyInfo: any): any;
    abstract switchItem(state: S, props: P, from: any, to: any, keyInfo: any): any;
}
