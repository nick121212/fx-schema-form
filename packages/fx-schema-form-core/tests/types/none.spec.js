import {
    assert,
    expect
} from "chai";
import Ajv from "ajv";

import {
    schemaTypeFactory,
    schemaFieldFactory,
    schemaKeysFactory,
    ResolveLib
} from "../../dist";

describe("普通类型的解析", () => {
    let ajv, schema;

    before(() => {
        ajv = new Ajv({
            extendRefs: true,
            missingRefs: true
        });
        schemaFieldFactory.clear();
        schemaKeysFactory.clear();
        new ResolveLib(ajv, {
            $id: "test1",
            type: "number",
            title: "测试的schema"
        });

        new ResolveLib(ajv, {
            $id: "test2",
            type: "string",
            title: "测试的schema"
        });

        new ResolveLib(ajv, {
            $id: "test",
            title: "测试oneof的schema",
            oneOf: [{
                $ref: "test2#"
            }, {
                $ref: "test1#"
            }]
        });

        schema = schemaTypeFactory.get("undefined")(ajv.getSchema("test").schema, "test#", ajv);
    });

    it("oneOf中的schema被替换成了正确的schema;数量为2；$ids = [test2,test1]", () => {
        expect(schema).to.be.a("object");
        expect(schema.oneOf.length).to.equal(2);
        expect(schema.oneOf[0].$ref).to.equal("test2#");
        expect(schema.oneOf[1].$ref).to.equal("test1#");
    });

    it("验证schemaFieldFactory中的key是否正确", () => {
        expect(schemaFieldFactory.has("test#")).to.equal(true);
        expect(schemaFieldFactory.has("test1#")).to.equal(true);
        expect(schemaFieldFactory.has("test2#")).to.equal(true);
    });

    it("验证schemaKeysFactory中的key是否正确", () => {
        expect(schemaKeysFactory.get("test")).to.equal("test#");
        expect(schemaKeysFactory.get("test1")).to.equal("test1#");
        expect(schemaKeysFactory.get("test2")).to.equal("test2#");
    });

});