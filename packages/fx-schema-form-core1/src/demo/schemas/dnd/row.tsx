export default {
    type: "object",
    $id: "dnd-row",
    properties: {
        className: {
            $ref: "dnd-common#/properties/className"
        },
        style: {
            type: "object",
            $ref: "dnd-common#/properties/style"
        }
    }
};
