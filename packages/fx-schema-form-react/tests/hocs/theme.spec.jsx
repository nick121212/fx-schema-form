import React from "react";
import {
    assert,
    expect
} from "chai";
import { MergeLib } from "fx-schema-form-core";
import {
    hocFactory
} from "../../dist";
import { schema, gloabelOptions, curAjv, shallowRender, AppCom } from "./data"
import { shallow, render, mount } from 'enzyme';

describe("theme的hoc", () => {
    let App, merge, roots;

    before(() => {
        merge = new MergeLib(curAjv, "design", null, ["*"]);
        App = hocFactory.get("theme")()(AppCom);
    });

    it("获取正确的theme", () => {
        let root = mount(<App schemaId={"design"} globalOptions={gloabelOptions} uiSchema={merge.mergeUiSchemaList[0]} />);

        expect(root.find(AppCom).props().currentTheme).to.be.a("object");
    });

    it("获取错误的theme", () => {
        assert.throw(() => {
            let root = mount(<App schemaId={"design"} globalOptions={gloabelOptions} uiSchema={Object.assign({}, merge.mergeUiSchemaList[0], {
                theme: "antd"
            })} />);
        }, "没有找到antd的样式！");
    });

});