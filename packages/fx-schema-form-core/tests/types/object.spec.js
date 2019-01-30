import { assert, expect } from "chai";
import { schemaTypeFactory, schemaFieldFactory, schemaKeysFactory, ResolveLib } from "../../dist/index.dev";

describe("对象类型的解析", () => {
    let schema, test;

    before(() => {
        schemaFieldFactory.clear();
        schemaKeysFactory.clear();
        test = new ResolveLib({
            $id: "test",
            title: "测试的schema",
            type: "array",
            properties: {
                name: {
                    type: "string"
                },
                password: {
                    type: "string"
                },
                remember: {
                    type: "boolean"
                }
            }
        });

        schema = schemaTypeFactory.get("object")(test.mergeSchema, "test#");
    });

    it("测试对象的类型转换后的结果，", () => {
        expect(schema).to.be.a("object");
        // expect(schema.items).to.be.a("object");
        // expect(schema.items.type).to.be.a("string");
        // expect(schema.items.type).to.equal("string");
        // expect(schema.items.keys.join()).to.equal(["-"].join());
    });

    it("验证schemaFieldFactory中的key是否正确", () => {
        expect(schemaFieldFactory.has("test#")).to.equal(true);
        expect(schemaFieldFactory.has("test#/properties/name")).to.equal(true);
        expect(schemaFieldFactory.has("test#/properties/password")).to.equal(true);
        expect(schemaFieldFactory.has("test#/properties/remember")).to.equal(true);
    });

    it("验证schemaKeysFactory中的key是否正确", () => {
        expect(schemaKeysFactory.get("test")).to.equal("test#");
        expect(schemaKeysFactory.get("test/name")).to.equal("test#/properties/name");
        expect(schemaKeysFactory.get("test/password")).to.equal("test#/properties/password");
        expect(schemaKeysFactory.get("test/remember")).to.equal("test#/properties/remember");
    });
});
