import React from "react";
import { Provider } from "react-redux";
import {
    assert,
    expect
} from "chai";
import { MergeLib } from "fx-schema-form-core";
import {
    hocFactory
} from "../../dist";
import { schema, gloabelOptions, curAjv, shallowRender, AppCom, store } from "../data"
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
        let m = mount(
            <Provider store={store}>
                <App schemaId={"design"} ajv={curAjv} globalOptions={gloabelOptions} parentKeys={["test"]} schemaId="dnd-oneof" reducerKey="schemaForm" formKey="test" uiSchema={merge.mergeUiSchemaList[1]} />
            </Provider>
        );
        m = m.find(AppCom);

        return m.prop("validate")(m.props(), 4).then((d) => {
            expect(d.isValid).to.eq(false);
        });

        return Promise.all([
            m.prop("validate")(m.props(), 4).then((d) => {
                expect(d.isValid).to.eq(false);
            }),
            m.prop("validate")(m.props(), 100).then((d) => {
                expect(d.isValid).to.eq(true);
            })
        ]);
    });

});