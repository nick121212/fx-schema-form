import React from "react";
import {
    assert,
    expect
} from "chai";
import { MergeLib } from "fx-schema-form-core";
import { compose } from "recompose";
import {
    hocFactory,
    defaultTheme
} from "../../dist";
import { schema, gloabelOptions, curAjv, shallowRender, AppCom } from "../data"
import { shallow, render, mount } from 'enzyme';

describe("make的hoc", () => {
    let merge, roots;

    before(() => {
        merge = new MergeLib(curAjv, "design", null, ["*"]);
    });

    it("测试make;组合theme,utils,array这3个hoc", () => {
        let App = hocFactory.get("utils")()(hocFactory.get("make")({
            hocs: ["theme", "field", "array"]
        })(AppCom));

        let m = mount(<App schemaId={"design"} globalOptions={gloabelOptions} uiSchema={merge.mergeUiSchemaList[0]} />);
        m = m.find(AppCom);

        expect(m.prop("getTitle")).to.be.a("function");
        expect(m.prop("getOptions")).to.be.a("function");
        expect(m.prop("getPathKeys")).to.be.a("function");
        expect(m.prop("FieldComponent")).to.be.a("function");
        expect(m.prop("addItem")).to.be.a("function");
    });

});