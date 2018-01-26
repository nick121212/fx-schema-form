/**
 * tree map struct
 * 这里用来记录数据的元数据信息
 * 元数据信息包括，isValid，isLoading，isShow，...etc
 */
export class TreeMap {
    private children: TreeMap[] = [];

    /**
     * 构造函数
     * @param key    当前节点的key，用于计算位置
     * @param value  当前节点的值
     * @param parent 当前节点的父亲节点
     */
    constructor(private key: string, public value: any, private parent?: TreeMap) { }

    /**
     * 添加一个孩子元素
     * 这里需要构建一颗完整的树，所以要遍历keys来动态创建节点
     * time complexity = O(1) / Constant
     * @param keys  节点的路径 example ["root","b"]  root -> b
     * @param value 孩子的数据
     * @returns TreeMap
     */
    public addChild(keys: Array<string | number>, value?: any): TreeMap {
        let curKeys = this.getCurrentKeys();
        let curNode: TreeMap = this;
        let child;

        // 与当前路径多一次对比，去掉重复的部分
        keys = keys.splice(curKeys.length);

        // 创建所有路径的节点
        while (keys.length) {
            let key = keys.shift();
            let isNumber = key.constructor === Number;

            child = curNode.contains(key);

            // 这里需要做一下特殊处理
            // 如果是数字的话，则说明是数组，key改成`-`
            // 如果不是数组的话，则无所谓顺序，直接push就行
            // 如果是数组，则要保证顺序和数据的下标一致
            if (!child) {
                if (isNumber) {
                    child = new TreeMap("-", null, curNode);
                    curNode.children[key] = child;
                } else {
                    child = new TreeMap(key.toString(), null, curNode);
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
     * 如果key是`-`,代表是数组，则转换成数组下标
     * time complexity = O(1) / Constant
     * @returns string
     */
    public getKey(): string {
        if (!this.key || this.key === "-") {
            return this.getIndexInParent().toString();
        }

        return this.key;
    }

    /**
     * 获取当前节点的keys路径
     * time complexity = O(1) / Constant
     * @returns string[]
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
     * @returns number
     */
    public getIndexInParent(): number {
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
     * @returns TreeMap
     */
    public contains(key: string | number): TreeMap | null {
        let isNumber = key.constructor === Number;

        // 如果是数字的话，直接返回children中对应下标的元素
        if (isNumber) {
            if (this.children.length > key) {
                return this.children[key];
            }

            return null;
        }

        // 如果当前节点的key===要搜索的key，则返回本身
        if (this.getKey() === key) {
            return this;
        }

        // 如果没有children，则返回空
        if (!this.children || this.children.length === 0) {
            return null;
        }
        // 遍历子节点，层层递归，直到找到
        for (let i = 0; i < this.children.length; i++) {
            let child = this.children[i];

            if (child && child.contains(key)) {
                return child;
            }
        }

        return null;
    }

    /**
     * 根据给定的路径数组，返回对应的节点
     * time complexity = O(n) / Linear
     * @param keys 路径
     * @returns TreeMap | null
     */
    public containPath(keys: Array<string | number>): TreeMap | null {
        let node: TreeMap = this;

        keys.forEach((key: string | number) => {
            if (!node) {
                return null;
            }
            node = node.contains(key);

            if (!node) {
                return null;
            }
        });

        return node;
    }

    /**
     * 从父亲节点中删除当前节点
     * time complexity = O(n) / Linear
     */
    public removeFromParent(): void {
        let index = this.getIndexInParent();

        this.parent.children.splice(index, 1);
    }

    /**
     * 22交换位置
     * time complexity = O(1) / Linear
     * @param toIndex 交换位置的元素
     */
    public switchOneToOneFromParent(toIndex: number): void {
        let curIndex = this.getIndexInParent();

        // 如果没有父亲，获取父亲没有元素则返回
        if (!this.parent || !this.parent.children || curIndex < 0) {
            return;
        }

        // 如果父亲中不存在当前或者需要交换的索引，则返回
        if (this.parent.children.length < (curIndex > toIndex ? curIndex : toIndex)) {
            return;
        }

        // 22交换位置
        [this.parent.children[curIndex], this.parent.children[toIndex]] = [this.parent.children[toIndex], this.parent.children[curIndex]];

    }

    /**
     * 移动到某个位置
     * time complexity = O(1) / Linear
     * @param toIndex 需要移动到的位置
     */
    public insertToFromParent(toIndex: number): void {
        let curIndex = this.getIndexInParent();
        let offset = (toIndex > curIndex ? 1 : 0);

        // 如果没有父亲，或者父亲没有子节点，或者当前位置小于0
        if (!this.parent || !this.parent.children || curIndex < 0 || this.parent.children.length <= toIndex) {
            return;
        }

        // 现充父亲节点中删除当前元素
        this.removeFromParent();
        // 将当前节点插入到制定的位置
        this.parent.children = this.parent.children.concat([]).splice(0, toIndex - offset).concat(this)
            .concat(this.parent.children.splice(toIndex - offset));
    }
}
