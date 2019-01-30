import {
    assert,
    expect
} from "chai";

import {
    schemaKeyWordFactory,
    schemaKeysFactory,
    schemaFieldFactory,
    ResolveLib
} from "../../dist/index";

describe("key word of definitions", () => {
    const testSchema = {
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
    };


    before(() => {
        new ResolveLib(testSchema);
    });

    it("使用definitions关键字", () => {
        let schema = schemaKeyWordFactory.get("definitions")("", testSchema);

        expect(schema).to.be.a("object");
        expect(schemaKeysFactory.has("test/definitions/dt")).to.eq(true);
        expect(schemaKeysFactory.get("test/definitions/dt")).to.eq("test#/definitions/dt");
    });

});
