/**
 * 实例的工厂类
 */
export class BaseFactory<T> {
    protected instances: { [id: string]: T; } = {};
    private protectedInstances: { [id: string]: boolean; } = {};

    /**
     * 添加一个实例
     * @param name     {string}    实例的名称
     * @param engine   {IEngine}   实例
     * @param override {boolean}   是否覆盖
     * @return         {void}
     */
    public add(name: string, intance: T, override = false): void {
        if (this.protectedInstances.hasOwnProperty(name)) {
            return console.error(`name=【${name}】被锁定，请先解锁！`);
        }

        if (!override && this.has(name)) {
            return console.error(`已经存在name=【${name}】的实例！`);
        }
        this.instances[name] = intance;
    }

    public has(name: string): boolean {
        return this.instances.hasOwnProperty(name);
    }

    /**
     * 获取一个实例
     * @param name    {String}  实例标志
     */
    public get(name: string): T {
        if (this.has(name)) {
            return this.instances[name];
        }

        throw new Error(`base.factory-不存在name=【${name}】!`);
    }

    /**
     * 锁定实例
     * @param name 实例名称
     */
    public lock(name: string): void {
        if (this.has(name)) {
            this.protectedInstances[name] = true;
        }
    }
    /**
     * 解锁实例
     * @param name 实例名称
     */
    public unLock(name: string): void {
        if (this.has(name)) {
            delete this.protectedInstances[name];
        }
    }
}
