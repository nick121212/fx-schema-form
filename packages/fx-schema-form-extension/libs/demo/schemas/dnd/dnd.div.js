export default {
    $id: "dnd-div",
    type: "object",
    properties: {
        className: {
            type: "string"
        },
        style: {
            type: "object",
            properties: {
                position: {
                    type: "string",
                    enum: ["static", "fixed", "relative", "absolute"]
                }
            }
        }
    }
};
//# sourceMappingURL=dnd.div.js.map