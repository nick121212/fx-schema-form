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

describe("测试ResolveLib类", () => {
    let ajv;

    before(() => {
        ajv = new Ajv({
            extendRefs: true,
            missingRefs: true
        });
        schemaFieldFactory.clear();
        schemaKeysFactory.clear();
    });

    it("实例化ResolveLib，返回正确的schema", () => {
        let resolve = new ResolveLib(ajv, {
            $id: "test",
            type: "string"
        });

        expect(resolve.mergeSchema).to.be.a("object");
    });

    it("实例化ResolveLib，返回错误信息：'id is required by fx-schema-form-core'", () => {
        assert.throw(() => {
            let resolve = new ResolveLib(ajv, {
                type: "string"
            });
        });
    });

    it("ResolveLib中静态方法，【getSchemaId】【getDataKeys】", () => {
        expect(ResolveLib.getSchemaId("test#/properties/name")).to.equal("test");
        expect(ResolveLib.getSchemaId("test/properties/name")).to.equal("test");
        expect(ResolveLib.getDataKeys("test#/properties/name").join()).to.equal(["name"].join());
        expect(ResolveLib.getDataKeys("test#/properties/names/items").join()).to.equal(["names", "-"].join());
    });

});