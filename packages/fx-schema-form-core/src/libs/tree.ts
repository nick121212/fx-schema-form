import { isNumber } from "../utils";

export type Tsn = string | number;

/**
 * tree map struct
 * 这里用来记录数据的元数据信息
 * 元数据信息包括，isValid，isLoading，isShow，...etc
 */
export class TreeMap {
    public children: TreeMap[] = [];

    /**
   * 构造函数
   * @param   {String}  key    当前节点的key，用于计算位置
   * @param   {any}     value  当前节点的值
   * @param   {TreeMap} parent 当前节点的父亲节点
   * @returns {Void}
   */
    constructor(private key: string, public value: any, public readonly parent?: TreeMap) {}

    /**
   * 添加一个孩子元素
   * 这里需要构建一颗完整的树，所以要遍历keys来动态创建节点
   * time complexity = O(1) / Constant
   * @param    {Array<Tsn>} keys  节点的路径 example ["root","b"]  root -> b
   * @param    {any}        value 孩子的数据
   * @returns  {TreeMap}
   */
    public addChild(keys: Array<Tsn>, value?: any): TreeMap {
        let curNode: TreeMap = this;
        let child: TreeMap | null = null;

        if (!keys.length) {
            return this;
        }

        keys = [ ...keys ];

        // 创建所有路径的节点
        while (keys.length) {
            const key: Tsn = keys.shift() as Tsn;

            child = curNode.contains(key);

            // 这里需要做一下特殊处理
            // 如果是数字的话，则说明是数组，key改成`-`
            // 如果不是数组的话，则无所谓顺序，直接push就行
            // 如果是数组，则要保证顺序和数据的下标一致
            if (!child) {
                if (isNumber(key)) {
                    child = new TreeMap("-", null, curNode);
                    curNode.children[key as number] = child;
                } else {
                    child = new TreeMap(key.toString(), null, curNode);
                    curNode.children.push(child);
                }
            }

            curNode = child;
        }

        if (child) {
            child.value = value;
        }

        return child as TreeMap;
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
   * @returns {string[]}
   */
    public getCurrentKeys(): Array<Tsn> {
        let keys: Array<Tsn> = [];

        if (this.parent) {
            keys = keys.concat(this.parent.getCurrentKeys());
        }

        return keys.concat([ this.key ]);
    }

    /**
   * 获取当前节点在父亲children中的下标索引
   * time complexity = O(1) / Constant
   * @returns {number}
   */
    public getIndexInParent(): number {
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

    /**
   * 从当前节点查找是否存在节点
   * time complexity = O(n) / Linear
   * @param   {Tsn}     key 节点的数据
   * @returns {TreeMap}
   */
    public contains(key: Tsn): TreeMap | null {
        // 如果是数字的话，直接返回children中对应下标的元素
        if (isNumber(key)) {
            if (this.children.length > key) {
                let child = this.children[key as number];

                if (!child) {
                    this.children[key as number] = new TreeMap("-", null, this);

                    child = this.children[key as number];
                }

                return child;
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
   * @param   {Array<Tsn>}    keys路径
   * @returns {TreeMap | null}
   */
    public containPath(keys: Array<Tsn>): TreeMap | null {
        let node: TreeMap | null = this;

        keys.forEach((key: Tsn) => {
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

    /**
   * 从父亲节点中删除当前节点
   * time complexity = O(n) / Linear
   */
    public removeFromParent(): void {
        let index = this.getIndexInParent();

        if (this.parent) {
            this.parent.children.splice(index, 1);
        }
    }

    /**
   * 移动到某个位置
   * time complexity = O(1) / Linear
   * @param   {Number} toIndex 需要移动到的位置
   * @returns {Void}
   */
    public insertToFromParent(toIndex: number): void {
        let curIndex = this.getIndexInParent();
        let offset = toIndex > curIndex && false ? 1 : 0;
        let splitIndex = toIndex;

        // 如果没有父亲，或者父亲没有子节点，或者当前位置小于0
        if (!this.parent || !this.parent.children || curIndex < 0) {
            return;
        }

        // 如果超出了父亲的子节点数量，添加一个
        if (this.parent.children.length <= toIndex) {
            this.parent.addChild([ toIndex ]);
        }

        // 父亲节点中删除当前元素
        this.removeFromParent();
        // 将当前节点插入到制定的位置
        // tslint:disable-next-line:max-line-length
        this.parent.children = this.parent.children.concat([]).splice(0, splitIndex - offset).concat([ this ]).concat(this.parent.children.splice(splitIndex - offset));
    }

    /**
   * 遍历指定节点下所有子节点的value数据,当前节点不计算在内
   * @param   {(node: TreeMap) => any}     clearFunc      map方法
   * @param   {Boolean}                    currentNode    是否包含当前节点
   * @returns {Void}
   */
    public forEach(clearFunc: (node: TreeMap) => any, currentNode = false) {
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
