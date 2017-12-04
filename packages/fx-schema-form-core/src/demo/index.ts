import { schemaMerge } from "../index";

const schema = {
    $async: true,
    type: "object",
    id: "datamodel.create",
    required: ["type", "name", "dsOption"],
    properties: {
        type: {
            type: "string",
        },
        name: {
            type: "string"
        },
        infographicId: {
            type: "number"
        },
        dsOption: {
            type: "object",
            properties: {
                version: {
                    type: "number"
                },
                sourceType: {
                    type: "string",
                    enum: ["VIPDATA", "APPFLOWDATA"]
                },
                menuId: {
                    type: "number"
                },
                parentMenuId: {
                    type: "number"
                },
                params: {
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            name: {
                                type: "string"
                            },
                            type: {
                                type: "string",
                                enum: ["fixed", "dimension", "period"]
                            },
                            data: {
                                oneOf: [
                                    { $ref: "test1#/" },
                                    { $ref: "test1#/" },
                                    { $ref: "test1#/" }
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
};

let uiSchema: any = ["array"];

let schemaaaa = {
    type: "object",
    required: ["dataFieldName", "correspondField"],
    id: "test1",
    properties: {
        dataFieldName: {
            type: "string"
        },
        correspondField: {
            type: "string"
        }
    }
};

let schemadd = {
    type: "object",
    properties: {
        data: {
            oneOf: [{
                type: "object",
                $ref: "test1"
            }, {
                type: "object",
                $ref: "test1"
            }]
        }
    }
};

uiSchema = [{
    key: "dsOption/params",
    items: ["dsOption/params/-/type", "dsOption/params/-/name", "dsOption/params/-/data"]
}];


let options: any = {
    parentKeys: []
};

let aa1a = schemaMerge.merge("test1", schemaaaa, ["*"], options);
let aaa = schemaMerge.merge("test", schema, uiSchema, options);

// let bbb = schemaMerge.merge("test", aaa[0], aaa[0].uiSchema.items, options);
// bbb = schemaMerge.merge("test", bbb[2].oneOf[0], ["*"], options);

// let bbbb = schemaMerge.merge("test", bbb[0], bbb[0].uiSchema.items, options);
//  bbbb = schemaMerge.merge("test", bbbb[0], bbbb[0].uiSchema.items, options);

console.log(aaa);

console.log(aaa);
