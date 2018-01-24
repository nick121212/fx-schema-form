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

        new ResolveLib(ajv, {
            $id: "test",
            title: "测试oneof的schema",
            type: "array",
            items: {
                type: "string"
            }
        });

        schema = schemaTypeFactory.get("array")(ajv.getSchema("test").schema, "test#", ajv);
    });

    it("测试数组的类型转换", () => {
        expect(schema).to.be.a("object");
    });

    // it("验证schemaFieldFactory中的key是否正确", () => {
    //     expect(schemaFieldFactory.has("test#")).to.equal(true);
    //     expect(schemaFieldFactory.has("test1#")).to.equal(true);
    //     expect(schemaFieldFactory.has("test2#")).to.equal(true);
    // });

    // it("验证schemaKeysFactory中的key是否正确", () => {
    //     expect(schemaKeysFactory.get("test")).to.equal("test#");
    //     expect(schemaKeysFactory.get("test1")).to.equal("test1#");
    //     expect(schemaKeysFactory.get("test2")).to.equal("test2#");
    // });

});