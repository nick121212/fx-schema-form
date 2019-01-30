import { assert, expect } from "chai";

import { schemaTypeFactory, schemaFieldFactory, schemaKeysFactory, ResolveLib, getSchemaId, getDataKeys } from "../../dist/index.dev";

describe("测试ResolveLib类", () => {
    before(() => {
        schemaFieldFactory.clear();
        schemaKeysFactory.clear();
    });

    it("实例化ResolveLib，返回正确的schema", () => {
        let resolve = new ResolveLib({
            $id: "test",
            type: "string"
        });

        expect(resolve.mergeSchema).to.be.a("object");
    });

    it("实例化ResolveLib，返回错误信息：'id is required by fx-schema-form-core'", () => {
        assert.throw(() => {
            let resolve = new ResolveLib({
                type: "string"
            });
        });
    });

    it("ResolveLib中静态方法，【getSchemaId】【getDataKeys】", () => {
        expect(getSchemaId("test#/properties/name")).to.equal("test");
        expect(getSchemaId("test/properties/name")).to.equal("test");
        expect(getDataKeys("test#/properties/name").join()).to.equal([ "name" ].join());
        expect(getDataKeys("test#/properties/names/items").join()).to.equal([ "names", "-" ].join());
    });

    it("测试isRequired", () => {
        let schema = {
            type: "object",
            $id: "dnd-oneof",
            title: "oneof测试schema",
            default: {},
            required: [ "type" ],
            properties: {
                type: {
                    type: "number",
                    enum: [ 1, 2, 3, 4 ],
                    title: "类型选择",
                    description: "1:数字,2:字符串,3:bool,4:object"
                },
                value: {
                    oneOf: [
                        {
                            $id: "dnd-oneof-number",
                            type: "number",
                            title: "这是一个数字类型"
                        },
                        {
                            $id: "dnd-oneof-string",
                            type: "string",
                            title: "这是一个字符串类型"
                        },
                        {
                            $id: "dnd-oneof-boolean",
                            type: "boolean",
                            title: "这是一个bool类型"
                        },
                        {
                            $id: "dnd-oneof-object",
                            type: "object",
                            title: "这是一个object类型",
                            default: {},
                            required: [ "a", "b" ],
                            properties: {
                                a: {
                                    type: "string",
                                    default: "nick"
                                },
                                b: {
                                    type: "boolean",
                                    default: true
                                }
                            }
                        }
                    ]
                }
            }
        };

        new ResolveLib(schema);

        expect(schemaFieldFactory.get("dnd-oneof#/properties/type").isRequired).to.eq(true);
        expect(schemaFieldFactory.get("dnd-oneof#/properties/value").isRequired).to.eq(false);
    });
});
