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

describe("theme的hoc", () => {
    let App, merge, roots;

    beforeEach(() => {
        class AppCom extends React.PureComponent {
            render() {
                return <span>hello world</span>;
            }
        }
        merge = new MergeLib(curAjv, "design", null, ["*"]);
        App = hocFactory.get("theme")()(AppCom);
    });

    it("获取正确的theme", () => {
        let root = shallowRender(App, {
            schemaId: "design",
            globalOptions: gloabelOptions,
            uiSchema: merge.mergeUiSchemaList[0]
        });

        expect(root.props.currentTheme).to.be.a("object");
    });

    it("获取错误的theme", () => {
        assert.throw(() => {
            shallowRender(App, {
                schemaId: "design",
                globalOptions: gloabelOptions,
                uiSchema: Object.assign({}, merge.mergeUiSchemaList[0], {
                    theme: "antd"
                })
            })
        }, "没有找到antd的样式！");
    });

});