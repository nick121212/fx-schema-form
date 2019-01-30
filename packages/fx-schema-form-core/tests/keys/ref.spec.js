import { assert, expect } from "chai";
import { schemaKeyWordFactory, ResolveLib } from "../../dist/index.dev";

describe("key word of ref", () => {
    let test1;

    before(() => {
        test1 = new ResolveLib({
            $id: "test",
            type: "number",
            title: "测试的schema"
        });
    });

    it("抛出一个找不到test2的异常。", () => {
        const schema = schemaKeyWordFactory.get("ref")("", {
            $ref: "test5#"
        });

        expect(schema.$id).to.eq(undefined);
    });

    it("返回一个schema的对象，$id=test", () => {
        let schema = schemaKeyWordFactory.get("ref")("", {
            $ref: "test#"
        });

        expect(schema).to.be.a("object");
        expect(schema.$ref).to.equal("test#");
    });
});
