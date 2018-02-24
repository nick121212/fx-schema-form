export declare class BaseFactory<T> {
    protected i: {
        [id: string]: T;
    };
    private pi;
    add(name: string, intance: T, override?: boolean): boolean | void;
    has(name: string): boolean;
    get(name: string): T;
    lock(name: string): void;
    unLock(name: string): void;
    forEach(func: (key: string, val: T) => any): void;
    clear(): void;
}
