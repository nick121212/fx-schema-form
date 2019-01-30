import { assert, expect } from "chai";

import { schemaTypeFactory, schemaFieldFactory, schemaKeysFactory, ResolveLib } from "../../dist/index.dev";

describe("数组类型的解析", () => {
    let schema, test;

    before(() => {
        schemaFieldFactory.clear();
        schemaKeysFactory.clear();
        test = new ResolveLib({
            $id: "test",
            title: "测试oneof的schema",
            type: "array",
            items: {
                type: "string"
            }
        });

        schema = schemaTypeFactory.get("array")(test.mergeSchema, "test#");
    });

    it("测试数组的类型转换", () => {
        expect(schema).to.be.a("object");
        expect(schema.items).to.be.a("object");
        expect(schema.items.type).to.be.a("string");
        expect(schema.items.type).to.equal("string");
        expect(schema.items.keys.join()).to.equal([ "-" ].join());
    });

    it("验证schemaFieldFactory中的key是否正确", () => {
        expect(schemaFieldFactory.has("test#")).to.equal(true);
        expect(schemaFieldFactory.has("test#/items")).to.equal(true);
    });

    it("验证schemaKeysFactory中的key是否正确", () => {
        expect(schemaKeysFactory.get("test")).to.equal("test#");
        expect(schemaKeysFactory.get("test/-")).to.equal("test#/items");
    });
});
