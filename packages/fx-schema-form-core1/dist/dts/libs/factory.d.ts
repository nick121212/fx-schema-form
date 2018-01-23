/**
 * 实例的工厂类
 */
export declare class BaseFactory<T> {
    protected instances: {
        [id: string]: T;
    };
    private protectedInstances;
    /**
     * 添加一个实例
     * @param name     {string}    实例的名称
     * @param engine   {IEngine}   实例
     * @param override {boolean}   是否覆盖
     * @return         {void}
     */
    add(name: string, intance: T, override?: boolean): void;
    has(name: string): boolean;
    /**
     * 获取一个实例
     * @param name    {String}  实例标志
     */
    get(name: string): T;
    /**
     * 锁定实例
     * @param name 实例名称
     */
    lock(name: string): void;
    /**
     * 解锁实例
     * @param name 实例名称
     */
    unLock(name: string): void;
    /**
     * 遍历所有的元素
     * @param func 遍历方法
     */
    forEach(func: (key: string, val: T) => any): void;
}
