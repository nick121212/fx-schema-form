export class TreeMap {
    private children: TreeMap[] = [];

    constructor(private key: string, private value: any, private parent?: TreeMap) { }

    /**
     * 添加一个孩子元素
     * O(1) / Constant
     * @param keys  节点的路径
     * @param value 孩子的数据
     */
    public addChild(keys: Array<string | number>, value: any): TreeMap {
        let curKeys = this.getCurrentKeys();
        let curNode: TreeMap = this;
        let child;

        keys = keys.splice(curKeys.length);

        while (keys.length) {
            let key = keys.shift();
            let isNumber = key.constructor === Number;

            child = curNode.contains(isNumber ? "-" : key.toString());

            if (!child) {
                if (isNumber) {
                    child = new TreeMap("-", {}, curNode);
                    curNode.children[key] = child;
                } else {
                    child = new TreeMap(key.toString(), {}, curNode);
                    curNode.children.push(child);
                }
            }

            curNode = child;
        }

        child.value = value;

        return child;
    }

    /**
     * 获取当前的key
     * 如果key是-，则转换成数组下标
     */
    public getKey(): string {
        if (!this.key || this.key === "-") {
            return this.getIndexInParent().toString();
        }

        return this.key;
    }

    /**
     * 获取当前节点的keys路径
     */
    public getCurrentKeys(): string[] {
        let keys = [];

        if (this.parent) {
            keys = keys.concat(this.parent.getCurrentKeys());
        }

        return keys.concat([this.key]);
    }

    /**
     * 获取当前节点在父亲children中的下标索引
     * time complexity = O(1) / Constant
     */
    public getIndexInParent(): number | null {
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

    /**
     * 从当前节点查找是否存在节点
     * time complexity = O(n) / Linear
     * @param key 节点的数据
     */
    public contains(key: string | number): TreeMap {
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

    public containPath(keys: Array<string | number>): TreeMap {
        let node: TreeMap = this;

        keys.forEach((key: string | number) => {
            node = node.contains(key);
        });

        return node;
    }

    public removeFromParent(): void {
        // node.parent.children.
        let index = this.getIndexInParent();

        this.parent.children.splice(index, 1);
    }
}

