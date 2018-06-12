export class TreeMap {
    constructor(key, value, parent) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }
    addChild(keys, value) {
        let curNode = this;
        let child = null;
        if (!keys.length) {
            return this;
        }
        keys = [...keys];
        while (keys.length) {
            let key = keys.shift();
            let isNumber = key.constructor === Number;
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
        if (child) {
            child.value = value;
        }
        return child;
    }
    getKey() {
        if (!this.key || this.key === "-") {
            return this.getIndexInParent().toString();
        }
        return this.key;
    }
    getCurrentKeys() {
        let keys = [];
        if (this.parent) {
            keys = keys.concat(this.parent.getCurrentKeys());
        }
        return keys.concat([this.key]);
    }
    getIndexInParent() {
        if (this.parent) {
            let children = this.parent.children;
            for (let i = 0, n = children.length; i < n; i++) {
                let child = children[i];
                if (child && child === this) {
                    return i;
                }
            }
        }
        return -1;
    }
    contains(key) {
        let isNumber = key.constructor === Number;
        if (isNumber) {
            if (this.children.length > key) {
                let child = this.children[key];
                if (!child) {
                    this.children[key] = new TreeMap("-", null, this);
                    child = this.children[key];
                }
                return child;
            }
            return null;
        }
        if (this.getKey() === key) {
            return this;
        }
        if (!this.children || this.children.length === 0) {
            return null;
        }
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
            if (child && child.contains(key)) {
                return child;
            }
        }
        return null;
    }
    containPath(keys) {
        let node = this;
        keys.forEach((key) => {
            if (!node) {
                return null;
            }
            node = node.contains(key);
            if (!node) {
                return null;
            }
            return null;
        });
        return node;
    }
    removeFromParent() {
        let index = this.getIndexInParent();
        if (this.parent) {
            this.parent.children.splice(index, 1);
        }
    }
    insertToFromParent(toIndex) {
        let curIndex = this.getIndexInParent();
        let offset = (toIndex > curIndex && false) ? 1 : 0;
        let splitIndex = toIndex;
        if (!this.parent || !this.parent.children || curIndex < 0) {
            return;
        }
        if (this.parent.children.length <= toIndex) {
            this.parent.addChild([toIndex]);
        }
        this.removeFromParent();
        this.parent.children = this.parent.children.concat([]).splice(0, splitIndex - offset).concat([this])
            .concat(this.parent.children.splice(splitIndex - offset));
    }
    forEach(clearFunc, currentNode = false) {
        if (currentNode) {
            this.value = clearFunc(this);
        }
        if (!this.children) {
            return;
        }
        for (let i = 0, n = this.children.length; i < n; i++) {
            if (this.children[i]) {
                this.children[i].value = clearFunc(this.children[i]);
                this.children[i].forEach(clearFunc);
            }
        }
    }
}
//# sourceMappingURL=tree.js.map