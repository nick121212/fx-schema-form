import {
    assert,
    expect
} from "chai";
import Ajv from "ajv";

import {
    schemaKeyWordFactory
} from "../../dist/index.dev";

describe("key word of ref", () => {
    let ajv;

    before(() => {
        ajv = new Ajv();
        // schemaKeyWordFactory.clear();
        ajv.addSchema({
            $id: "test",
            type: "string",
            title: "测试的schema"
        });
    });

    it("抛出一个找不到test2的异常。", () => {
        assert.throw(() => {
            schemaKeyWordFactory.get("ref")("",{
                $ref: "test5#"
            }, ajv);
    });
});

it("返回一个schema的对象，$id=test", () => {
    let schema = schemaKeyWordFactory.get("ref")("", {
        $ref: "test#"
    }, ajv);

    expect(schema).to.be.a("object");
    expect(schema.$ref).to.equal("test#");
});
});