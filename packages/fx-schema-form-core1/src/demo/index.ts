import ajv from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaFieldFactory, schemaKeysFactory, schemaKeyWordFactory, schemaTypeFactory, ResolveLib, MergeLib } from "../index";

import schemas from "./schemas";
import { setInterval } from "timers";
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

console.log(schemaFieldFactory, schemaKeysFactory);

let b = new MergeLib(curAjv, "design", [], ["name", "*", "dsModelIds"]).mergeUiSchemaList;

curAjv.validate(b[0], undefined);

console.log(curAjv.errors, curAjv.errorsText());

// b.forEach((val: any) => {
//     console.log(val);
//     if (val.type === "object" || val.type === "array") {
//         console.log(new MergeLib(curAjv, val.schemaPath, [], ["*"]).mergeUiSchemaList);
//     }
// });

let c = new MergeLib(curAjv, "design", [], ["infoOptions"]).mergeUiSchemaList;

setInterval(() => {
    c = new MergeLib(curAjv, (c[0] as any).schemaPath, [], ["infoOptions"]).mergeUiSchemaList;

    console.log(c[0]);
}, 2000);

// for (const key in schemas) {
//     if (schemas.hasOwnProperty(key)) {
//         const element = schemas[key];

//         a.push(new ResolveLib(curAjv, element));
//     }
// }

