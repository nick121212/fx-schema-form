export declare type Tsn = string | number;
export declare class TreeMap {
    private key;
    value: any;
    readonly parent: TreeMap | undefined;
    children: TreeMap[];
    constructor(key: string, value: any, parent?: TreeMap | undefined);
    addChild(keys: Array<Tsn>, value?: any): TreeMap | null;
    getKey(): string;
    getCurrentKeys(): Array<Tsn>;
    getIndexInParent(): number;
    contains(key: Tsn): TreeMap | null;
    containPath(keys: Array<Tsn>): TreeMap | null;
    removeFromParent(): void;
    insertToFromParent(toIndex: number): void;
    forEach(clearFunc: (node: TreeMap) => any, currentNode?: boolean): void;
}
