import React from "react";
import { BaseFactory } from "fx-schema-form-core";
import { ErrorObject } from "ajv";

import { FxReducer } from "./reducers/reducer";
import { DefaultProps } from "./components";
import { NsFactory, SchemaFormNs } from "./models";
import { hocs } from "./hocs";
import { schemaFormReducer } from "./reducer";
import { Tsn } from "./libs/tree";

export const reducerFactory = new BaseFactory<FxReducer>();
export const hocFactory = new BaseFactory<(settings?: any) => new () => React.PureComponent<DefaultProps, any>>();
export const themeFactory = new BaseFactory<NsFactory>();
export const errorFactory = new BaseFactory<(element: ErrorObject, dataKeys: Tsn[]) => string>();

hocs.forEach((hoc: { name: string, hoc: (hocFactory: BaseFactory<any>) => any }) => {
    hocFactory.add(hoc.name, hoc.hoc(hocFactory));
});

reducerFactory.add("schemaForm", schemaFormReducer);

errorFactory.add("default", (element: ErrorObject, dataKeys: Tsn[]) => {
    return dataKeys.pop() + " " + element.message;
});
