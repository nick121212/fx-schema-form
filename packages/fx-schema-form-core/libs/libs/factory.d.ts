export declare class BaseFactory<T> {
    protected instances: {
        [id: string]: T;
    };
    private protectedInstances;
    add(name: string, intance: T, override?: boolean): void;
    has(name: string): boolean;
    get(name: string): T;
    lock(name: string): void;
    unLock(name: string): void;
}
