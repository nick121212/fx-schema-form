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

describe("validate的hoc", () => {
    let merge, App;

    before(() => {
        merge = new MergeLib(curAjv, "dnd-oneof", null, ["*"]);
        App = hocFactory.get("utils")()(hocFactory.get("make")({
            hocs: ["validate"]
        })(AppCom));
    });

    it("测试validate方法;", () => {
        let m = mount(<App schemaId={"design"} ajv={curAjv} globalOptions={gloabelOptions} uiSchema={merge.mergeUiSchemaList[0]} />);
        m = m.find(AppCom);

        return m.prop("validate")(m.props(), "3").then((d) => {
            expect(d.isValid).to.eq(false);
        });
    });

});