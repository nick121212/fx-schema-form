export default {
    type: "object",
    $id: "design",
    required: ["name"],
    properties: {
        name: {
            type: "string",
            title: "名称"
        },
        children: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    data: {
                        type: "object",
                    },
                    children: {
                        $ref: "design#/properties/children"
                    }
                }
            }
        }
    }
};
