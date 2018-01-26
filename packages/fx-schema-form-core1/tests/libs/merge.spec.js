import {
    assert,
    expect
} from "chai";
import Ajv from "ajv";

import {
    schemaTypeFactory,
    schemaFieldFactory,
    schemaKeysFactory,
    ResolveLib,
    MergeLib
} from "../../dist";

describe("测试MergeLib类", () => {
    let ajv;

    before(() => {
        ajv = new Ajv({
            extendRefs: true,
            missingRefs: true
        });
        schemaFieldFactory.clear();
        schemaKeysFactory.clear();

        let b = [new ResolveLib(ajv, {
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
                        type: "object",
                        properties: {
                            name: {
                                type: "string"
                            }
                        }
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
        })];
    });

    it("实例化MergeLib，返回正确的uiSchema", () => {
        let merge = new MergeLib(ajv, "design", [], ["*"]);

        expect(merge.mergeUiSchemaList).to.be.a("array");
        expect(merge.mergeUiSchemaList.length).to.equal(6);

        merge = new MergeLib(ajv, "design", [], ["name", "dsModelIds"]);

        expect(merge.mergeUiSchemaList.length).to.equal(2);
        expect(merge.mergeUiSchemaList[0].key).to.equal("design/name");
        expect(merge.mergeUiSchemaList[0].keys.join()).to.equal(["name"].join());

    });

    it("实例化MergeLib，填写错误的schemaPath=design1，返回错误：'design1 not exist or design1 did not resolve yet.'", () => {
        assert.throw(() => {
            let merge = new MergeLib(ajv, "design1", [], ["*"]);
        });
    });

    it("实例化MergeLib，测试uiSchema的数据合并", () => {
        let merge = new MergeLib(ajv, "design", [], ["name", {
            key: "dsModelIds",
            title: "测试Title"
        }]);

        expect(merge.mergeUiSchemaList[1].title).to.equal("测试Title");
    });

    it("实例化MergeLib，schema取一个数组字段", () => {
        let merge = new MergeLib(ajv, "design", [], ["dsModelIds/-"]);
        let merge1 = new MergeLib(ajv, "design", [], ["*"]);
        let merge2 = new MergeLib(ajv, "design", [], ["dsModelIds/-/name"]);

        expect(merge.mergeUiSchemaList[0].keys.join()).to.equal(['dsModelIds', '-'].join());
        expect(merge2.mergeUiSchemaList[0].keys.join()).to.equal(['dsModelIds', '-', 'name'].join());
    });

});