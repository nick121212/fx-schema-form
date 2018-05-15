export class BaseFactory {
    constructor() {
        this.i = {};
        this.pi = {};
    }
    add(name, intance, override = false) {
        if (this.pi.hasOwnProperty(name) || !override && this.has(name)) {
            return false;
        }
        this.i[name] = intance;
        return true;
    }
    has(key) {
        return this.i.hasOwnProperty(key);
    }
    get(key) {
        if (this.has(key)) {
            return this.i[key];
        }
        return null;
    }
    lock(key) {
        if (this.has(key)) {
            this.pi[key] = true;
        }
    }
    unLock(key) {
        if (this.has(key)) {
            delete this.pi[key];
        }
    }
    forEach(func) {
        if (!func) {
            return;
        }
        for (const key in this.i) {
            if (this.i.hasOwnProperty(key)) {
                const element = this.i[key];
                if (func(key, element) === false) {
                    break;
                }
            }
        }
    }
    clear() {
        this.i = {};
        this.pi = {};
    }
}
//# sourceMappingURL=factory.js.map