import { assert, expect } from "chai";
import Ajv from "ajv";

import { schemaKeyWordFactory, ResolveLib } from "../../dist/index.dev";

describe("key word of oneof", () => {
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
            title: "测试oneof的schema",
            oneOf: [
                {
                    $ref: "test2#"
                },
                {
                    $ref: "test1#"
                }
            ]
        });
    });

    it("oneOf中的schema被替换成了正确的schema;数量为2；$ids = [test2,test1]", () => {
        let schema = schemaKeyWordFactory.get("oneof")("", test.mergeSchema);

        expect(schema).to.be.a("object");
        expect(schema.oneOf.length).to.equal(2);
        expect(schema.oneOf[0].$ref).to.equal("test2#");
        expect(schema.oneOf[1].$ref).to.equal("test1#");
    });
});
