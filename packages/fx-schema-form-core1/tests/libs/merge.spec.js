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
        let merge = new MergeLib(ajv, "design", null, ["*"]);

        expect(merge.mergeUiSchemaList).to.be.a("array");
        expect(merge.mergeUiSchemaList.length).to.equal(6);

        merge = new MergeLib(ajv, "design", null, ["name", "dsModelIds"]);

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
        let merge = new MergeLib(ajv, "design", null, ["name", {
            key: "dsModelIds",
            title: "测试Title"
        }]);

        expect(merge.mergeUiSchemaList[1].title).to.equal("测试Title");
    });

    it("实例化MergeLib，schema取一个数组字段", () => {
        let merge = new MergeLib(ajv, "design", null, ["dsModelIds/-"]);
        let merge1 = new MergeLib(ajv, "design", null, ["*"]);
        let merge2 = new MergeLib(ajv, "design", null, ["dsModelIds/-/name"]);

        expect(merge.mergeUiSchemaList[0].keys.join()).to.equal(['dsModelIds', '-'].join());
        expect(merge2.mergeUiSchemaList[0].keys.join()).to.equal(['dsModelIds', '-', 'name'].join());
    });

    it("实例化MergeLib，测试无限级数组", () => {
        let merge = new MergeLib(ajv, "design", null, ["infoOptions/-"]);
        let merge1 = new MergeLib(ajv, merge.mergeUiSchemaList[0].schemaPath, merge.mergeUiSchemaList[0], ["infoOptions"]);
        let merge2 = new MergeLib(ajv, merge1.mergeUiSchemaList[0].schemaPath, merge1.mergeUiSchemaList[0], ["-"]);
        let merge3 = new MergeLib(ajv, merge2.mergeUiSchemaList[0].schemaPath, merge2.mergeUiSchemaList[0], ["*"]);
        let merge4 = new MergeLib(ajv, merge.mergeUiSchemaList[0].schemaPath, merge.mergeUiSchemaList[0], ["infoOptions/-/label"]);

        expect(merge3.mergeUiSchemaList.length).to.equal(3);
        expect(merge3.mergeUiSchemaList[0].keys.join()).to.equal(["infoOptions", "-", "infoOptions", "-", "label"].join());
        expect(merge3.mergeUiSchemaList[1].keys.join()).to.equal(["infoOptions", "-", "infoOptions", "-", "data"].join());
        expect(merge3.mergeUiSchemaList[2].keys.join()).to.equal(["infoOptions", "-", "infoOptions", "-", "infoOptions"].join());
        expect(merge3.mergeUiSchemaList[0].keys.join()).to.equal(merge4.mergeUiSchemaList[0].keys.join());
    });
    // design/infoOptions/-/name
});