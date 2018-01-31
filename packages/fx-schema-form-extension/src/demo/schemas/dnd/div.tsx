export default {
    type: "object",
    $id: "dnd-div",
    properties: {
        className: {
            type: "string"
        },
        position: {
            type: "object",
            properties: {
                x: { type: "number" },
                y: { type: "number" }
            }
        },
        size: {
            type: "object",
            properties: {
                width: { type: "number" },
                height: { type: "number" }
            }
        }
    }
};
