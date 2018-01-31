"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TreeMap = (function () {
    function TreeMap(key, value, parent) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }
    TreeMap.prototype.addChild = function (keys, value) {
        var curKeys = this.getCurrentKeys();
        var curNode = this;
        var child;
        keys = keys.splice(curKeys.length);
        if (!keys.length) {
            return this;
        }
        while (keys.length) {
            var key = keys.shift();
            var isNumber = key.constructor === Number;
            child = curNode.contains(key);
            if (!child) {
                if (isNumber) {
                    child = new TreeMap("-", null, curNode);
                    curNode.children[key] = child;
                }
                else {
                    child = new TreeMap(key.toString(), null, curNode);
                    curNode.children.push(child);
                }
            }
            curNode = child;
        }
        child.value = value;
        return child;
    };
    TreeMap.prototype.getKey = function () {
        if (!this.key || this.key === "-") {
            return this.getIndexInParent().toString();
        }
        return this.key;
    };
    TreeMap.prototype.getCurrentKeys = function () {
        var keys = [];
        if (this.parent) {
            keys = keys.concat(this.parent.getCurrentKeys());
        }
        return keys.concat([this.key]);
    };
    TreeMap.prototype.getIndexInParent = function () {
        var children = this.parent.children;
        if (this.parent) {
            for (var i = 0, n = children.length; i < n; i++) {
                var child = children[i];
                if (child && child === this) {
                    return i;
                }
            }
        }
        return -1;
    };
    TreeMap.prototype.contains = function (key) {
        var isNumber = key.constructor === Number;
        if (isNumber) {
            if (this.children.length > key) {
                return this.children[key];
            }
            return null;
        }
        if (this.getKey() === key) {
            return this;
        }
        if (!this.children || this.children.length === 0) {
            return null;
        }
        for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            if (child && child.contains(key)) {
                return child;
            }
        }
        return null;
    };
    TreeMap.prototype.containPath = function (keys) {
        var node = this;
        keys.forEach(function (key) {
            if (!node) {
                return null;
            }
            node = node.contains(key);
            if (!node) {
                return null;
            }
        });
        return node;
    };
    TreeMap.prototype.removeFromParent = function () {
        var index = this.getIndexInParent();
        this.parent.children.splice(index, 1);
    };
    TreeMap.prototype.switchOneToOneFromParent = function (toIndex) {
        var curIndex = this.getIndexInParent();
        if (!this.parent || !this.parent.children || curIndex < 0) {
            return;
        }
        if (this.parent.children.length < (curIndex > toIndex ? curIndex : toIndex)) {
            return;
        }
        _a = [this.parent.children[toIndex], this.parent.children[curIndex]], this.parent.children[curIndex] = _a[0], this.parent.children[toIndex] = _a[1];
        var _a;
    };
    TreeMap.prototype.insertToFromParent = function (toIndex) {
        var curIndex = this.getIndexInParent();
        var offset = (toIndex > curIndex && false ? 1 : 0);
        if (!this.parent || !this.parent.children || curIndex < 0) {
            return;
        }
        if (this.parent.children.length <= toIndex) {
            this.parent.addChild(this.parent.getCurrentKeys().concat([toIndex]));
        }
        this.removeFromParent();
        this.parent.children = this.parent.children.concat([]).splice(0, toIndex - offset).concat(this)
            .concat(this.parent.children.splice(toIndex - offset));
    };
    TreeMap.prototype.forEach = function (clearFunc, currentNode) {
        if (currentNode === void 0) { currentNode = false; }
        if (currentNode) {
            this.value = clearFunc(this);
        }
        if (!this.children) {
            return;
        }
        for (var i = 0, n = this.children.length; i < n; i++) {
            if (this.children[i]) {
                this.children[i].value = clearFunc(this.children[i]);
                this.children[i].forEach(clearFunc);
            }
        }
    };
    return TreeMap;
}());
exports.TreeMap = TreeMap;
//# sourceMappingURL=tree.js.map