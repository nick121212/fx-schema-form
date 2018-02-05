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

describe("field的hoc", () => {
    let App, merge, roots;

    before(() => {
        console.warn = () => { };
        merge = new MergeLib(curAjv, "design", null, ["*"]);
        App = hocFactory.get("utils")()(hocFactory.get("make")({
            hocs: ["theme", "field"]
        })(AppCom));
        roots = merge.mergeUiSchemaList.map((uiSchema) => {
            let m = mount(<App schemaId={"design"} globalOptions={gloabelOptions} uiSchema={uiSchema} />);

            return m.find(AppCom);
        });
    });

    it("测试field获取的WidgetComponent以及FieldComponent", () => {
        // console.log();

        roots.forEach((root) => {
            let type = root.props().uiSchema.type;

            if (type !== "object" && type != "array") {
                type = "default";
            }

            expect(root.props().FieldComponent).to.be.a("function");
            expect(root.props().WidgetComponent).to.eq(undefined);
            expect(root.props().FieldComponent).to.eq(defaultTheme.fieldFactory.get(type));
        });
    });

});