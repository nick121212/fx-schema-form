import {
    assert,
    expect
} from "chai";
import Ajv from "ajv";

import {
    schemaKeyWordFactory,
    schemaKeysFactory,
    schemaFieldFactory,
    ResolveLib
} from "../../dist/index";

describe("key word of definitions", () => {
    let ajv;

    before(() => {
        ajv = new Ajv({
            extendRefs: true,
            missingRefs: true
        });

        new ResolveLib(ajv, {
            $id: "test",
            type: "object",
            title: "测试的schema",
            definitions: {
                dt: {
                    type: "string",
                    title: "测试的定义"
                }
            },
            properties: {
                dt: {
                    $ref: "test#/definitions/dt"
                }
            }
        });
    });

    it("使用definitions关键字", () => {
        let schema = schemaKeyWordFactory.get("definitions")("", ajv.getSchema("test").schema, ajv);

        expect(schema).to.be.a("object");
        expect(schemaKeysFactory.has("test/definitions/dt")).to.eq(true);
        expect(schemaKeysFactory.get("test/definitions/dt")).to.eq("test#/definitions/dt");
    });

});