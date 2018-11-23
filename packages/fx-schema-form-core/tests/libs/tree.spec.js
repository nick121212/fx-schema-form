import {
    assert,
    expect
} from "chai";

import {
    TreeMap
} from "../../dist/index.dev";

describe("测试treemap", () => {
    let tree, treeValue = {
        test: true
    };

    beforeEach(() => {
        tree = new TreeMap("root", treeValue);

        tree.addChild(["root", "b", "c"], {
            valid: true
        });
        tree.addChild(["root", "b", "c", 0], {
            valid: 0
        });
        tree.addChild(["root", "b", "c", 1], {
            valid: 1
        });
        tree.addChild(["root", "b", "c", 2], {
            valid: 2
        });
        tree.addChild(["root", "b", "c", 3], {
            valid: 3
        });
        tree.addChild(["root", "b", "c", 4], {
            valid: 4
        });
    });


    it("根节点", () => {
        expect(tree).to.be.a("object");
        expect(tree.value).to.equal(treeValue);
    });

    it("添加节点", () => {
        let na = tree.addChild(["root", "a"], {
            valid: false
        });
        let na0 = tree.addChild(["root", "a", 0], {
            valid: false
        });

        let nd0 = tree.addChild(["root", "d", 0], {
            valid: false
        });

        expect(na).to.be.a("object");
        expect(na.parent).to.equal(tree);
        expect(na.children.length).to.equal(1);
        expect(na0.parent).to.equal(na);
        expect(na0.children.length).to.equal(0);

        expect(nd0.key).to.equal("-");
        expect(nd0.parent.key).to.equal("d");
        expect(nd0.children.length).to.equal(0);
    });

    it("删除节点", () => {
        let nbc = tree.contains("b").contains("c");
        let nbc1 = nbc.contains(1);

        // 删除 b->c->1
        nbc1.removeFromParent();

        expect(nbc.children.length).to.equal(4);
        // 删除b
        tree.contains("b").removeFromParent();

        expect(tree.contains("b")).to.equal(null);
    });

    it("移动位置,当前位置小于移动的位置", () => {
        let nbc = tree.contains("b").contains("c");
        let nbc0 = nbc.contains(0);

        nbc0.insertToFromParent(3);
        expect(nbc.contains(3).value).to.equal(nbc0.value);
    });

    it("移动位置,当前位置大于移动的位置", () => {
        let nbc = tree.contains("b").contains("c");
        let nbc4 = nbc.contains(4);

        nbc4.insertToFromParent(1);

        expect(nbc.contains(1)).to.equal(nbc4);
    });

    it("移动位置,移动位置不存在节点,创建新的节点", () => {
        tree = new TreeMap("root", treeValue);
        let dsModelData = tree.addChild(["dsModelData"]);
        let child;

        dsModelData.addChild([2], 2);

        child = dsModelData.containPath([1]);

        // console.log(dsModelData);

        // console.log(dsModelData);

        // child.insertToFromParent(0);

        // console.log(dsModelData);


        // child1.insertToFromParent(0);
        // expect(tree.contains("dsModelData").children[0]).to.equal(child1);
        // child1.insertToFromParent(0);
        // expect(tree.contains("dsModelData").children[0]).to.equal(child1);
        // child.insertToFromParent(0);
        // expect(tree.contains("dsModelData").children[1]).to.equal(child1);
    });


    it("遍历节点", () => {
        let nodeCount = 0;

        tree.forEach((node) => {
            nodeCount++;
            return node.value;
        });

        expect(nodeCount).to.equal(7);
    });
});
