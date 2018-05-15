export declare class BaseFactory<T> {
    protected i: {
        [id: string]: T;
    };
    private pi;
    add(name: string, intance: T, override?: boolean): boolean;
    has(key: string): boolean;
    get(key: string): T;
    lock(key: string): void;
    unLock(key: string): void;
    forEach(func: (key: string, val: T) => any): void;
    clear(): void;
}
