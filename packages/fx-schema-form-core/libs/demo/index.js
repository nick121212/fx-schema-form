"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var schema = {
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
var uiSchema = ["array"];
var schemaaaa = {
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
var schemadd = {
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
var options = {
    parentKeys: []
};
var aa1a = index_1.schemaMerge.merge("test1", schemaaaa, ["*"], options);
var aaa = index_1.schemaMerge.merge("test", schema, uiSchema, options);
console.log(aaa);
console.log(aaa);
//# sourceMappingURL=index.js.map