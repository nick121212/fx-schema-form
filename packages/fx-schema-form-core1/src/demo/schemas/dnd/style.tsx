export default {
    type: "object",
    $id: "dnd-style",
    properties: {
        width: { type: "string" },
        height: { type: "string" },
        fontSize: { type: "number" },
        textAlign: { type: "string", enum: ["left", "right", "center"] }
    }
};
