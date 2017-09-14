"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseFactory = (function () {
    function BaseFactory() {
        this.instances = {};
        this.protectedInstances = {};
    }
    BaseFactory.prototype.add = function (name, intance, override) {
        if (override === void 0) { override = false; }
        if (this.protectedInstances.hasOwnProperty(name)) {
            return console.error("name=\u3010" + name + "\u3011\u88AB\u9501\u5B9A\uFF0C\u8BF7\u5148\u89E3\u9501\uFF01");
        }
        if (!override && this.has(name)) {
            return console.error("\u5DF2\u7ECF\u5B58\u5728name=\u3010" + name + "\u3011\u7684\u5B9E\u4F8B\uFF01");
        }
        this.instances[name] = intance;
    };
    BaseFactory.prototype.has = function (name) {
        return this.instances.hasOwnProperty(name);
    };
    BaseFactory.prototype.get = function (name) {
        if (this.has(name)) {
            return this.instances[name];
        }
        throw new Error("base.factory-\u4E0D\u5B58\u5728name=\u3010" + name + "\u3011!");
    };
    BaseFactory.prototype.lock = function (name) {
        if (this.has(name)) {
            this.protectedInstances[name] = true;
        }
    };
    BaseFactory.prototype.unLock = function (name) {
        if (this.has(name)) {
            delete this.protectedInstances[name];
        }
    };
    return BaseFactory;
}());
exports.BaseFactory = BaseFactory;
//# sourceMappingURL=factory.js.map