import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { ErrorObject } from "ajv";

import { FxReducer } from "./reducers/reducer";
import { DefaultProps } from "./components";
import { NsFactory, SchemaFormNs } from "./models";
import { hocs } from "./hocs";
import { schemaFormReducer } from "./reducer";
import { Tsn } from "./libs/tree";
import { UtilsHocOutProps } from "./hocs/utils";

export const reducerFactory = new BaseFactory<FxReducer>();
export const hocFactory = new BaseFactory<(settings?: any) => new () => React.PureComponent<DefaultProps, any>>();
export const themeFactory = new BaseFactory<NsFactory>();
export const errorFactory = new BaseFactory<(element: ErrorObject[], props: DefaultProps & UtilsHocOutProps, dataKeys: Tsn[]) => string>();

hocs.forEach((hoc: { name: string, hoc: (hocFactory: BaseFactory<any>) => any }) => {
    hocFactory.add(hoc.name, hoc.hoc(hocFactory));
});

reducerFactory.add("schemaForm", schemaFormReducer);

errorFactory.add("single", (errs: ErrorObject[], props: DefaultProps & UtilsHocOutProps, dataKeys: Tsn[]) => {
    const { ajv, getTitle } = props;

    return ajv.errorsText(errs, {
        dataVar: getTitle(props).toString()
    });
});
errorFactory.add("validate", errorFactory.get("single"));
