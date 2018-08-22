export default {
    type: "object",
    $id: "dnd-div",
    default: {},
    properties: {
        className: {
            type: "string"
        },
        position: {
            type: "object",
            default: {},
            properties: {
                x: {
                    type: "number", default: 0,
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
