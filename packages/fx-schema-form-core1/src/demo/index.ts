import ajv from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaFieldFactory, schemaKeyWordFactory, schemaTypeFactory, ResolveLib } from "../index";

import schemas from "./schemas";
// schemaFactory.add("$test", {
//     type: "string",
//     $id: "$test"
// });
const curAjv: ajv.Ajv = new ajv({
    allErrors: true,
    jsonPointers: true,
    useDefaults: true,
    $data: true,
    errorDataPath: "property",
    removeAdditional: true,
});
const schema: JSONSchema6 = {
    type: "object",
    $id: "design",
    required: ["name", "dsModelIds"],
    properties: {
        name: {
            type: "string",
            title: "面板名称"
        },
        description: {
            type: "string",
            title: "面板详情"
        },
        appType: {
            type: "string",
            title: "应用类型"
        },
        dsModelIds: {
            type: "array",
            items: {
                type: "number"
            }
        },
        dsModelData: {
            type: "object",
            properties: {
                data: {
                    type: "object"
                },
                ids: {
                    type: "object"
                }
            }
        },
        infoOptions: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    label: {
                        type: "string"
                    },
                    data: {
                        oneOf: [{
                            $id: "design-object",
                            type: "object",
                        }, {
                            $id: "design-string",
                            type: "string"
                        }]
                    },
                    infoOptions: {
                        $ref: "design#/properties/infoOptions"
                    }
                }
            }
        }
    }
};

let a = [
    new ResolveLib(curAjv, schema),
];

// for (const key in schemas) {
//     if (schemas.hasOwnProperty(key)) {
//         const element = schemas[key];

//         a.push(new ResolveLib(curAjv, element));
//     }
// }

console.log(schemaFieldFactory);
