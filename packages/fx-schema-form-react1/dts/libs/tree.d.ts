export declare class TreeMap {
    private key;
    private value;
    private parent;
    private children;
    constructor(key: string, value: any, parent?: TreeMap);
    addChild(keys: Array<string | number>, value: any): TreeMap;
    getKey(): string;
    getCurrentKeys(): string[];
    getIndexInParent(): number | null;
    contains(key: string | number): TreeMap;
    containPath(keys: Array<string | number>): TreeMap;
    removeFromParent(): void;
}
