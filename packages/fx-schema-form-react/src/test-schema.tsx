import { JSONSchema6 } from "json-schema";

export const testSchema: JSONSchema6 = {
    type: "object",
    $id: "test",
    required: [ "name" ],
    properties: {
        author: {
            type: "string"
        },
        listObj: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    a: {
                        type: "string"
                    },
                    b: {
                        type: "string"
                    }
                }
            }
        }
    }
};
