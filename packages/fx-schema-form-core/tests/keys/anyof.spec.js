import { assert, expect } from "chai";
import Ajv from "ajv";

import { schemaKeyWordFactory, ResolveLib } from "../../dist/index";

describe("key word of anyOf", () => {
    let test1, test, test2;
    before(() => {
        test1 = new ResolveLib({
            $id: "test1",
            type: "number",
            title: "测试的schema"
        });
        test2 = new ResolveLib({
            $id: "test2",
            type: "string",
            title: "测试的schema"
        });
        test = new ResolveLib({
            $id: "test",
            title: "测试anyOf的schema",
            anyOf: [
                {
                    $ref: "test2#"
                },
                {
                    $ref: "test1#"
                }
            ]
        });
    });

    it("anyOf中的schema被替换成了正确的schema;数量为2；$ids = [test2,test1]", () => {
        let schema = schemaKeyWordFactory.get("anyof")("", test.mergeSchema);

        expect(schema).to.be.a("object");
        expect(schema.anyOf.length).to.equal(2);
        expect(schema.anyOf[0].$ref).to.equal("test2#");
        expect(schema.anyOf[1].$ref).to.equal("test1#");
    });
});
