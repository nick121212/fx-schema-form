import { hasOwnProperty } from "../utils";
export class BaseFactory {
    constructor() {
        this.i = {};
        this.pi = {};
    }
    add(name, intance, override = false) {
        if (hasOwnProperty.call(this.pi, name) || !override && this.has(name)) {
            return false;
        }
        this.i[name] = intance;
        return true;
    }
    has(key) {
        return hasOwnProperty.call(this.i, key);
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
            if (this.has(key)) {
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