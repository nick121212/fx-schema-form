import {
    assert,
    expect
} from "chai";

import {
    TreeMap
} from "./tree";

describe("测试treemap", () => {
    let data = {
        a: 1,
        b: {
            c: [1, 2, 3]
        },
        d: {
            e: 50,
            f: 60
        }
    };

    // 根节点
    let tree = new TreeMap("root", {});

    tree.addChild(["root", "a"], {
        valid: false
    });
    tree.addChild(["root", "d"], {
        valid: false
    });
    tree.addChild(["root", "d", "e"], {
        valid: false
    });
    tree.addChild(["root", "d", "f"], {
        valid: false
    });
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

    let c = tree.contains("b").contains("c");
    let c0 = c.contains(0);

    c0.insertToFromParent(3);
    console.log(tree);
});