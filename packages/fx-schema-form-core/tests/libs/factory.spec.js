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
} from "../../dist/index.dev";

describe("测试Factory类", () => {
    let ajv;

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
    });

    it("Factory类是一个对象, 拥有get，add，has，lock，unlock，forEach，clear方法", () => {
        expect(schemaFieldFactory).to.be.a("object");
        expect(schemaFieldFactory.get).to.be.a("function");
        expect(schemaFieldFactory.add).to.be.a("function");
        expect(schemaFieldFactory.has).to.be.a("function");
        expect(schemaFieldFactory.lock).to.be.a("function");
        expect(schemaFieldFactory.unLock).to.be.a("function");
        expect(schemaFieldFactory.forEach).to.be.a("function");
        expect(schemaFieldFactory.clear).to.be.a("function");
    });

    it("Factory测试add,has,get功能", () => {
        expect(schemaFieldFactory.add("1", {})).to.equal(true);
        expect(schemaFieldFactory.add("1", {}, true)).to.equal(true);
        expect(schemaFieldFactory.add("1", {})).to.equal(false);

        expect(schemaFieldFactory.has("1")).to.equal(true);
        expect(schemaFieldFactory.has("2")).to.equal(false);
        expect(schemaFieldFactory.get("1")).to.be.a("object");

        expect(schemaFieldFactory.get("2")).to.eq(null);
        // assert.throw(() => {
        //     schemaFieldFactory.get("2");
        // }, "name=[2]not exist");
    });

    it("Factory测试lock,unlock功能", () => {
        schemaFieldFactory.add("3");
        schemaFieldFactory.lock("3");

        expect(schemaFieldFactory.add("3", true, true)).to.equal(false);
        schemaFieldFactory.unLock("3");
        expect(schemaFieldFactory.add("3", {}, true)).to.equal(true);
    });

    it("Factory测试clear,forEach功能", () => {
        let loopCount = 0;

        schemaFieldFactory.forEach((k, v) => {
            expect(v).to.be.a("object");
            expect(k).to.be.a("string");
            if (++loopCount > 2) {
                return false;
            }
        });

        expect(loopCount).to.equal(3);
        
        schemaFieldFactory.clear();
        loopCount = 0;
        schemaFieldFactory.forEach((k, v) => {
            loopCount++;
        });
        expect(loopCount).to.equal(0);
    });

});