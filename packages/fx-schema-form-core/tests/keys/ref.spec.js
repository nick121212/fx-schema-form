import {
    assert,
    expect
} from "chai";
import Ajv from "ajv";

import {
    schemaKeyWordFactory
} from "../../dist/index";

describe("key word of ref", () => {
    let ajv;

    before(() => {
        ajv = new Ajv();

        ajv.addSchema({
            $id: "test",
            type: "string",
            title: "测试的schema"
        });
    });

    it("抛出一个找不到test1的异常。", () => {
        assert.throw(() => {
            schemaKeyWordFactory.get("ref")({
                $ref: "test1#"
            }, ajv);
        });
    });

    it("返回一个schema的对象，$id=test", () => {
        let schema = schemaKeyWordFactory.get("ref")({
            $ref: "test#"
        }, ajv);

        expect(schema).to.be.a("object");
        expect(schema.$ref).to.equal("test#");
    });
});
