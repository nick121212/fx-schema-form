export default {
    type: "object",
    $id: "design",
    properties: {
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
