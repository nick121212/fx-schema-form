import React from "react";
import {
    assert,
    expect
} from "chai";
import { MergeLib } from "fx-schema-form-core";
import {
    hocFactory
} from "../../dist";
import { schema, gloabelOptions, curAjv, shallowRender, AppCom } from "../data"
import { shallow, render, mount } from 'enzyme';

describe("merge的hoc", () => {
    let App, merge, roots;

    before(() => {
        merge = new MergeLib(curAjv, "design", null, ["*"]);
        App = hocFactory.get("merge")()(AppCom);
    });

    it("合并schema和uiSchema", () => {
        let root = mount(<App schemaId={"design"} uiSchemas={["*"]} ajv={curAjv} globalOptions={gloabelOptions}  />);

        expect(root.find(AppCom).props().mergeSchemaList.length).to.eq(6);
    });

    it("合并schema和uiSchema,输入错入的schemaId", () => {
        assert.throw(() => {
            let root = mount(<App schemaId={"design1"} uiSchemas={["*"]} ajv={curAjv} globalOptions={gloabelOptions}  />);
        });
    });
});