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
    public add(name: string, intance: T, override = false): boolean | void {
        if (this.protectedInstances.hasOwnProperty(name)) {
            return console.error(`name=【${name}】has locked!`);
        }

        if (!override && this.has(name)) {
            return console.error(`【${name}】exist!`);
        }
        this.instances[name] = intance;

        return true;
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

        throw new Error(`name=[${name}]not exist`);
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

    /**
     * 遍历所有的元素
     * @param func 遍历方法
     */
    public forEach(func: (key: string, val: T) => any): void {
        if (!func) {
            return;
        }

        for (const key in this.instances) {
            if (this.instances.hasOwnProperty(key)) {
                const element = this.instances[key];

                if (func(key, element) === false) {
                    break;
                }
            }
        }
    }

    /**
     * 清空当前的hash
     */
    public clear() {
        this.instances = {};
        this.protectedInstances = {};
    }
}
