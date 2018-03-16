export default {
    type: "object",
    $id: "dnd-tree",
    title: "二叉树结构",
    properties: {
        root: {
            type: "object",
            properties: {
                value: {
                    type: "string"
                },
                leftNode: {
                    $ref: "dnd-tree#/properties/root"
                },
                rightNode: {
                    $ref: "dnd-tree#/properties/root"
                }
            }
        }
    }
};
//# sourceMappingURL=tree.js.map