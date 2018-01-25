export class TreeMap {
    constructor(key, value, parent) {
        this.key = key;
        this.value = value;
        this.parent = parent;
        this.children = [];
    }
    addChild(keys, value) {
        let curKeys = this.getCurrentKeys();
        let curNode = this;
        let child;
        keys = keys.splice(curKeys.length);
        while (keys.length) {
            let key = keys.shift();
            let isNumber = key.constructor === Number;
            child = curNode.contains(isNumber ? "-" : key.toString());
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
        let children = this.parent.children;
        if (this.parent) {
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
                return this.children[key];
            }
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
            node = node.contains(key);
        });
        return node;
    }
    removeFromParent() {
        let index = this.getIndexInParent();
        this.parent.children.splice(index, 1);
    }
    switchOneToOneFromParent(toIndex) {
        let curIndex = this.getIndexInParent();
        if (!this.parent || !this.parent.children || curIndex < 0) {
            return;
        }
        if (this.parent.children.length < (curIndex > toIndex ? curIndex : toIndex)) {
            return;
        }
        [this.parent.children[curIndex], this.parent.children[toIndex]] = [this.parent.children[toIndex], this.parent.children[curIndex]];
    }
    insertToFromParent(toIndex) {
        let curIndex = this.getIndexInParent();
        let offset = (toIndex > curIndex ? 1 : 0);
        if (!this.parent || !this.parent.children || curIndex < 0 || this.parent.children.length <= toIndex) {
            return;
        }
        this.removeFromParent();
        this.parent.children = this.parent.children.concat([]).splice(0, toIndex - offset).concat(this).concat(this.parent.children.splice(toIndex - offset));
    }
}
//# sourceMappingURL=tree.js.map