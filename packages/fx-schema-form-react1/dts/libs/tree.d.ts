export declare class TreeMap {
    private key;
    private value;
    private parent;
    private children;
    constructor(key: string, value: any, parent?: TreeMap);
    addChild(keys: Array<string | number>, value?: any): TreeMap;
    getKey(): string;
    getCurrentKeys(): string[];
    getIndexInParent(): number;
    contains(key: string | number): TreeMap | null;
    containPath(keys: Array<string | number>): TreeMap | null;
    removeFromParent(): void;
    switchOneToOneFromParent(toIndex: number): void;
    insertToFromParent(toIndex: number): void;
}
