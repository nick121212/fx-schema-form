export declare class BaseFactory<T> {
    protected instances: {
        [id: string]: T;
    };
    private protectedInstances;
    add(name: string, intance: T, override?: boolean): boolean | void;
    has(name: string): boolean;
    get(name: string): T;
    lock(name: string): void;
    unLock(name: string): void;
    forEach(func: (key: string, val: T) => any): void;
    clear(): void;
}
