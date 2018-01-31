import React from "react";
import {
    assert,
    expect
} from "chai";
import TestUtils from "react-addons-test-utils";
import { MergeLib } from "fx-schema-form-core";
import {
    hocFactory
} from "../../dist";
import { schema, gloabelOptions, curAjv, shallowRender } from "./data"

describe("utils的hoc", () => {
    let App, merge, roots;

    beforeEach(() => {
        class AppCom extends React.PureComponent {
            render() {
                return <span>hello world</span>;
            }
        }

        merge = new MergeLib(curAjv, "design", null, ["*"]);
        App = hocFactory.get("utils")()(AppCom);
        roots = merge.mergeUiSchemaList.map((uiSchema) => {
            return shallowRender(App, {
                schemaId: "design",
                globalOptions: gloabelOptions,
                uiSchema: uiSchema
            });
        });
    });

    it("测试getTitle方法;0-面板名称，1-面板详情；3-dsModelIds", () => {
        expect(roots[0].props.getTitle).to.be.a("function");
        expect(roots[0].props.getTitle(roots[0].props)).to.eq(merge.mergeUiSchemaList[0].title);
        expect(roots[1].props.getTitle(roots[1].props)).to.eq(merge.mergeUiSchemaList[1].title);
        expect(roots[3].props.getTitle(roots[3].props)).to.eq(merge.mergeUiSchemaList[3].keys.join());
    });

    it("测试getPathKeys方法了;", () => {
        expect(roots[0].props.getPathKeys).to.be.a("function");

        expect(roots[0].props.getPathKeys(["a", "b"], "./").join()).to.eq(["a", "b"].join());
        expect(roots[0].props.getPathKeys(["a", "b"], "../").join()).to.eq(["a"].join());
        expect(roots[0].props.getPathKeys(["a", "b"], "/a").join()).to.eq(["a"].join());
        expect(roots[0].props.getPathKeys(["a", "b", "c"], "../d").join()).to.eq(["a", "b", "d"].join());
    });

    it("测试getOptions方法了;", () => {
        expect(roots[0].props.getOptions).to.be.a("function");
        expect(roots[0].props.getOptions(roots[0].props, "temp", "card")).to.be.a("object");
        expect(roots[0].props.getOptions(roots[0].props, "temp", "card").tempHocs).to.be.a("array");
        expect(roots[0].props.getOptions(roots[0].props, "temp", "card").a).to.eq(1);
    });

});