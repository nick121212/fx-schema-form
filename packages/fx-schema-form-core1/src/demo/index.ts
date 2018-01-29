import { schemaFieldFactory } from './../factory';
import ajv from "ajv";
import { JSONSchema6 } from "json-schema";

import { schemaKeysFactory, schemaKeyWordFactory, schemaTypeFactory, ResolveLib, MergeLib } from "../index";

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
                        type: "object"
                    },
                    infoOptions: {
                        $ref: "design#/properties/infoOptions"
                    }
                }
            }
        }
    }
};

let b11dfd = [new ResolveLib(curAjv, {
    $id: "test1",
    type: "number",
    title: "测试的schema"
}),

new ResolveLib(curAjv, {
    $id: "test2",
    type: "string",
    title: "测试的schema"
}),

new ResolveLib(curAjv, {
    $id: "test",
    title: "测试oneof的schema",
    type: "array",
    items: {
        type: "string"
    }
}),
new ResolveLib(curAjv, schema)];


let merge = new MergeLib(curAjv, "design", null, ["infoOptions/-"]);

let merge4 = new MergeLib(curAjv, merge.mergeUiSchemaList[0].schemaPath, merge.mergeUiSchemaList[0], ["infoOptions/-/label"]);


console.log(merge4.mergeUiSchemaList);


