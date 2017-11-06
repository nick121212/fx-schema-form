import { ComponentEnhancer } from "recompose";
import { BaseFactory } from "fx-schema-form-core";

import { RC } from "./types";
import { nsFactory } from "./libs/ns.factory";

import hocs from "./hocs";
import fields from "./fields";
import { FormReducer } from "./reducer/form";

const defaultTheme = {
    tempFactory: new BaseFactory<RC<any, any>>(),
    fieldFactory: new BaseFactory<RC<any, any>>(),
    widgetFactory: new BaseFactory<RC<any, any>>()
};

nsFactory.add("default", defaultTheme);

for (let key in fields) {
    if (fields.hasOwnProperty(key)) {
        let field = fields[key];

        defaultTheme.fieldFactory.add(key, field);
        defaultTheme.fieldFactory.lock(key);
    }
}

export {
    nsFactory,
    defaultTheme
};
